import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the validation schema matching the client
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Simple in-memory rate limiting map
// Maps IP address to the timestamp of their last submission
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(ip);

    if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Request Body
    const body = await req.json();
    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: validatedData.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validatedData.data;

    // Update rate limit map
    rateLimitMap.set(ip, now);
    
    // Clean up old entries occasionally to prevent memory leaks in long-running processes
    if (rateLimitMap.size > 1000) {
      rateLimitMap.clear();
    }

    // 3. Send Notification Email to Admin
    const adminEmailPromise = resend.emails.send({
      from: "Sunga Organisation <onboarding@resend.dev>", // Replace with your verified domain e.g., no-reply@sungaorganisation.org
      to: ["hajamsaj@gmail.com"],
      replyTo: email,
      subject: "New Contact Form Submission - Sunga Organisation",
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-w-xl; margin: 0 auto; background-color: #FAF7F2; padding: 40px; border-radius: 16px; border: 1px solid rgba(212,175,55,0.2);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #D4AF37; margin: 0; font-family: 'Playfair Display', serif; font-size: 28px;">New Submission</h2>
            <p style="color: #555; margin-top: 5px; font-size: 14px;">${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <p style="margin: 0 0 15px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 15px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 15px;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 25px;">
              <strong style="display: block; margin-bottom: 10px; color: #111;">Message:</strong>
              <p style="white-space: pre-wrap; background-color: #FAF7F2; padding: 15px; border-radius: 8px; color: #444; margin: 0; border: 1px solid rgba(212,175,55,0.1);">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // 4. Send Auto-Reply to User
    const userEmailPromise = resend.emails.send({
      from: "Sunga Organisation <onboarding@resend.dev>", // Replace with your verified domain e.g., no-reply@sungaorganisation.org
      to: [email],
      subject: "Thank you for contacting Sunga Organisation",
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-w-xl; margin: 0 auto; background-color: #FAF7F2; padding: 40px; border-radius: 16px; border: 1px solid rgba(212,175,55,0.2);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #D4AF37; margin: 0; font-family: 'Playfair Display', serif; font-size: 28px;">Thank You</h2>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0;">
              Dear ${name},<br><br>
              Thank you for contacting <strong>Sunga Organisation</strong>. Our team has received your message regarding <em>"${subject}"</em> and will get back to you shortly.
            </p>
            <p style="color: #777; font-size: 14px; margin-top: 30px; margin-bottom: 0;">
              With gratitude,<br>
              <span style="color: #D4AF37; font-weight: 600;">The Sunga Organisation Team</span>
            </p>
          </div>
        </div>
      `,
    });

    // Wait for both emails to send
    const [adminResult, userResult] = await Promise.all([adminEmailPromise, userEmailPromise]);

    if (adminResult.error || userResult.error) {
      console.error("Resend Error:", adminResult.error || userResult.error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

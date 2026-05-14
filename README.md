# Sunga Organisation Website

A premium, high-performance web application built for the **Sunga Organisation**, a registered NGO dedicated to empowering communities across Africa through education, healthcare, women's empowerment, and sustainable development.

This project serves as the digital hub for the organization, emotionally engaging donors and volunteers while maintaining trust through transparent reporting and intuitive user interactions.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email Delivery**: [Resend](https://resend.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## ⚙️ Features

- **Luxury NGO Design System**: Beautiful typography, smooth micro-animations, and a curated gold-themed aesthetic.
- **Fully Responsive**: Optimized for all screen sizes from mobile to large desktop displays.
- **Interactive Sections**: Hero, About, Impact Stats, Programs, Volunteer Opportunities, Donations, Gallery, and Testimonials.
- **Functional Contact Form**: Server-side secured contact form that emails submissions directly to the administration and auto-replies to the sender.

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine (v18.17.0 or higher is recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sartajhajam/sunga-.git
   cd sunga-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

To enable the Contact Form to send emails, you need to configure the Resend API key.

1. Create a `.env.local` file in the root of the project:
   ```bash
   touch .env.local
   ```

2. Add your Resend API Key to the `.env.local` file:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
   *(You can obtain an API key by signing up at [resend.com](https://resend.com/))*

3. **Optional**: Update the sender email addresses in `src/app/api/contact/route.ts` from `onboarding@resend.dev` to a verified domain connected to your Resend account (e.g., `info@sungaorganisation.org`).

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/`: Next.js App Router configuration and global layouts.
- `src/app/api/`: Serverless API routes (e.g., the Resend contact form handler).
- `src/components/sections/`: Major UI sections (Hero, About, Contact, Gallery, etc.).
- `src/components/ui/`: Reusable UI components (Buttons, Headings, Loaders).
- `src/components/animations/`: Framer Motion wrapper components.
- `src/lib/`: Utility functions (e.g., `cn` for Tailwind class merging).
- `public/`: Static assets such as images and fonts.

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Remember to add the `RESEND_API_KEY` to your environment variables in your deployment platform's dashboard!

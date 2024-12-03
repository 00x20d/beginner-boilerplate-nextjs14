"use client";

import { Header } from "@/components/layout/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  FileCode2,
  GitBranch,
  Settings,
  Layers,
  KeyRound,
} from "lucide-react";
import { useStore } from "@/store/useStore";
import TypingText from "@/components/ui/typing-animation";
const setupSteps = [
  {
    title: "Enable Authentication",
    description:
      "Uncomment the ClerkProvider in src/app/layout.tsx to enable authentication features. Make sure to add your Clerk credentials to .env.local.",
    icon: KeyRound,
  },
  {
    title: "Setup Query Provider",
    description:
      "The QueryProvider in src/app/layout.tsx is already configured for React Query. It enables efficient data fetching and caching.",
    icon: Layers,
  },
  {
    title: "Rename Middleware",
    description:
      "Rename middleware_demo.ts to middleware.ts. This file handles authentication routes and API protection.",
    icon: FileCode2,
  },
  {
    title: "Configure Environment",
    description:
      "Create a .env.local file with your DATABASE_URL, CLERK_SECRET_KEY, and other required credentials.",
    icon: Settings,
  },
  {
    title: "Setup Database",
    description:
      "Run 'npx prisma generate' and 'npx prisma db push' to set up your database schema and generate the Prisma client.",
    icon: GitBranch,
  },
  {
    title: "Start Building",
    description:
      "You're ready! The boilerplate includes Zustand for state management, shadcn/ui for components, Supabase as DB provider and Prisma for database access.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  const greeting = useStore((state) => state.greeting);

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <Header />
      <main className='flex-1 py-8'>
        <div className='container max-w-screen-md mx-auto px-4'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold text-primary'>{greeting}</h2>
          </div>
          <div className='space-y-6 text-center mb-16'>
            <TypingText
              className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'
              text='Beginner Boilerplate'
              duration={50}
            />

            <p className='text-xl text-muted-foreground'>by ZeroToProduct</p>
            <p className='text-base max-w-2xl mx-auto text-muted-foreground'>
              Follow these steps to get your application up and running.
              Complete them in order for the best setup experience.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2'>
            {setupSteps.map((step, index) => (
              <Card
                key={index}
                className='transition-all hover:shadow-lg relative'
              >
                <div className='absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold'>
                  {index + 1}
                </div>
                <CardHeader>
                  <div className='flex items-center gap-3'>
                    <step.icon className='h-6 w-6 text-primary' />
                    <CardTitle>{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='mt-16 space-y-4 text-center'>
            <p className='text-sm text-muted-foreground'>
              Built with Next.js, Tailwind CSS, shadcn/ui, and Prisma
            </p>
            <p className='text-xs text-muted-foreground'>
              Need help? Check the documentation in the README.md file
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

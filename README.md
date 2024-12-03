# Next.js Beginner Boilerplate

A modern, feature-rich boilerplate for Next.js applications with authentication, database integration, and UI components pre-configured.

## Features

- 🔐 Authentication with [Clerk](https://clerk.com)
- 📊 Database integration with Prisma & Supabase
- 🎨 UI Components from [shadcn/ui](https://ui.shadcn.com)
- 🔄 State management with [Zustand](https://zustand-demo.pmnd.rs)
- 🚀 API data fetching with [TanStack Query](https://tanstack.com/query)
- 🎯 Type-safe development with TypeScript
- 🎭 Dark mode support with next-themes

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A [Clerk](https://clerk.com) account for authentication
- A [Supabase](https://supabase.com) account for database

## Getting Started

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd <project-name>
   npm install
   ```

2. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="your-supabase-database-url"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

3. **Enable Authentication**

   - Uncomment the ClerkProvider in `src/app/layout.tsx`
   - The QueryProvider is already configured for data fetching

4. **Setup Database**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push database schema
   npx prisma db push
   ```

5. **Rename Middleware**

   - Rename `middleware_demo.ts` to `middleware.ts` to enable authentication protection

6. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view your app.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── layout/      # Layout components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── providers/       # React context providers
└── store/           # Zustand store definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Customization

### Adding New UI Components

Use the shadcn-ui CLI to add new components:

```bash
npx shadcn-ui@latest add button
```

### Database Schema

Modify `prisma/schema.prisma` to define your database schema, then run:

```bash
npx prisma generate
npx prisma db push
```

### Authentication

Clerk routes are protected by default in `middleware.ts`. Modify the public routes array to change this:

```typescript
const publicRoutes = ["/", "/sign-in", "/sign-up"];
```

## Included Packages

- **UI & Styling**

  - `tailwindcss` - Utility-first CSS framework
  - `shadcn/ui` - Re-usable components
  - `lucide-react` - Icon library

- **State Management & Data Fetching**

  - `zustand` - State management
  - `@tanstack/react-query` - Data fetching and caching

- **Database & Auth**
  - `@prisma/client` - Database ORM
  - `@clerk/nextjs` - Authentication

## Support

Need help? Check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

## License

MIT License - feel free to use this boilerplate for any project!

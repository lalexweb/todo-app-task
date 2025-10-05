# 📝 Todo App - Test Assignment

**Modern task management application** with authentication, CRUD operations, and responsive design built as a technical test assignment.

**Technologies:** Next.js 15 (App Router), NextAuth.js, Supabase, Shadcn/ui, Tailwind CSS, TypeScript

---

## 🚀 Demo

> **Note:** Demo version available on [Vercel](https://todo-app-task-nine.vercel.app)

### Key Features:

- ✅ **Authentication** via NextAuth.js with Credentials Provider
- 📋 **CRUD tasks** with user binding
- 🔒 **Row Level Security** - users see only their own tasks
- 📱 **Responsive design** for all devices
- ⚡ **Optimistic updates** with React Query
- 🎨 **Modern UI** based on Shadcn/ui

---

### Key Components:

- **Next.js App Router** - routing and server components
- **Server Actions** - CRUD operations with validation
- **NextAuth.js** - authentication and sessions
- **Supabase** - database with RLS policies
- **React Query** - caching and data synchronization
- **Shadcn/ui** - reusable UI components

---

## 🚀 Quick Start

### Requirements

- Node.js 18+
- pnpm/npm/yarn
- Supabase project

### 1. Clone and Install

```bash
git clone <repository-url>
cd todo-app-task
npm install
```

### 2. Environment Variables Setup

Create `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-publishable-key"

# NextAuth
AUTH_SECRET="your-secret-key"
```

### 3. Database Setup

Execute SQL in Supabase SQL Editor:

```sql
-- Create tasks table
CREATE TABLE IF NOT EXISTS public.tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  title VARCHAR NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create Terms of Service table
CREATE TABLE IF NOT EXISTS public.tos_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Security policies
CREATE POLICY "Enable users to work with their data only"
  ON public.tasks FOR ALL
  USING (user_id = (((current_setting('request.headers'::text, true))::jsonb ->> 'x-user-id'::text))::uuid)
  WITH CHECK (user_id = (((current_setting('request.headers'::text, true))::jsonb ->> 'x-user-id'::text))::uuid);
```

### 4. Run Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication

### Credentials Provider

The application uses NextAuth.js with Credentials Provider for demonstration:

### Protected Routes

- Middleware checks authentication
- Unauthorized users are redirected to `/login`
- Session is stored in cookies

---

## 📄 Pages and Rendering Strategies

### 1. **Home Page** (`/`) - SSG

- Static generation with revalidate
- Hero section, features, FAQ
- Component: `MainPage.tsx`

### 2. **Tasks Page** (`/app`) - CSR

- Client-side rendering with React Query
- Optimistic updates
- Component: `AppPage.tsx`

### 3. **Login Page** (`/login`) - CSR

- Authentication form
- Zod validation
- Component: `LoginPage.tsx`

### 4. **Terms of Service** (`/terms`) - SSR

- Server-side rendering
- Dynamic content from database
- Component: `TermsPage.tsx`

### 5. **404 Page** (`/not-found`) - SSG

- Static error page
- Component: `NotFoundPage.tsx`

---

## 🎨 UI/UX Features

### Components

- **Shadcn/ui** - modern reusable components
- **Tailwind CSS** - utility-first styling
- **Lucide React** - icons
- **React Hook Form** - form management

### Responsiveness

- **Mobile-first** approach
- **Responsive breakpoints** for all screens
- **Touch-friendly** interface

### States

- **Loading skeletons** during loading
- **Empty states** for empty lists
- **Error boundaries** for error handling
- **Toast notifications** for user feedback

---

## 🚀 Deployment

> **Note:** The project is already configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and set the environment variables in the Vercel dashboard.

### Environment Variables for Production:

```env
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-publishable-key"
AUTH_SECRET="your-secret-key"
```

import MainLayout from '@/components/layout/MainLayout';
import MainProvider from '@/providers/MainProvider';
import {ThemeProvider} from '@/providers/ThemeProvider';
import '@/styles/globals.css';
import type {Metadata} from 'next';
import {Geist} from 'next/font/google';
import {ReactNode} from 'react';

const geistSans = Geist({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Todo App',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <MainProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={`${geistSans.className} antialiased`}>
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </body>
      </html>
    </MainProvider>
  );
}

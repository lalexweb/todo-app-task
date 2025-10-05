import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import {PropsWithChildren} from 'react';
import {Toaster} from 'react-hot-toast';

export default function MainLayout({children}: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full gap-10 min-h-screen">
      <Header />

      <main className="flex-grow">{children}</main>

      <Toaster />

      <Footer />
    </div>
  );
}

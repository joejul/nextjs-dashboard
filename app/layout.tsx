import './globals.scss';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Menu from '@/app/components/menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Create Next App',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="menu-wrapper">
            <Menu />
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}

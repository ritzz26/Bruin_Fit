import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
  title: 'Bruin_Fit',
  description: 'Event scheduling app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between">
            <Link href="/" className="text-xl font-bold">Bruin_Fit</Link>
            <div>
              <Link href="/login" className="mr-4">Login</Link>
              <Link href="/register">Register</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

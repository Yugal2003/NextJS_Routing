import { ReactNode } from 'react';
import './globals.css';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
            <Link href="/"><button>Home</button></Link>
            <Link href="/about"><button>About</button></Link>
            <Link href="/Contact"><button>Contact</button></Link>
        {children}
        <footer>@ Footer</footer>
      </body>
    </html>
  );
};

export default Layout;

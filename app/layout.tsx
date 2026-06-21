import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Maddula Swathi Ganga Mani Ratnam | Software Developer, Data Scientist & AI/ML Engineer',
  description: 'B.Tech Final Year student specializing in Software Development, Artificial Intelligence, Machine Learning, and Data Science. Building intelligent solutions through technology.',
  keywords: ['Software Developer', 'Data Scientist', 'AI Engineer', 'ML Engineer', 'Python', 'Machine Learning', 'Full Stack Developer'],
  authors: [{ name: 'Maddula Swathi Ganga Mani Ratnam' }],
  openGraph: {
    type: 'website',
    title: 'Maddula Swathi Ganga Mani Ratnam | Software Developer, Data Scientist & AI/ML Engineer',
    description: 'Building intelligent solutions through software engineering, machine learning, and data-driven innovation.',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swathi Maddula | Software Developer, Data Scientist & AI/ML Engineer',
    description: 'Building intelligent solutions through software engineering, machine learning, and data-driven innovation.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

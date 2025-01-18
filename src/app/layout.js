import "./globals.css";
import Header from "@/components/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Arun Patel | Portfolio",
  description: "Software Engineer Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

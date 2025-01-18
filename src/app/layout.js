import "./globals.css";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}

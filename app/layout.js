import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme/provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >  
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

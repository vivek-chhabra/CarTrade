import Footer from "@/components/footer/Footer";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CarTrade",
    description: "Discover the best cars in the world!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}

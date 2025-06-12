import type { Metadata } from "next";
import "./globals.css";
import { Inter, Luckiest_Guy } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

const luckiestGuy = Luckiest_Guy({
    variable: "--font-luckiest-guy",
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});
export const metadata: Metadata = {
    title: "The Groove - Your Local Bar & Music Spot",
    description:
        "Welcome to The Groove, the best place for music, drinks, and good vibes",
    icons: {
        icon: "/The-Groove-Logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${luckiestGuy.variable} font-sans antialiased bg-charcoal text-white`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}

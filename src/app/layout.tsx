import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
    title: "Meşhur Pazaryeri",
    description: "Yöresel ürünlerin buluşma noktası",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // suppressHydrationWarning: Dark mode geçişlerindeki hata uyarısını engeller
        <html lang="tr" suppressHydrationWarning>
            <body className="antialiased font-sans">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
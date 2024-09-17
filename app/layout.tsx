import "./globals.css";
import "./globalicons.css";
import { redHat } from "./ui/fonts";
import DealershipNavbar from "./ui/navbar";
import Footer from "./ui/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dealership",
    description: "Created by Owen Edwards(Goose).",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="bg-white">
            <body className={`${redHat.className} m-0 text-black`}>
                <DealershipNavbar></DealershipNavbar>
                {children}
                <Footer className="bg-black text-red-500" />
            </body>
        </html>
    );
}
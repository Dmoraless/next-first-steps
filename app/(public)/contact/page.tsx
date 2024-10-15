import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact page title",
    description: "Contact page description",
    keywords: ['Contact page', 'David', 'Info'],
};

export default function ContactPage() {
    return (
        <>
        <span className="text-7xl">Contact Page</span></>
    );
};
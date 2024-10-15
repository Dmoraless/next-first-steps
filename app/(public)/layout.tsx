import { Navbar } from "../components";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg text-purple-400">Hello Root Layout Public</span>
        {children}
      </main>
      </>
    );
  }
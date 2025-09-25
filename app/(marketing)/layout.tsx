import "./../globals.css";
import { HeroHeader } from "@/components/layout/header";
import FooterSection from "@/components/layout/FooterSection";

export default function LayoutMarketing({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <HeroHeader />
      {children}
      <FooterSection />
    </main>
  );
}

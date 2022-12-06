import Head from "next/head";
import Image from "next/image";
import WelcomeSection from "../components/frontpage/WelcomeSection";
import TicketSection from "../components/frontpage/TicketSection";
import NewsSection from "../components/frontpage/NewsSection";

export default function Home() {
  return (
    <>
      <WelcomeSection></WelcomeSection>
      <TicketSection />
      <NewsSection />
    </>
  );
}

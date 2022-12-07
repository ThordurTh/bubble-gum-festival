import Head from "next/head";
import Image from "next/image";
import WelcomeSection from "../components/frontpage/WelcomeSection";
import TicketSection from "../components/frontpage/TicketSection";
import NewsSection from "../components/frontpage/NewsSection";
import Lineup from "../components/lineup/Lineup";
import { nanoid } from "nanoid";

export default function Home({ data }) {
  return (
    <>
      <WelcomeSection data={data} />
      <TicketSection />
      <NewsSection />
    </>
  );
}

export async function getStaticProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}

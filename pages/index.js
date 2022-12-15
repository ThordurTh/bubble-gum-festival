import Head from "next/head";
import Image from "next/image";
import WelcomeSection from "../Components/frontpage/WelcomeSection";
import TicketSection from "../Components/frontpage/TicketSection";
import NewsSection from "../Components/frontpage/NewsSection";
import Lineup from "../Components/lineup/Lineup";
import { nanoid } from "nanoid";

export default function Home({ data }) {
  // console.log(typeof data);
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
  const res = await fetch("https://touchgrassfestival.fly.dev/bands");
  const data = await res.json();
  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}

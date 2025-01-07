"use client";

import { Section } from "./_components/Section";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
    </div>
  );
}

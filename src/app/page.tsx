import { Section } from "./_components/Section";

export default function Home() {
  return (
    <div className="">
      <Section title="Popular" endpoint="popular?language=en-US&page=1" />
      <Section title="Upcoming" endpoint="upcoming?language=en-US&page=1" />
      <Section title="Top rated" endpoint="top_rated?language=en-US&page=1" />
    </div>
  );
}

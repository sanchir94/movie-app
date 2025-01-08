import { Section } from "./_components/Section";

export default function Home() {
  return (
    <div className="">
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
    </div>
  );
}

import { Options } from "@/lib/types";
import { Movie } from "@/lib/types";
import { MovieCard } from "../_components/MovieCard";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=3`,
    Options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results;
  return (
    <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10px">
      {movies?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

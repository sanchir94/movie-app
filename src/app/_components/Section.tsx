import Link from "next/link";
import { Movie } from "../../lib/types";
import { MovieCard } from "./MovieCard";
import { Options } from "../../lib/types";
import { Props } from "../../lib/types";

export const Section = async ({ title, endpoint, moreLink }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}`,
    Options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results?.slice(0, 10);

  const isDetailPage = moreLink?.includes("movie");
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h1 className="font-semibold"> {title}</h1>
        {moreLink && (
          <Link href={`/${endpoint}`}>
            <p>see more</p>
          </Link>
        )}
      </div>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            detailLink={isDetailPage ? `${movie.id}` : ""}
          />
        ))}
      </div>
    </div>
  );
};

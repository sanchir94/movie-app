"use client";

import Link from "next/link";
import { Movie } from "../../lib/types";
import { MovieCard } from "./MovieCard";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};

export type Props = {
  endpoint: string;
  title: string;
};

export const Section = async ({ title, endpoint }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=3`,
    options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results?.slice(0, 10);
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h1 className="font-semibold"> {title}</h1>
        <div className="font-italic">
          <Link href={`/${endpoint}`}>
            <p>see more</p>
          </Link>
        </div>
      </div>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

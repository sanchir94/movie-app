import Link from "next/link";
import { Movie } from "../../lib/types";
import { Star } from "lucide-react";

export const MovieCard = ({
  movie,
  detailLink,
}: {
  movie: Movie;
  detailLink?: string;
}) => {
  const imgPath = movie?.poster_path ?? movie?.backdrop_path;

  const src = imgPath
    ? `https://image.tmdb.org/t/p/w500/${imgPath}`
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtIiwbQLKvRRQn_06612_CSC84SsKQTbvoQ&s`;

  return (
    <Link href={`movie/${movie.id}`}>
      <div className="rounded-lg bg-gray-100">
        <img src={src} className="rounded-t-lg" />
        <div className="p-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="stroke-yellow-300 fill-yellow-300" />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <p>{movie.title}</p>
        </div>
      </div>
    </Link>
  );
};

import { Options } from "@/lib/types";
import { Star } from "lucide-react";
import { Section } from "@/app/_components/Section";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    Options
  );
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <div>
        <p className="text-2xl font-bold">{data.title}</p>
        <div className=" flex items-center gap-1 ">
          <Star size={16} className="stroke-yellow-300 fill-yellow-300" />
          <div className="">
            <p>
              {data.vote_average}
              <span className="text-gray-500">/10</span>
            </p>
            <p>{data.vote_count}</p>
          </div>
        </div>
        <p>{data.release_date}</p>
      </div>
      <div className="w-[100%]  h-[700px] flex flex-col justify-between ">
        <div className="w-[375px] h-[211px] ">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path} `} />
        </div>

        <div>
          <p>{data.overview}</p>
          <p>{data.director}</p>
        </div>
      </div>
      <Section
        title="More like this"
        endpoint={`movie/${params.id}/recommendations`}
        moreLink={`/movie/${params.id}/recommendations`}
      />
    </div>
  );
}

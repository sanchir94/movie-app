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
    <div className="w-[100%]  h-[882px] flex flex-col justify-between ">
      <div className="w-[100%] h-[283px] ">
        <div className="w-[211px] h-[56px] flex ">
          <p className="font-bold">{data.title}</p>
          <p className="">
            {data.release_date} · PG · {data.runtime}m
          </p>

          <div className=" flex items-center gap-1 ml-[180px]">
            <Star size={16} className="stroke-yellow-300 fill-yellow-300" />
            <div className="">
              <p>
                {data.vote_average}
                <span className="text-gray-500">/10</span>
              </p>
              <p>{data.vote_count}</p>
            </div>
          </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path} `} />
      </div>

      <Section
        title="More like this"
        endpoint={`movie/${params.id}/recommendations`}
        moreLink={`/movie/${params.id}/recommendations`}
      />
    </div>
  );
}

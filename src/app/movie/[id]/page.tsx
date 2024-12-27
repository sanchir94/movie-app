"use client";

import { Options } from "@/lib/types";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    Options
  );
  const data = await response.json();
  console.log(data);

  return (
    <div className="w-[100%]  h-[882px] flex flex-col justify-between">
      <div className="w-[100%] bg-indigo-300 h-[283px] flex">
        <div className="w-[211px] h-[56px] bg-red-300">
          <p className="font-bold">{data.title}</p>
          <p className="">
            {data.release_date} · PG · {data.runtime}m
          </p>
        </div>
        <div className="bg-red-700 flex items-center gap-1 ">
          <img src="/star.png" alt="" className="size-[24px]" />
          <div className="">
            <p>
              {data.vote_average}
              <span className="text-gray-500">/10</span>
            </p>
            <p>{data.vote_count}</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-green-300 h-[567px]"></div>
    </div>
  );
}

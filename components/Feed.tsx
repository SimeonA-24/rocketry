import Link from "next/link";
import React from "react";
import wiki from "@/public/imgjpg.jpg";
import Image from "next/image";

type Props = {
  result: Result;
};

export default function Feed({ result }: Props) {
  return (
    <div className="card w-full min-w-96 min-h-44 h-auto flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        <div className="h-auto w-[20%] min-w-32 bg-black/50 p-5 flex items-center justify-center rounded-md">
          {result?.thumbnail?.source ? (
            <img
              src={result.thumbnail.source}
              alt={result.title}
              width={300}
              height={300}
              loading="eager"
              className="w-full"
            />
          ) : (
            <Image
              src={wiki}
              alt="no img"
              width={300}
              height={300}
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col w-[70%]">
          <h2 className="font-semibold text-xl">{result.title}</h2>
          <p className="pt-3">{result.extract}</p>
        </div>
      </div>
      <Link
        href={`https://en.wikipedia.org/?curid=${result.pageid}`}
        target="_blank"
        className="black_btn mt-3 self-end"
      >
        Read more
      </Link>
    </div>
  );
}

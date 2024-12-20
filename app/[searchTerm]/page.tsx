import Feed from "@/components/Feed";
import getWikiResults from "@/lib/getResults";
import React from "react";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  };
}

export default async function SearchResult({ params: { searchTerm } }: Props) {
  const Data: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await Data;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="mx-auto w-full pt-10 min-h-screen">
      {results ? (
        <div className="flex gap-5 flex-wrap">
          {Object.values(results).map((result) => {
            return <Feed key={result.pageid} result={result} />;
          })}
        </div>
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}

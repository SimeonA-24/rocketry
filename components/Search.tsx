"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="relative w-full flex pt-10 items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for any wikipedia article"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search_input peer"
      />
    </form>
  );
}

import React from "react";

type Props = { title: string };

export default function Logo({ title }: Props) {
  return (
    <div className="p-14 rounded-xl bg-black/30 backdrop-blur head_text">
      {title}
    </div>
  );
}

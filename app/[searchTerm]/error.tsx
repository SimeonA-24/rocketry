"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="fixed bg-black/50 flex w-screen h-screen top-0 items-center justify-center">
      <div className="glassmorphism p-5">
        <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
        <div className="flex items-center justify-center gap-5">
          <button
            className=" p-4  text-white rounded-xl black_btn"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
          <p className="text-base font-satoshi">or</p>
          <a className="outline_btn" href="/">
            back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

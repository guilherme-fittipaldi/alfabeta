import React from "react";
import { ChevronLeftSvg } from "./Svgs";
import { useRouter } from "next/router";
import { useBoundStore } from "~/hooks/useBoundStore";

export const TopBar = ({
  backgroundColor = "bg-[#01daee]",
  borderColor = "border-[#00b1ed]",
}: {
  backgroundColor?: `bg-${string}`;
  borderColor?: `border-${string}`;
}) => {
  const router = useRouter();
  const name = useBoundStore((x) => x.name);

  return (
    <header className="fixed z-20 w-full">
      <div
        className={`relative flex h-full w-full items-center border-b-2 p-4 transition duration-500 sm:hidden ${borderColor} ${backgroundColor}`}
      >
        <button className="flex items-center text-white h-7" onClick={() => void router.push("/")}>
          <ChevronLeftSvg />
        </button>
        <p className="text-lg font-medium text-white">Olá, {name}</p>{" "}
      </div>
    </header>
  );
};

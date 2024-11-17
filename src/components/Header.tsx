import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-center px-10 font-bold text-[#00b1ed]">
      <Link
        className="text-4xl"
        href="/"
        style={{ fontFamily: "Aharoni Bold" }}
      >
        alfa<span className="text-[#01daee]">beta</span>
      </Link>
    </header>
  );
};

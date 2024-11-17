import { type NextPage } from "next";
import Link from "next/link";
import { Header } from "~/components/Header";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { useBoundStore } from "~/hooks/useBoundStore";
import { GlobeSvg } from "~/components/Svgs";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const setLanguage = useBoundStore((x) => x.setLanguage);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center text-[#00b1ed]"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <Header />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            Alfabetização para <span className="text-[#01daee]">todos!</span>
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/learn"
              onClick={() =>
                setLanguage({
                  name: "Portuguese",
                  nativeName: "Português",
                  viewBox: "0 594 82 66",
                  code: "pt",
                })
              }
              className="w-full rounded-2xl border-b-4 border-blue-600 bg-blue-500 px-10 py-3 text-center font-bold uppercase text-white transition hover:border-blue-600 hover:bg-blue-500 md:min-w-[320px]"
            >
              Vamos lá!
            </Link>
          </div>
        </div>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;

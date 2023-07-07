import HeaderInfo from "@components/contents/home/HeaderInfo";
import HeroName from "@components/contents/home/HeroName";
import ListProject from "@components/contents/projects/ListProject";

export const metadata = {
  title: "Akbar Anung Yudha Saputra",
  description: "Portfolio website of Akbar Anung Yudha Saputra",
  authors: {
    name: "Akbar Anung Yudha Saputra",
    url: "https://github.com/akbarsaputrait",
  },
};

export default function Home() {
  return (
    <>
      <HeaderInfo />
      <HeroName />

      <div className="my-16">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-2xl uppercase font-bold font-serif mb-2 tracking-wide">
            Projects
          </p>
          <div className="w-full h-[1px] bg-white flex-1"></div>
        </div>

        <ListProject />
      </div>
    </>
  );
}

import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { SiStoryblok } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-10">
      <div className="text-center">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/akbarsaputrait"
          target="_blank"
          rel="noreferrer"
        >
          @akbarsaputrait
        </a>
      </div>
      <div className="flex flex-row gap-3 text-2xl">
        <BiLogoReact title="React" />
        <BiLogoTailwindCss title="TailwindCSS" />
        <SiStoryblok title="Storyblok" />
      </div>
    </div>
  );
};

export default Footer;

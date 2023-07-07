import "@styles/card-project.scss";
import Image from "next/image";

interface ICardProjectProp {
  title: string;
  industry: string;
  description: string;
  logo: string;
  className?: string;
  imageClass?: string;
}

const CardProject: React.FC<ICardProjectProp> = ({
  title,
  industry,
  description,
  logo,
  className,
  imageClass,
}) => {
  return (
    <div className={`group relative block h-64 sm:h-80 lg:h-96 ${className}`}>
      <span className="absolute inset-0 border-2 border-white"></span>
      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <Image
            src={`https:${logo}`}
            alt={title}
            className={imageClass}
            width={100}
            height={100}
          />

          <h2 className="mt-4 text-xl font-medium sm:text-2xl text-zinc-500">
            {title}
          </h2>
          <p className="text-xs text-zinc-400">{industry}</p>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl text-zinc-500">
            {title}
          </h3>

          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

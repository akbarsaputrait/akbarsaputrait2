import { time } from "@helpers/time.helper";
import Image from "next/image";
import Link from "next/link";

interface IBlogCoverProps {
  cover: string;
  title: string;
  date?: string | null;
  slug: string;
}

const CoverBlog: React.FC<IBlogCoverProps> = ({ cover, title, date, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="block overflow-hidden">
      <Image
        src={cover}
        alt="Blog Cover"
        className="object-cover w-[300px] h-[350px] sm:h-[450px]"
        width={100}
        height={100}
      />

      <div className="relative pt-3 text-zinc-100">
        <p className="text-zinc-100">{title}</p>

        <p className="mt-1.5 text-sm tracking-wide text-zinc-400">
          {time().from(time(date || time()))}
        </p>
      </div>
    </Link>
  );
};

export default CoverBlog;

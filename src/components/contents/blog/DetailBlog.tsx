"use client";
import { time } from "@/library/helpers/time.helper";
import { ISbStoryData, getStoryblokApi } from "@storyblok/react";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";

const DetailBlog: React.FC = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [data, setData] = useState<ISbStoryData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`);
        setData(data.story);
        setLoading(false);
      } catch (error) {
        router.push("/404");
      }
    };

    fetch();
  }, [router, slug]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (data) {
    return (
      <>
        <Head>
          <title>{data.content.title} - My App</title>
        </Head>

        <div className="flex md:flex-row flex-col w-full h-full gap-8">
          <div className="flex flex-col md:sticky md:top-8 md:self-start flex-none gap-4">
            <div
              className="w-full md:w-[300px] h-80 md:h-[450px] bg-cover bg-center"
              style={{
                backgroundImage: data.content.cover.filename
                  ? `url(${data.content.cover.filename})`
                  : undefined,
              }}
            ></div>
          </div>

          <div className="items-end">
            <h1 className="text-2xl font-bold">{data.content.title}</h1>
            <div className="mt-1.5 text-sm tracking-wide text-zinc-400 flex items-center gap-1">
              <HiOutlineClock />
              <span>
                {time(data.first_published_at || time()).format("LLL")}
              </span>
            </div>

            <ReactMarkdown
              remarkPlugins={[gfm]}
              className="mt-8 prose prose-p:text-zinc-50 prose-headings:text-zinc-100 prose-ul:text-zinc-100 prose-li:text-zinc-100 prose-ol:text-zinc-100 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-code:text-zinc-200"
            >
              {data.content.description}
            </ReactMarkdown>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default DetailBlog;

/* eslint-disable camelcase */
"use client";
import CoverBlog from "@components/contents/blog/CoverBlog";
import LoadingIndicator from "@components/ui/LoadingIndicator";
import { ISbStoryData, getStoryblokApi } from "@storyblok/react";
import { useEffect, useState } from "react";

const ListBlog: React.FC = () => {
  const [data, setData] = useState<ISbStoryData[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: "blog/",
        sort_by: "created_at:desc",
      });
      setData(data.stories);
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) return <LoadingIndicator />;

  if (data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <CoverBlog
            key={item.id}
            cover={item.content.cover.filename}
            title={item.name}
            date={item.first_published_at}
            slug={item.slug}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default ListBlog;

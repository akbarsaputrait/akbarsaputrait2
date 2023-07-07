"use client";
import LoadingIndicator from "@components/ui/LoadingIndicator";
import {
  ISbStoryData,
  getStoryblokApi,
  renderRichText,
} from "@storyblok/react";
import { useEffect, useState } from "react";
import CardProject from "./CardProject";

const ListProject: React.FC = () => {
  const [data, setData] = useState<ISbStoryData[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: "projects/",
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
        {data.map((project) => (
          <CardProject
            key={project.uuid}
            title={project.content.title}
            industry={project.content.industry}
            logo={project.content.logo}
            description={renderRichText(project.content.description)}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default ListProject;

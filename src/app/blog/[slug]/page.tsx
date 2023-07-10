import DetailBlog from "@components/contents/blog/DetailBlog";
import { defaultMeta } from "@helpers/meta.helper";
import { capitalize, join, split } from "lodash";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string | null | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    ...defaultMeta,
    title: `${capitalize(
      join(split(params.slug || "", "-"), " ")
    )} - @akbarsaputrait`,
  };
}

export default function Slug() {
  return <DetailBlog />;
}

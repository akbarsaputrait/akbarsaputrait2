"use client";
import { apiPlugin, storyblokInit } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components: {},
});

export default function StoryblokProvider({ children }: any) {
  return children;
}

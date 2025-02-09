"use client";

import YouTube from "react-youtube";

export default function YoutubeWrapper() {
  return (
    <YouTube
      videoId="vPTR6_pJAYc"
      iframeClassName="rounded-xl"
      opts={{ width: "600", height: "340" }}
    />
  );
}

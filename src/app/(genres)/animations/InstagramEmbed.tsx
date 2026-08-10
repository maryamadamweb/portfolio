"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Instagram's oEmbed markup, trimmed to just the permalink placeholders.
// embed.js (loaded once, in Row) walks the DOM for `.instagram-media`
// blockquotes and replaces each with the real iframe — reprocessing is
// re-triggered here on mount since these clusters render after the script
// may have already run its initial pass.
function embedHtml(permalink: string) {
  return `<a href="${permalink}" target="_blank" rel="noopener noreferrer" style="background:#FFFFFF; line-height:0; padding:0; text-align:center; text-decoration:none; width:100%; display:block;">View this post on Instagram</a>`;
}

export function InstagramEmbed({
  permalink,
  className,
}: {
  permalink: string;
  className?: string;
}) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [permalink]);

  return (
    <blockquote
      ref={ref}
      className={`instagram-media ${className ?? ""}`}
      data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "270px",
        padding: 0,
        width: "100%",
      }}
      dangerouslySetInnerHTML={{ __html: embedHtml(permalink) }}
    />
  );
}

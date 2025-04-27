import React from "react";

interface InstagramEmbedListProps {
  postUrls: string[];
}

export default function InstagramEmbedList({ postUrls }: InstagramEmbedListProps) {
  return (
    <div className="ig-embed-list">
      {postUrls.map((url, idx) => (
        <div className="ig-embed-item" key={idx}>
          <iframe
            src={`https://www.instagram.com/p/${getPostId(url)}/embed`}
            allow="encrypted-media"
            frameBorder={0}
            scrolling="no"
            style={{ width: '100%', minWidth: 250, maxWidth: 380, height: 480, borderRadius: '1.1rem', background: '#fff', boxShadow: '0 2px 8px rgba(31,31,31,0.09)' }}
            title={`Instagram Post ${idx + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

function getPostId(url: string): string {
  // Accepts full IG post URL or just the shortcode
  const match = url.match(/instagram.com\/p\/([\w-]+)/) || url.match(/^([\w-]+)$/);
  return match ? match[1] : url;
}

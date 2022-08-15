import React from 'react';

export default function TwitchLiveEmbeded() {
  return (
    <iframe
      title="twitch"
      src="https://player.twitch.tv/?channel=meganhertz&parent=localhost&muted=true"
      height="600px"
      width="100%"
      frameBorder="0"
      allowFullScreen
    />
  );
}

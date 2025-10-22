import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';



const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  const getEmbedUrl = (url) => {
    if (url.includes("m.youtube.com")) {
      return url.replace("m.youtube.com/watch?v=", "www.youtube.com/embed/");
    }
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  return (
    <div className="px-6 sm:px-16 md:px-8 lg:px-16 xl:px-20 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">Trailers</p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />
        <iframe
          width="960"
          height="540"
          className="mx-auto max-w-full rounded-lg shadow-lg"
          src={getEmbedUrl(currentTrailer.videoUrl)}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TrailerSection;

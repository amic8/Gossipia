import React from 'react';
import Image from 'next/image';
import submissionImage from '../public/submission-icon.png';
import feedImage from '../public/feed-icon.png';

function GossipCards() {
  return (
    <div className="flex flex-col items-center gap-10 py-5 px-3 w-full h-screen">
      <div className="flex flex-col gap-10 w-full max-w-4xl ml-24">
        <div className="relative translate-x-96 w-1/2 h-[300px] rounded-lg shadow-lg p-10 flex flex-col justify-between bg-lime-300 text-black">
          <h2 className="text-3xl font-bold">Gossip Submission</h2>
          <Image src={submissionImage} alt="Submission Icon" className="w-40 absolute top-6 right-6" />
          <p className="text-xl mt-auto">Spill the Tea: Share Your Scoop</p>
        </div>

        <div className="relative -translate-x-44 w-1/2 h-[300px] rounded-lg shadow-lg p-10 flex flex-col justify-between bg-gray-200 text-black">
          <h2 className="text-3xl font-bold">Gossip Feed</h2>
          <Image src={feedImage} alt="Feed Icon" className="w-44 absolute top-6 right-6" />
          <p className="text-lg mt-auto">Stay Informed: Latest Gossip Updates</p>
        </div>
      </div>
    </div>
  );
}

export default GossipCards;


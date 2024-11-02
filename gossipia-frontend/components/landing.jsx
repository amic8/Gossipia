import React from 'react';
import Link from 'next/link';

const GossipiaHeader = () => {
  return (
    <header className="flex justify-between items-center px-10 ">
      <div className="flex items-center  -translate-x-96">
        <img src="/logo.svg" alt="Gossipia Logo" className="w-36 h-36 " />
      </div>
      <nav className="translate-x-80 space-x-8">
        <Link href="#about-gossipia" legacyBehavior><a className="text-black hover:text-green-500">About Gossipia</a></Link>
        <Link href="#use-cases" legacyBehavior><a className="text-black hover:text-green-500">Use Cases</a></Link>
        <Link href="https://github.com/your-github" legacyBehavior><a target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500">GitHub</a></Link>
        <Link href="#docs" legacyBehavior><a className="text-black hover:text-green-500">Docs</a></Link>
        <button className="border rounded px-4 py-2 border-black hover:bg-black hover:text-white">Request help</button>
      </nav>
    </header>
  );
};

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <GossipiaHeader />
      <div className="flex flex-row items-center justify-center mt-14 px-10 space-x-10">
        <div className="flex flex-col items-start">
          <h2 className="text-6xl font-bold mb-6">Gossip Uncovered, Secrets Exposed</h2>
          <p className="text-lg max-w-md mb-10">
            Uncover the juiciest rumors and secrets, forever stored. Submit anonymous gossip and join the unalterable chain. Where whispers become permanent.
          </p>
        </div>
        <div>
          <img src="/Illustration.png" alt="Megaphone Graphic" className="w-full max-w-lg" />
        </div>
      </div>
      <footer className="mt-15 p-10 text-center text-sm text-gray-500">
        <p className="font-bold">Disclaimer:</p>
        <p>Our Webapplication Gossipia: Gossip Uncovered, Secrets Exposed is for entertainment purposes only. User-submitted content is anonymous, unverified and may be inaccurate or misleading. We do not fact-check or endorse any information shared. Use at your own discretion.</p>
      </footer>
    </div>
  );
};

export default Landing;
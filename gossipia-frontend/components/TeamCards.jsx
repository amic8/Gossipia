import React from "react";

const TeamCards = () => {
  return (
    <div>
      <div className="flex items-center mb-6 mt-32 p-6">
        <span className="bg-lime-400 text-sm font-semibold px-2 py-1 rounded-lg mr-3">
          Crew
        </span>
        <p className="text-gray-800">
          Meet the visionary team that’s bringing floccinaucinihilipilificated
          gossip tracker: Gossipia to the forefront! With expertise in frontend and backend technologies,
        UI/UX, and innovative thinking, this crew is redefining
          the gossip landscape!
        </p>
      </div>
      <div className="flex gap-5 justify-center mt-20">
        <div className="w-72 p-6 bg-white rounded-2xl shadow-md text-center relative">
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4"
          >
            <img src="/anna.png" alt="Anna Micheal" className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-bold">Anna Micheal</h3>
          <p className="text-gray-500">S5 CSE, CUCEK</p>
          <hr className="my-4 border-t border-gray-300" />
          <p className="text-gray-700">
          A Creative Designer played a crucial role in shaping the concept and vision of the project, crafted the brand logo and contributed to design elements.
          </p>
        </div>
        <div className="w-72 p-6 bg-white rounded-2xl shadow-md text-center relative">
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4"
          >
            <img src="/hari.png" alt="Harigovind M G" className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-bold">Harigovind M G</h3>
          <p className="text-gray-500">S5 CSE, CUCEK</p>
          <hr className="my-4 border-t border-gray-300" />
          <p className="text-gray-700">
          A Fullstack Engineer who developed the backend, frontend, and handled DevOps, ensuring the technical foundation of the project is seamless and reliable.
          </p>

        </div>
        <div className="w-72 p-6 bg-white rounded-2xl shadow-md text-center relative">
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4"
    
          >
            <img src="/treesa.png" alt="Treesa George" className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-bold">Treesa George</h3>
          <p className="text-gray-500">S5 CSE, CUCEK</p>
          <hr className="my-4 border-t border-gray-300" />
          <p className="text-gray-700">
          A UI/UX Designer and Outreach Coordinator who designed the user interface, documented the project effectively, and managed outreach to engage a broader audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;

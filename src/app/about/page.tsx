"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  dataMissionCompany,
  dataVisionCompany,
} from "@/components/data/data.dumy";

interface TeamMember {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
}

export default function About() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const data = await response.json();
      setTeamMembers(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching team members:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div className="relative bg-blue-950 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 py-16 lg:py-32 space-y-8 lg:space-y-0">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            We Are <span className="text-green-500">Sentimental Engineers</span>
          </h1>
          <p className="mt-4 text-lg text-justify mr-4 lg:text-xl text-gray-300">
            We professionally deliver digital solutions using agile methodology
            to help established companies and startups perform by providing
            high-quality software development services.
          </p>
        </div>

        <div className="flex-1 relative w-full h-64 lg:h-96">
          <Image
            src="/cover.png"
            alt="Sentimental Engineers"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataVisionCompany.map((vision) => (
              <div
                key={vision.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
              >
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {vision.id}
                </div>
                <p className="text-gray-700 font-medium">
                  {vision.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20 max-w-4xl mx-auto text-center py-10">
        <h3 className="text-5xl font-semibold text-white mb-4">Our Mission</h3>
        <p className="text-lg lg:text-xl text-gray-300">
          {dataMissionCompany[0]?.description}
        </p>
      </div>
      <div className="text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10">
            Introduce Our Teams
          </h2>
          {loading ? (
            <p>Loading team members...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.picture.large}
                      alt={`${member.name.first} ${member.name.last}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">
                      {member.name.first} {member.name.last}
                    </h3>
                    <p className="text-gray-600">Team Member</p>
                    <div className="flex justify-center space-x-4 mt-4 text-gray-600">
                      <a href="#" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-12 space-x-4">
            <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
              Collaborate with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

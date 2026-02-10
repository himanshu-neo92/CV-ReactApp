import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GraduationCap,
  Globe,
  Briefcase,
} from "lucide-react";
import profileImage from "../resources/Me.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-8 flex justify-center">
      <div className="bg-white shadow-lg w-[794px]">
{/* Header Section */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <div className="flex items-center gap-5">
            <img
              src={profileImage}
              alt="Himanshu Chablani"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-2xl mb-2">
                Himanshu Chablani
              </h1>
              <p className="text-lg text-gray-100">
                Senior Software Engineer @ Meta
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - 70/30 Split */}
        <div className="grid grid-cols-[70%_30%]">
          {/* Left Column - 70% */}
          <div className="p-8 border-r border-gray-200">
            {/* About Me */}
            <section className="mb-8">
              <h2 className="text-xl text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
                About Me
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dedicated software developer with extensive experience in C++, computer networking, networking infrastructure, game engines, and third-party APIs. Proven ability to quickly achieve proficiency in new languages and frameworks. Strong technical aptitude and a drive for continuous learning, focused on creating efficient systems to resolve complex issues and contribute significantly to the field of computing.
              </p>
            </section>

            {/* Technical Summary */}
            <section className="mb-8">
              <h2 className="text-xl text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
                Technical Summary
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-2">
                <li>Highly accomplished Software Engineer with 11 years of extensive experience in software development, specializing in C++ and Python.</li>
                <li>At Meta, rapidly gained proficiency in Hack, React, GraphQL, and TypeScript, utilizing AI tools to accelerate development and delivery.</li>
                <li>Architected and developed highly ambitious, large-scale projects, facilitating the successful delivery of numerous demonstrations.</li>

                <li>Previously, served as Network Lead at EA Sports.</li>
                <li>Responsible for architecting a low-latency and bandwidth network gameplay system for an unannounced Massive Multiplayer Online (MMO) title at EA Sports.</li>
                <li>Implemented a mass testing tool using Python and Protobuf on EA's internal cloud infrastructure.</li>
              </ul>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h2 className="text-xl text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
                Work Experience
              </h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-gray-900">
                      Senior Software Engineer
                    </h3>
                    <p className="text-gray-700">
                      Meta
                    </p>
                  </div>
                  <span className="text-gray-600">
                    October 2024 - Present
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4">
                  <li>
                    Architected the end-to-end stack for a core virtual environment feature, enabling recorded animation and audio playback.
                  </li>
                  <li>
                    Developed functionality to significantly increase effective user capacity by enabling live broadcast of animation and audio to multiple server shards, requiring deep technical work across VoIP, Matchmaking, and real-time signaling (pub/sub system).
                  </li>
                  <li>
                    Championed the use of AI to boost productivity, including delivering presentations and informative posts; significantly increased code stability and reliability by improving test coverage for a critical codebase.
                  </li>
                  <li>
                    Created a Tool and VsCode extension to enable developers to record, manage, and easily run shell commands, substantially increasing developer productivity.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-gray-900">
                      Online Software Engineer
                    </h3>
                    <p className="text-gray-700">
                      EA Sports
                    </p>
                  </div>
                  <span className="text-gray-600">
                    September 2021 - October 2024
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4">
                  <li> Managed and mentored a team of two engineers focused on the gameplay network stack. Directed the broader team on best practices for utilizing the networking stack and implementing network-related gameplay features.</li>
                  <li>
                    Architected the complete gameplay network stack for an unannounced Massively Multiplayer Online (MMO) title.
                  </li>
                  <li>
                    Defined server configurations and deployment strategies through close collaboration with engine and infrastructure teams.
                  </li>
                  <li>
                    Managed Continuous Integration (CI), integrating engine and 3rd party code into the project repository on a monthly basis.
                  </li>
                  <li>
                    Developed and deployed a mass testing tool on EA's internal cloud infrastructure using Python and leveraging Protobuf technology.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-gray-900">
                      Engine Programmer (Network)
                    </h3>
                    <p className="text-gray-700">
                      Rebellion
                    </p>
                  </div>
                  <span className="text-gray-600">
                    May 2015 - September 2021
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4">
                  <li>
                    Developed and integrated leaderboard, stats, achievements, and matchmaking features for Asura Engine using Sony, Microsoft, and Epic SDKs.
                  </li>
                  <li>
                    Optimized gameplay networking for low latency and bandwidth to ensure a smooth multiplayer experience.
                  </li>
                  <li>
                    Contributed to the successful delivery of six major game titles, including Sniper Elite 4, Sniper Elite 5, and Evil Genius 2.
                  </li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-xl text-gray-800 mb-4 pb-2 border-b-2 border-gray-600 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>

              <div className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Master's Degree - Computer Games and Entertainment
                    </h4>
                    <p className="text-sm text-gray-700">
                      Goldsmiths, University of London
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">
                      2014 - 2015
                    </span>
                    <p className="text-xs text-gray-600 font-semibold">
                      Distinction
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  This course provided a strong foundation in game development, encompassing core programming skills in C++, advanced mathematical and graphical concepts, and specialized knowledge in 3D animation, AI, and game physics. Additionally, it covered essential business acumen, intellectual property (IP) law, entrepreneurship, and effective team management.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Bachelor's Degree - Computer Science Engineering
                    </h4>
                    <p className="text-sm text-gray-700">
                      JIIT Noida
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">
                      2010 - 2014
                    </span>
                    <p className="text-xs text-gray-600 font-semibold">
                      8.1 CGPA
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Covered a broad range of subjects including Computer Programming, Operating Systems, Computer Networks, Web Technology, Cryptography & Network Security, Digital Electronics, and Mathematics.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - 30% */}
          <div className="bg-gray-50 p-6 right-column-print">
            {/* Contact Details */}
            <section className="mb-5">
              <h2 className="text-lg text-gray-800 mb-3 pb-2 border-b-2 border-gray-600">
                Contact
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-700 -ml-1">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-left -ml-2">
                    himanshuchablani@yahoo.com
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">
                    +44 7763865183
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">Aldershot, UK</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                  <a
                    href="https://www.linkedin.com/in/himanshu-chablani-5124961a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Himanshu Chablani
                  </a>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-5">
              <h2 className="text-lg text-gray-800 mb-3 pb-2 border-b-2 border-gray-600">
                Skills
              </h2>

              <div className="mb-3">
                <h4 className="text-xs font-semibold text-gray-800 mb-1">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Computer Networking",
                    "Network Infrastructure",
                    "RESTful API",
                    "Game Engines",
                    "VR",
                    "TDD",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-xs font-semibold text-gray-800 mb-1">
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "C++",
                    "Python",
                    "TypeScript",
                    "Hack",
                    "Shell",
                    "Protobuf",
                    "GraphQL",
                    "SQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-xs font-semibold text-gray-800 mb-1">
                  Frameworks and Tools
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "gRPC",
                    "React",
                    "Scuba",
                    "Git/Perforce",
                    "CI/CD",
                    "VSCode",
                    "Figma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-xs font-semibold text-gray-800 mb-1">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Leadership",
                    "Team Work",
                    "Problem Solving",
                    "Adaptability",
                    "Communication",
                    "Agile/Scrum",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Notable Projects */}
            <section>
              <h2 className="text-lg text-gray-800 mb-3 pb-2 border-b-2 border-gray-600 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Notable Projects
              </h2>

<ul className="text-xs text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://horizon.meta.com/?locale=en_GB" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Horizon Worlds</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/207336/madden-nfl-24/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Madden NFL 24</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/189785/madden-nfl-23/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Madden NFL 23</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/184928/sniper-elite-5-france/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Sniper Elite 5: France</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/161492/evil-genius-2-world-domination/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Evil Genius 2: World Domination</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/141929/zombie-army-4-dead-war/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Zombie Army 4: Dead War</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/112803/strange-brigade/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Strange Brigade</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <a href="https://www.mobygames.com/game/83671/sniper-elite-4-italia/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">Sniper Elite 4: Italia</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

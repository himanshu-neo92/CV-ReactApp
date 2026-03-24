import {
  Mail,
  Phone,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-8 flex justify-center">
      <div className="bg-white shadow-lg w-[794px]">
{/* Header Section */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <div className="flex items-center gap-5">
            <div>
              <h1 className="text-xl mb-2">
                Lalit Chablani
              </h1>
              <p className="text-base text-gray-100">
                Senior Automation Test Engineer | SC Cleared | 19+ Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - 70/30 Split */}
        <div className="grid grid-cols-[70%_30%]">
          {/* Left Column - 70% */}
          <div className="p-8 relative -top-[8px] border-r border-gray-200" style={{borderImage: 'linear-gradient(to bottom, transparent 8px, #e5e7eb 9px) 1'}}>
            {/* Professional Summary */}
            <section className="mb-[15px]">
              <h2 className="text-lg text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
                Professional Summary
              </h2>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-2 ml-2">
                <li>Over 19 years of hands-on experience in automation testing, test strategy, and quality assurance across government and private sector projects.</li>
                <li>SC cleared with proven ability to lead and mentor test teams, drive process improvements, and deliver high-quality software solutions.</li>
                <li>Expert in designing, developing, and maintaining robust automation frameworks using C#.Net, Java, JavaScript, Cypress, Selenium, and more.</li>
                <li>Strong communicator, adept at collaborating with cross-functional teams, stakeholders, and integration partners to ensure seamless project delivery.</li>
                <li>Skilled in Agile methodologies (Scrum, KanBan, BDD, TDD), with experience chairing defect review boards and managing test activities end-to-end.</li>
                <li>Demonstrated success in integrating automation suites with CI/CD pipelines and tools such as Jira, Zephyr, Bamboo, Jenkins, and Docker.</li>
                <li>Experienced in data migration testing, security testing, performance testing, and network emulation for complex systems.</li>
                <li>Recognized for identifying gaps in testing, implementing innovative solutions, and optimizing test processes for efficiency and coverage.</li>
              </ul>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h2 className="text-lg text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
                Work Experience
              </h2>

              <div className="mb-[10px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Senior Automation Test Engineer
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      Home Office
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    Jan 2021 - Present
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Led the System Test team for the COPO project, facilitating acquisition of digital data from overseas.</li>
                  <li>Designed and extended automation frameworks in C#.Net using SpecFlow, Selenium, and WinAppDriver for both web and Windows applications.</li>
                  <li>Integrated automation test suite with Jira using ZAPI/Zephyr APIs, streamlining test result reporting and traceability.</li>
                  <li>Chaired weekly Defect Review Board meetings, ensuring timely resolution of issues and clear communication across teams.</li>
                  <li>Acted as a bridge between System Integration and Development teams, supporting SIT and resolving integration challenges.</li>
                  <li>Led data migration projects for RDS, Elastic, and protective monitoring solutions, ensuring data integrity and compliance.</li>
                  <li>Developed and executed end-to-end system tests using stubs, providing early feedback to integration teams.</li>
                </ul>
              </div>

              <div className="mb-[10px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Senior Automation Test Engineer
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      Home Office
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    Jan 2020 - Dec 2020
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Developed and maintained Cypress automation framework for APHIDS portal, centralizing Airport and Crew Identification Cards.</li>
                  <li>Created and maintained Cypress test cases, ensuring comprehensive coverage of portal functionality.</li>
                  <li>Ran accessibility tests using Axe tools, improving usability and compliance.</li>
                  <li>Collaborated closely with frontend and backend developers in Scrum teams, contributing to sprint planning and refinement.</li>
                </ul>
              </div>

              <div className="mb-[10px] print:break-before-page cabinet-office-print">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Senior Automation Test Engineer
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      Cabinet Office
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    Jan 2017 - Dec 2019
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Introduced automation by creating Java, BDD (Cucumber), Maven, Selenium frameworks, enabling overnight regression testing and historic result tracking.</li>
                  <li>Mentored junior engineers, coaching them on test processes and automation best practices.</li>
                  <li>Led manual and automated testing efforts, including test planning, reporting, and risk management.</li>
                  <li>Conducted security tests using Nessus scanner and network emulator tests with ITrinegy NE One.</li>
                  <li>Automated hardware inventory lists using PowerShell scripts, streamlining asset management.</li>
                </ul>
              </div>

              <div className="mb-[10px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Test Consultant: IAM Project
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      European Medicines Agency
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    Feb 2016 - Dec 2016
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Led testing for SailPoint IIQ Identity and Access Management, covering user, access, role, and integration management.</li>
                  <li>Built automation frameworks in Java, Selenium, and TestNG, reducing test execution time from 4 days to 1 day.</li>
                  <li>Created SOAP UI tests for IIQ API, ensuring robust API validation.</li>
                  <li>Produced weekly test matrix reports, highlighting critical paths and risks.</li>
                </ul>
              </div>

              <div className="mb-[10px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Test Consultant
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      Qualitest UK / giffgaff
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    Sep 2014 - Feb 2016
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Maintained and enhanced Java/Selenium test frameworks, supporting continuous integration and delivery.</li>
                  <li>Developed API and mobile automation using Rest Assured and Appium, expanding test coverage.</li>
                  <li>Designed and executed JMeter scripts for performance and load testing.</li>
                  <li>Performed end-to-end testing for giffgaff money, liaising with 3rd parties to ensure system reliability.</li>
                </ul>
              </div>

              <div className="mb-[10px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Senior Systems Test Engineer
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      MicroFocus Plc
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    Feb 2011 - Sep 2014
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Designed and developed test frameworks and performance suites, reducing performance test times by 50%.</li>
                  <li>Developed websites to monitor and track performance test results in real time.</li>
                  <li>Managed automated test systems, ensuring readiness for product releases.</li>
                  <li>Led root cause analysis investigations, identifying trends and areas of weakness.</li>
                </ul>
              </div>

              <div className="mb-[10px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      Maintenance/Project Test Lead
                    </h3>
                    <p className="text-[0.625rem] text-gray-700">
                      Sophos Plc
                    </p>
                  </div>
                  <span className="text-[0.625rem] text-gray-600">
                    May 2006 - Feb 2011
                  </span>
                </div>
                <ul className="list-disc list-inside text-[0.625rem] text-gray-700 space-y-2 ml-4">
                  <li>Led testing for monthly maintenance releases and various projects, supervising functional, regression, and performance testing.</li>
                  <li>Managed resources, produced reports, and drove risk analysis for release cycles.</li>
                  <li>Conducted gap analysis and root cause investigations, improving test coverage and process efficiency.</li>
                  <li>Attended MRB and change request review board meetings, representing product tests and assigning tasks.</li>
                </ul>
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
                    lalitchablani@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">
                    07906384578
                  </span>
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
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "C#.Net",
                    "Java",
                    "JavaScript",
                    "Python",
                    "Perl",
                    "PHP",
                    "Bash",
                    "PowerShell",
                    "VB Script",
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
                  Testing Tools
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Selenium",
                    "Cypress",
                    "SpecFlow",
                    "Cucumber BDD",
                    "TestNG",
                    "JUnit",
                    "JMeter",
                    "Rest Assured",
                    "SOAP UI",
                    "Appium",
                    "WinAppDriver",
                    "Axe",
                    "Serenity",
                    "Nessus",
                    "Silk Performer",
                    "ITrinegy",
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
                  Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Page Object Model",
                    "Jenkins",
                    "Maven",
                    "Docker",
                    "AWS",
                    "Git",
                    "GitLab",
                    "Jira",
                    "Zephyr",
                    "Confluence",
                    "Bamboo",
                    "Hyper V",
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
                  Databases
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "SQL Server",
                    "Oracle",
                    "Postgres",
                    "ElasticSearch",
                    "Kibana",
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
                    "Test Leadership",
                    "Mentoring",
                    "Stakeholder Communication",
                    "Agile/Scrum",
                    "Process Improvement",
                    "Cross-team Collaboration",
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

            {/* Certifications */}
            <section className="mb-5">
              <h2 className="text-lg text-gray-800 mb-3 pb-2 border-b-2 border-gray-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Certifications
              </h2>

              <ul className="text-xs text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span>ISEB Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span>ISEB Intermediate</span>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section className="print:break-before-page education-print">
              <h2 className="text-lg text-gray-800 mb-3 pb-2 border-b-2 border-gray-600 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-900">
                  M.Sc. (Software Engineering)
                </h4>
                <p className="text-xs text-gray-700">
                  University of Hertfordshire
                </p>
                <span className="text-xs text-gray-500">2004</span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  B.E. (Computer Science)
                </h4>
                <p className="text-xs text-gray-700">
                  Amravati University, Maharashtra, India
                </p>
                <span className="text-xs text-gray-500">2002</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

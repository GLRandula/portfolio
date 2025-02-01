import React, { useState } from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projectsData = [
  { title: "SappierLanka Tours - Client Project", des: "Technologies Used: React.js", src: projectTwo, link: "https://github.com/GLRandula/SappierLanka_Tours" },
  { title: "VIEWMO-FrontEnd (Research Platform)", des: "Technologies Used: Next.js, Node.js, FastAPI", src: projectOne, link: "https://github.com/Tharindu209-playground/intellihack-final-frontend" },
  { title: "CRUD API - Backend", des: "Technologies Used: SpringBoot, MongoDB", src: projectTwo, link: "https://github.com/GLRandula/SpringBoot-MongoDB-CRUD-API" },
  { title: "To-Do App", des: "Technologies Used: TypeScript, MongoDB", src: projectThree, link: "https://github.com/GLRandula/TodoApp" },
  { title: "CRUD API - Backend", des: "Technologies Used: Laraval(PHP, Blade), MySQL", src: projectThree, link: "https://github.com/GLRandula/laravel_api" },
  { title: "Mental Health ChatBot - Group Project", des: "Technologies Used: Next.js, Tailwind, Django", src: projectOne, link: "https://github.com/GLRandula/mental-health-chatbot-frontend" },
  { title: "Parking System", des: "Technologies Used: C#, .NET, MySQL", src: projectTwo, link: "https://github.com/GLRandula/Smart_Parking_Management_Platform" },
  { title: "CRUD API - Backend", des: "Technologies Used: Node.js, MongoDB", src: projectThree, link: "https://github.com/GLRandula/Rest_API-Node-Express-MongoDB" },
  { title: "REST API EC2", des: "Technologies Used: Node.js, MongoDB Host in AWS, CI/CD Pipeline using GitHub Actions", src: projectThree, link: "https://github.com/GLRandula/nodejs-rest-api-EC2" },
  { title: "REST API - Backend", des: "Technologies Used: Django, Fast API, sqllite", src: projectOne, link: "https://github.com/GLRandula/Django-REST-API" },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Number of projects per page

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get current page projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      
      {/* Display projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {currentProjects.map((project, index) => (
          <ProjectsCard key={index} title={project.title} des={project.des} src={project.src} link={project.link} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="grid md:grid-cols-12 grid-cols-1 mt-16">
        <div className="md:col-span-12 text-center">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
              {/* Previous Button */}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-black border border-gray-100 dark:border-gray-800 ${
                    currentPage === 1
                      ? "cursor-not-allowed opacity-50"
                      : "hover:border-designColor dark:hover:border-designColor hover:bg-designColor dark:hover:bg-designColor"
                  }`}
                >
                  <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1" />
                </button>
              </li>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`size-[40px] inline-flex justify-center items-center ${
                      currentPage === page
                        ? "text-black bg-designColor border border-designColor"
                        : "text-slate-400 hover:text-black bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-designColor hover:bg-designColor dark:hover:bg-designColor"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-black border border-gray-100 dark:border-gray-800 ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : "hover:border-designColor dark:hover:border-designColor hover:bg-designColor dark:hover:bg-designColor"
                  }`}
                >
                  <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Projects;

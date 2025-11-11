import { useParams, Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6">
      <SectionHeader title={project.title} subtitle="Project Overview" />

      <div className="max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl shadow-lg w-full mb-6"
        />

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 text-xs rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            View Live Demo
          </a>
        )}

        <Link
          to="/projects"
          className="block mt-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export const Projects = () => {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-24 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
            Proyectos
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Casos reales donde combino desarrollo full-stack,
            automatización e inteligencia artificial aplicada.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ⭐ Proyecto Destacado */}
          {featuredProject && (
            <motion.div
              layout
              className="md:col-span-2 bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">
                  Proyecto Destacado
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {featuredProject.shortDescription}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition"
                >
                  Ver caso de estudio
                </Link>

                {featuredProject.repo && (
                  <a
                    href={featuredProject.repo}
                    target="_blank"
                    className="px-6 py-3 border border-gray-600 hover:border-indigo-400 rounded-lg transition"
                  >
                    Ver repositorio
                  </a>
                )}
              </div>
            </motion.div>
          )}

          {/* Otros proyectos */}
          {otherProjects.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ y: -6 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 flex-wrap">
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm transition"
                >
                  Ver caso de estudio
                </Link>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    className="px-4 py-2 border border-gray-600 hover:border-indigo-400 rounded-lg text-sm transition"
                  >
                    Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
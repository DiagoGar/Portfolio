"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

/* =========================
   Carousel Component
========================= */

const Carousel = ({ gallery }: { gallery: string[] }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay
  useEffect(() => {
    if (isHovered || gallery.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative w-full h-64 rounded-xl overflow-hidden mb-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={gallery[index]}
            alt="Project image"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient elegante */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Botones (solo visibles en hover) */}
      {gallery.length > 1 && (
        <>
          <button
            onClick={prev}
            className="opacity-0 group-hover:opacity-100 transition absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur px-3 py-1 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="opacity-0 group-hover:opacity-100 transition absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur px-3 py-1 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

/* =========================
   Projects Section
========================= */

export const Projects = () => {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-24 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
            Proyectos
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Casos reales donde combino desarrollo full-stack,
            automatización e inteligencia artificial aplicada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* =========================
              Featured Project
          ========================= */}

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

              {/* Imagen o Gallery */}
              {featuredProject.gallery &&
              featuredProject.gallery.length > 1 ? (
                <Carousel gallery={featuredProject.gallery} />
              ) : featuredProject.image ? (
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}

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

          {/* =========================
              Other Projects
          ========================= */}

          {otherProjects.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ y: -6 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col"
            >
              {/* Imagen o Gallery */}
              {project.gallery && project.gallery.length > 1 ? (
                <Carousel gallery={project.gallery} />
              ) : project.image ? (
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}

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
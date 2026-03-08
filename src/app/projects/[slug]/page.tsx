// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* 🔹 Hero */}
      <section className="mb-20">
        <p className="text-sm text-neutral-400 mb-2">
          {project.year} — {project.role}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

        <p className="text-lg text-neutral-300 max-w-3xl">
          {project.shortDescription}
        </p>

        {/* Imagen o Gallery */}
        {project.gallery && project.gallery.length > 0 ? (
          <div className="mt-10 space-y-6">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-neutral-800"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <div className="mt-10 rounded-2xl overflow-hidden border border-neutral-800">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : null}
      </section>

      {/* 🔹 Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
          {project.overview}
        </p>
      </section>

      {/* 🔹 Problem */}
      {project.problem && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Problema</h2>
          <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
            {project.problem}
          </p>
        </section>
      )}

      {/* 🔹 Solution */}
      {project.solution && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Solución</h2>

          <div className="space-y-6">
            {Object.entries(project.solution).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-lg font-medium mb-2 capitalize">{key}</h3>
                <p className="text-neutral-300 whitespace-pre-line">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🔹 Arquitectura */}
      {project.architecture && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Arquitectura</h2>

          <div className="flex flex-wrap gap-3">
            {project.architecture.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-neutral-800 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 🔹 Impacto */}
      {project.impact && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Impacto</h2>

          <ul className="space-y-3 text-neutral-300">
            {project.impact.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 🔹 Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Stack Tecnológico</h2>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-neutral-700 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 🔹 Links */}
      <section className="flex gap-6">
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            className="underline text-sm hover:text-white"
          >
            Ver repositorio
          </Link>
        )}

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="underline text-sm hover:text-white"
          >
            Ver demo
          </Link>
        )}
      </section>
      {nextProject && (
        <section className="mt-24">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block rounded-2xl overflow-hidden border border-neutral-800"
          >
            {nextProject.image && (
              <div className="relative h-64">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
            )}

            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400">Next project</p>

                <h3 className="text-xl font-semibold">{nextProject.title}</h3>
              </div>

              <span className="text-2xl">→</span>
            </div>
          </Link>
        </section>
      )}
    </main>
  );
}

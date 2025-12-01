"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectModal } from "./projectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  images?: string[];
}

// const projets = [
//   {
//     id: 1,
//     description: 'Sistema automatizado para recopilar información y mejorar la eficiencia en licitaciones.',
//     tecnologias: ['javaScript', 'n8n'],
//     title: 'Automatización de Licitaciones',
//     image: '/img/puppeteer.png'
//   },
//   {
//     id: 2,
//     description: 'Este fue uno de mis primeros proyectos, creado usando nodejs y handlebars es un blog o red social típica con funciones de perfil incluido',
//     tecnologias: ['nodejs', 'bootstrap', 'handlebars','mongoDB', "AWS"],
//     title: 'Blog',
//     image: '/img/puppeteer.png'
//   },
//   {
//     id: 3,
//     description: 'Herramienta de web scraping para extraer datos clave de diferentes fuentes.',
//     tecnologias: ['nodejs', 'n8n'],
//     title: 'Scraper de Datos Estratégicos',
//     image: '/img/webScraping.png'
//   }
// ]

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Project[];
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  console.log(projects);
  

  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">Proyectos</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={350}
                  className="rounded-lg object-cover"
                />
                <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-block mt-4 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded text-white transition"
                >
                  Ver Proyecto
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mostrar el modal si hay un proyecto seleccionado */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

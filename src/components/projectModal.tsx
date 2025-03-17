"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    tecnologias?: string[];
    images?: string[];
    link: string;
  };
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full relative"
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
        >
          ✖
        </button>

        {/* Información del Proyecto */}
        <h3 className="text-3xl font-bold text-indigo-400">{project.title}</h3>
        <p className="text-gray-300 mt-2">{project.description}</p>

        {/* Tecnologías usadas */}
        {project.tecnologias && (
          <>
            <h4 className="mt-4 font-semibold">Tecnologías:</h4>
            <ul className="flex space-x-2 mt-2">
              {project.tecnologias.map((tech, index) => (
                <div className="flex flex-col">
                <li key={index} className="px-3 py-1 rounded">{tech}</li>
                <Image key={index} src={`/logos/${tech}.svg`} alt="tecnologias" width={90} height={50} className="bg-gray-700 px-3 py-1 rounded"/>
                </div>
              ))}
            </ul>
          </>
        )}

        {/* Imágenes del proyecto */}
        {project.images && (
          <>
            <h4 className="mt-4 font-semibold">Galería:</h4>
            <div className="flex space-x-2 mt-2 overflow-x-auto">
              {project.images.map((img, index) => (
                <Image key={index} src={img} alt="Galería" width={150} height={100} className="rounded" />
              ))}
              
            </div>
          </>
        )}

        {/* Enlace al proyecto */}
        {/* <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded text-white transition"
        >
          Ver Proyecto Completo
        </a> */}
      </motion.div>
    </div>
  );
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  const [showValue, setShowValue] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 bg-gray-900 text-white">

      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/perfil.jpg"
          alt="Mi Foto"
          width={450}
          height={450}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">

        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl font-serif">
          ¡Hola! mi nombre es{" "}
          <span className="text-indigo-400">Diago García</span>
        </h1>

        <h3 className="mt-4 text-xl md:text-2xl font-medium text-gray-300">
          Desarrollador de Software |{" "}
          <span className="text-indigo-400">
            <TypeAnimation
              sequence={[
                "Automatización",
                1500,
                "Soluciones con IA",
                1500,
                "AI & Automation",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>
        </h3>

        {/* Trigger */}
        <div
          className="mt-6 flex flex-col items-center md:items-start"
          onMouseEnter={() => setShowValue(true)}
          onMouseLeave={() => setShowValue(false)}
          onClick={() => setShowValue(!showValue)} // para mobile
        >
          <div className="flex items-center gap-2 cursor-pointer text-indigo-400 group">
            <span className="text-sm tracking-wide opacity-80 group-hover:opacity-100 transition">
              Cómo trabajo
            </span>
            <ArrowDown
              size={18}
              className={`transition-transform duration-300 ${
                showValue ? "rotate-180" : "animate-bounce"
              }`}
            />
          </div>

          {/* Contenido animado */}
          <AnimatePresence>
            {showValue && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 max-w-2xl space-y-6 text-gray-300"
              >
                <p className="text-lg leading-relaxed">
                  Construyo{" "}
                  <span className="font-semibold text-indigo-400">
                    sistemas inteligentes y automatizados
                  </span>{" "}
                  combinando{" "}
                  <span className="font-semibold underline decoration-indigo-500 underline-offset-4">
                    desarrollo full-stack
                  </span>{" "}
                  con{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    inteligencia artificial aplicada
                  </span>{" "}
                  a problemas reales.
                </p>

                <p className="text-lg leading-relaxed">
                  Mentalidad{" "}
                  <span className="font-semibold text-indigo-400">
                    experimental
                  </span>, enfoque{" "}
                  <span className="font-semibold">
                    estructurado
                  </span>{" "}
                  y rápida capacidad de{" "}
                  <span className="font-semibold underline decoration-indigo-500 underline-offset-4">
                    aprendizaje
                  </span>{" "}
                  para adaptarme a nuevas tecnologías y desafíos complejos.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
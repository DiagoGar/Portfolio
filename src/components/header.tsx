"use client"
import { useState } from "react";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 w-full fixed z-50">
      <div className="mx-auto flex items-center justify-between h-[5rem] px-6 mx-[2rem]">

        {/* Logo */}
        <div className="text-white font-bold text-2xl">MiLogo</div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className="hidden md:flex items-center gap-7 text-xl text-white">
          <li><a href="#inicio" className="hover:text-indigo-400 transition">Inicio</a></li>
          <li><a href="#projects" className="hover:text-indigo-400 transition">Proyectos</a></li>
          <li><a href="#technologies" className="hover:text-indigo-400 transition">Tecnologías</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition">Contacto</a></li>
          <li className="w-5 h-5 rounded-full bg-red-900"></li>
        </ul>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-5 py-6 bg-gray-800 text-white">
          <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
          <li><a href="#technologies" onClick={() => setIsOpen(false)}>Tecnologías</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
          <li className="w-5 h-5 rounded-full bg-red-900"></li>
        </ul>
      )}
    </header>
  );
}
'use client'

// import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser'

export const Footer = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("Enviando...");
  
      emailjs
        .send(
          "service_3xhtzwn",
          "template_bmngqo5",
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          "WNP0RePPaPXiw3NqX" 
        )
        .then(() => {
          setStatus("Mensaje enviado con éxito ✅");
          setForm({ name: "", email: "", message: "" });
        })
        .catch(() => setStatus("Error al enviar el mensaje ❌"));
    };
  
    return (
      <footer className="bg-gray-900/70 backdrop-blur-lg text-white py-10">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-6">Contáctame</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={form.name}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              value={form.email}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              value={form.message}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none h-32"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Enviar
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4">{status}</p>
        </div>
      </footer>
    );
  };
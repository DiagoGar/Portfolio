import Image from "next/image";

export const Hero = () => {
    return(
        <section className="flex flex-col md:flex-row items-center justify-center h-screen px-8 bg-gray-900 text-white">
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                src="/perfil.jpg" // Asegúrate de tener la imagen en public/perfil.jpg
                alt="Mi Foto"
                width={450}
                height={450}
                className="rounded-full shadow-lg"
                />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl font-serif">
                ¡Hola! mi nombre es <span className="text-indigo-400">Diago García</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                Desarrollador de software apasionado por la automatización, el desarrollo web y la inteligencia artificial.
                </p>
            </div>
        </section>
    )
}
import Image from "next/image";

const technologies = [
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Laravel", logo: "/logos/laravel.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "MongoDB", logo: "/logos/mongoDB.svg" },
  { name: "SQL", logo: "/logos/sql.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Web Scraping", logo: "/logos/webscraping.svg" },
  { name: "IA", logo: "/logos/ai.svg" },
  { name: "n8n", logo: "/logos/n8n.svg" },
  { name: "aws", logo: "/logos/AWS.svg" },
  { name: "handlebars", logo: "/logos/handlebars.svg" },
];

export const Technologies = () => {
  return (
    <section className="py-10 bg-gray-900 text-white text-center" id="technologies">
      <h2 className="text-3xl font-bold mb-6">Tecnologías que he usado</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <Image src={tech.logo} alt={tech.name} width={50} height={50} />
            <p className="mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
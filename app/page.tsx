import Image from "next/image";

const experiences = [
  {
    company: "TechCorp",
    role: "Frontend Developer",
    period: "2023 - Present",
  },
  {
    company: "SoftSolutions",
    role: "Web Developer Intern",
    period: "2022 - 2023",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-32 font-sans">
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-100 to-indigo-100"
      >
        <Image
          src="/profile.svg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full mb-4"
        />
        <h1 className="text-5xl font-bold mb-2">Jane Developer</h1>
        <p className="text-gray-700 max-w-prose">
          Passionate frontend developer focusing on Next.js applications.
        </p>
      </section>
      <section id="projects" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src="/placeholder.svg"
            alt="Project screenshot"
            width={300}
            height={200}
            className="rounded border"
          />
          <Image
            src="/placeholder.svg"
            alt="Project screenshot"
            width={300}
            height={200}
            className="rounded border"
          />
        </div>
      </section>
      <section id="skills" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <ul className="text-gray-600 list-disc ml-5 space-y-1">
          <li>JavaScript / TypeScript</li>
          <li>React &amp; Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>
      <section id="experiences" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Experiences</h2>
        <ul className="space-y-2">
          {experiences.map((exp) => (
            <li key={exp.company} className="text-gray-600">
              <span className="font-semibold">{exp.role}</span> @ {exp.company} ({exp.period})
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">Provide ways to get in touch.</p>
      </section>
    </main>
  );
}

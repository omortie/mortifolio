export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-32 font-sans">
      <section id="about" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-gray-600">Add information about yourself here.</p>
      </section>
      <section id="projects" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-600">Showcase your projects.</p>
      </section>
      <section id="skills" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600">Highlight your skills.</p>
      </section>
      <section id="experiences" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Experiences</h2>
        <p className="text-gray-600">Detail your work experiences.</p>
      </section>
      <section id="contact" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600">Provide ways to get in touch.</p>
      </section>
    </main>
  );
}

import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A collection of web applications, APIs, and tools I've built using modern Python stack 
            and frontend technologies. Each project showcases different aspects of my technical skills.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

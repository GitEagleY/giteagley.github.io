import { useParams, Link, Navigate } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Navigate to projects page if project not found
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <Link to="/projects" className="hover:text-navy-900 transition-colors">Projects</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="text-navy-900 font-medium">{project.title}</span>
        </nav>
      </div>

      {/* PROJECT HERO */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 bg-${getTagColor(index)}-100 text-${getTagColor(index)}-700 text-sm font-medium rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Live Demo
                </a>
              )}
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                View Code
              </a>
            </div>
          </div>
          <div className="bg-navy-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Project Info</h3>
            <div className="space-y-4">
              <InfoItem label="Timeline" value={project.timeline} />
              <InfoItem label="Role" value={project.role} />
              <InfoItem label="Team Size" value={project.teamSize} />
              <InfoItem 
                label="Status" 
                value={project.status}
                highlight
              />
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE GIF/VIDEO */}
      {project.showcaseGif && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-serif font-bold gradient-text mb-6">Live Demo</h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            {project.showcaseGif !== 'in progress' ? (
              <img 
                src={project.showcaseGif} 
                alt={`${project.title} Demo`}
                className="w-full h-auto"
              />
            ) : (
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-gray-600 font-medium">in progress</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SCREENSHOTS */}
      {project.screenshots && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-serif font-bold gradient-text mb-8">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className={`aspect-video bg-gradient-to-br ${screenshot.placeholder} flex items-center justify-center`}>
                  <p className="text-gray-500 font-medium">{screenshot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECT OVERVIEW */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold gradient-text mb-8">Project Overview</h2>
          
          <div className="space-y-8">
            <Section title="The Problem" content={project.problem} />
            <Section title="The Solution" content={project.solution} />
            
            {project.features && (
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <strong>{feature.title}:</strong> {feature.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <Section title="Challenges & Learnings" content={
                <>
                  <p className="text-gray-700 leading-relaxed mb-3">{project.challenges}</p>
                  <p className="text-gray-700 leading-relaxed">{project.learnings}</p>
                </>
              } />
            )}
          </div>
        </div>
      </section>

      {/* TECH STACK DEEP DIVE */}
      {project.techStack && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-serif font-bold gradient-text mb-8">Technology Stack</h2>
          
          <div className="space-y-8">
            {project.techStack.map((tech, index) => (
              <TechStackItem key={index} tech={tech} />
            ))}
          </div>
        </section>
      )}

      {/* PROJECT NAVIGATION */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link 
              to={`/project/${prevProject.id}`}
              className="text-gray-600 hover:text-navy-900 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Previous Project
            </Link>
          ) : (
            <div></div>
          )}
          
          <Link 
            to="/projects"
            className="text-navy-900 font-medium hover:text-accent-500 transition-colors"
          >
            Back to Projects
          </Link>
          
          {nextProject ? (
            <Link 
              to={`/project/${nextProject.id}`}
              className="text-gray-600 hover:text-navy-900 transition-colors inline-flex items-center gap-2"
            >
              Next Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </div>
  );
}

// Helper Components
function InfoItem({ label, value, highlight = false }) {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`font-medium ${highlight ? 'text-green-600' : ''}`}>
        {highlight ? '✓ ' : ''}{value}
      </p>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      {typeof content === 'string' ? (
        <p className="text-gray-700 leading-relaxed">{content}</p>
      ) : (
        content
      )}
    </div>
  );
}

function TechStackItem({ tech }) {
  const colorMap = {
    python: 'bg-blue-100 text-blue-600',
    fastapi: 'bg-green-100 text-green-600',
    django: 'bg-emerald-100 text-emerald-600',
    database: 'bg-cyan-100 text-cyan-600',
    postgresql: 'bg-cyan-100 text-cyan-600',
    mongodb: 'bg-green-100 text-green-600',
    react: 'bg-sky-100 text-sky-600',
    docker: 'bg-orange-100 text-orange-600',
    redis: 'bg-red-100 text-red-600',
    celery: 'bg-green-100 text-green-600',
    stripe: 'bg-purple-100 text-purple-600',
    plotly: 'bg-pink-100 text-pink-600',
    pandas: 'bg-blue-100 text-blue-600',
    jwt: 'bg-purple-100 text-purple-600',
    oauth: 'bg-orange-100 text-orange-600',
    monitoring: 'bg-yellow-100 text-yellow-600',
    pdf: 'bg-red-100 text-red-600',
    excel: 'bg-green-100 text-green-600',
    nodejs: 'bg-lime-100 text-lime-600',
    tailwind: 'bg-cyan-100 text-cyan-600',
    github: 'bg-purple-100 text-purple-600'
  };

  const iconColor = colorMap[tech.icon] || 'bg-gray-100 text-gray-600';

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
        <div className={`w-10 h-10 ${iconColor} rounded-lg flex items-center justify-center`}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        {tech.category} - {tech.name}
      </h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>Why {tech.name}:</strong> {tech.why}
      </p>
      <p className="text-gray-700 leading-relaxed">
        <strong>How it's used:</strong> {tech.how}
      </p>
    </div>
  );
}

function getTagColor(index) {
  const colors = ['blue', 'green', 'purple', 'orange', 'cyan', 'pink', 'indigo', 'red'];
  return colors[index % colors.length];
}
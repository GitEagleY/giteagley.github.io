import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import TechStackSection from '../components/TechStackSection';
import projects from '../data/projects';
import faqs from '../data/faq';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* HERO SECTION */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Available for Full-time & Part-time
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6 leading-tight">
              Fullstack Python Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Building scalable web applications with modern Python stack. 
              1+ years of experience delivering robust backend systems and intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/projects" 
                className="bg-navy-900 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a 
                href="/Oleksandr_Ilchenko_Python_Developer.pdf"
                download="Oleksandr_Ilchenko_Python_Developer.pdf"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-50 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Download Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-2xl p-6 md:p-12 border border-gray-200">
              <div className="space-y-6">
                <QualificationItem 
                  icon={<CheckIcon />}
                  label="Experience"
                  value="1+ Years"
                />
                <QualificationItem 
                  icon={<GlobeIcon />}
                  label="English Proficiency"
                  value="Full Professional"
                />
                <QualificationItem 
                  icon={<ClockIcon />}
                  label="Availability"
                  value="Full & Part-time"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF OF QUALIFICATION */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Stat number="10+" label="Projects Delivered" />
            <Stat number="5+" label="Technologies Mastered" />
            <Stat number="100%" label="Client Satisfaction" />
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Specialized in building robust backend systems with Python, FastAPI, and Django. 
              Experienced in creating scalable APIs, managing databases, and implementing clean architecture patterns. 
              Passionate about writing maintainable code and solving complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack">
        <TechStackSection />
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and technical capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 font-medium">
              Showing {featuredProjects.length} of {projects.length} projects
            </p>
            <Link 
              to="/projects"
              className="border-2 border-navy-900 text-navy-900 hover:bg-navy-50 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              View All {projects.length} Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-navy-900 text-white py-20" role="region" aria-label="Contact section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:contact@example.com"
              aria-label="Send me an email"
              className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email Me
            </a>
            <a 
              href="https://github.com/GitEagleY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/oleksandr-ilchenko-4b9824323/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function QualificationItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-semibold text-navy-900">{value}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-4xl font-serif font-bold mb-2">{number}</div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <details className="bg-white border border-gray-200 rounded-xl p-6 group">
      <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg">
        {question}
        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>
      <p className="mt-4 text-gray-600">
        {answer}
      </p>
    </details>
  );
}

// Icons
function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
}
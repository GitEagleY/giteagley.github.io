import TechCard from './TechCard';
import techStack from '../data/techStack';

export default function TechStackSection() {
  if (!techStack || techStack.length === 0) {
    return null;
  }

  const backendCount = techStack.filter(t => t.category === 'Backend').length;
  const frontendCount = techStack.filter(t => t.category === 'Frontend').length;
  const toolsCount = techStack.filter(t => 
    ['Database', 'DevOps', 'Tools', 'Security', 'Mobile', 'Project Management'].includes(t.category)
  ).length;

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gradient-text mb-2 sm:mb-3 md:mb-4">
            Tech Stack
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Technologies I work with to build modern, scalable applications
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-12 md:mb-16 lg:mb-20">
          {techStack.map((tech, index) => (
            <TechCard key={tech.icon || index} tech={tech} />
          ))}
        </div>


      </div>
    </section>
  );
}
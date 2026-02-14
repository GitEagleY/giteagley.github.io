import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const renderImageArea = () => {
    // Priority: thumbnail > showcaseGif > gradient fallback
    if (project.thumbnail && project.thumbnail !== 'in progress') {
      return (
        <div className="h-48 overflow-hidden bg-gray-200">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      );
    }

    if (project.showcaseGif && project.showcaseGif !== 'in progress') {
      return (
        <div className="h-48 overflow-hidden bg-gray-900">
          <img 
            src={project.showcaseGif} 
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      );
    }

    return (
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p className="text-gray-600 font-medium text-sm">in progress</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover transition-shadow duration-300 hover:shadow-lg">
      {renderImageArea()}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 bg-${getTagColor(index)}-100 text-${getTagColor(index)}-700 text-xs font-medium rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-serif font-bold mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            project.status === 'Featured - In Active Development' 
              ? 'bg-amber-100 text-amber-700' 
              : project.status === 'Completed'
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {project.status === 'Featured - In Active Development' ? '⭐ Featured' : project.status}
          </span>
        </div>
        <Link 
          to={`/project/${project.id}`}
          className="text-accent-500 hover:text-accent-600 font-medium inline-flex items-center gap-2 mt-4 group"
        >
          View Details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function getTagColor(index) {
  const colors = ['blue', 'green', 'purple', 'orange', 'cyan', 'pink'];
  return colors[index % colors.length];
}
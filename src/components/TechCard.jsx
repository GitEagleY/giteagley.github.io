export default function TechCard({ tech }) {
  const colorMap = {
    // Backend
    python: 'from-blue-500 to-blue-600',
    fastapi: 'from-green-500 to-green-600',
    django: 'from-emerald-500 to-emerald-600',
    nodejs: 'from-lime-500 to-lime-600',
    
    // Frontend
    javascript: 'from-yellow-500 to-yellow-600',
    react: 'from-sky-500 to-sky-600',
    vue: 'from-emerald-500 to-emerald-600',
    angular: 'from-red-500 to-red-600',
    tailwind: 'from-cyan-500 to-cyan-600',
    
    // Database
    postgresql: 'from-cyan-500 to-cyan-600',
    mongodb: 'from-green-500 to-green-600',
    redis: 'from-red-500 to-red-600',
    database: 'from-blue-500 to-blue-600',
    sqlite: 'from-blue-500 to-blue-600',
    
    // DevOps
    docker: 'from-orange-500 to-orange-600',
    github: 'from-purple-500 to-purple-600',
    linux: 'from-amber-500 to-amber-600',
    
    // Other
    celery: 'from-green-500 to-green-600',
    oauth: 'from-orange-500 to-orange-600',
    jira: 'from-blue-500 to-blue-600',
    trello: 'from-blue-500 to-blue-600',
    default: 'from-gray-500 to-gray-600'
  };

  const bgGradient = colorMap[tech.icon] || colorMap.default;

  // Material Icon mapping
  const iconMap = {
    python: 'code',
    fastapi: 'flash_on',
    django: 'storage',
    nodejs: 'javascript',
    
    javascript: 'code',
    react: 'apps',
    vue: 'dashboard',
    angular: 'view_comfy',
    tailwind: 'palette',
    
    postgresql: 'storage',
    mongodb: 'database',
    redis: 'memory',
    database: 'storage',
    sqlite: 'storage',
    
    docker: 'layers',
    github: 'commit',
    linux: 'terminal',
    
    celery: 'schedule',
    oauth: 'security',
    jira: 'assignment',
    trello: 'view_agenda',
  };

  const icon = iconMap[tech.icon] || 'build';

  return (
    <div className="group relative h-full">
      {/* Gradient background blur */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

      {/* Card - Mobile: text left, icon right (flex-row-reverse), Desktop: text top, icon bottom */}
      <div className="relative bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg h-full flex flex-row-reverse sm:flex-col gap-3 sm:gap-0">
        
        {/* Icon Container - Right on mobile, top on desktop */}
        <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-gradient-to-br ${bgGradient} text-white group-hover:scale-110 transition-transform duration-300`}>
          <i className="material-icons text-lg sm:text-xl">{icon}</i>
        </div>

        {/* Text Content - Mobile: flex-grow to fill left space, Desktop: full width */}
        <div className="flex-1 sm:flex-none min-w-0">
          {/* Name */}
          <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1 sm:mb-2 line-clamp-1 leading-tight">
            {tech.name}
          </h3>

          {/* Category badge */}
          <span className="inline-block px-1.5 sm:px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded mb-1 sm:mb-2 whitespace-nowrap">
            {tech.category}
          </span>

          {/* Description - Visible with clamping on mobile, full on desktop */}
          <p className="text-gray-600 text-xs sm:text-xs leading-relaxed line-clamp-1 sm:line-clamp-2 flex-grow">
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
}
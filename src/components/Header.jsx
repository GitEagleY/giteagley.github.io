import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-navy-900">
          Oleksandr Ilchenko
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-colors ${
              isActive('/') ? 'text-navy-900 font-medium' : 'text-gray-600 hover:text-navy-900'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`transition-colors ${
              isActive('/projects') || location.pathname.startsWith('/project/') 
                ? 'text-navy-900 font-medium' 
                : 'text-gray-600 hover:text-navy-900'
            }`}
          >
            Projects
          </Link>
          <a href="/#contact" className="text-gray-600 hover:text-navy-900 transition-colors">
            Contact
          </a>
        </div>
        <a 
          href="/#contact" 
          className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}

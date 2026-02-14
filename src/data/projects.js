export const projects = [
  {
    id: 'fastapi-crm',
    title: 'FastAPI CRM',
    shortDescription: 'High-performance CRM system with async stack, JWT auth, and sales pipeline management. Production-ready with 90%+ test coverage.',
    fullDescription: 'A modern, fully asynchronous CRM built with FastAPI and SQLAlchemy 2.0. Manages contacts, deals, and interactions with advanced querying, structured logging, and multi-environment Docker deployments. Features comprehensive testing suite with Pytest and automated CI/CD via GitHub Actions.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Docker', 'GitHub Actions', 'Pytest'],
    gradient: 'from-emerald-100 to-cyan-100',
    thumbnail: null, // 'in progress' / '/images/fastapi-crm-thumb.png'
    showcaseGif: null, // '/gifs/fastapi-crm-demo.gif'
    githubUrl: 'https://github.com/GitEagleY/fastapi-crm',
    timeline: 'In Progress',
    role: 'Full-stack Developer',
    teamSize: 'Solo Project',
    status: 'Featured - In Active Development',
    problem: 'Traditional CRM systems are often bloated, slow, or difficult to integrate. Businesses need a lightweight, high-performance solution that scales with their sales operations while maintaining data integrity.',
    solution: 'Built a fully asynchronous CRM with modern Python stack. Leverages FastAPI\'s performance benefits, SQLAlchemy 2.0\'s type safety, and PostgreSQL\'s relational integrity. Includes structured logging for production observability and multi-stage Docker builds for different environments.',
    features: [
      {
        title: 'High Performance Async Stack',
        description: 'Fully asynchronous FastAPI application with SQLAlchemy 2.0 async drivers for maximum concurrency'
      },
      {
        title: 'Sales Pipeline Management',
        description: 'Manage Contacts, Deals, and Interaction history with referential integrity'
      },
      {
        title: 'Secure JWT Authentication',
        description: 'JWT-based auth with password hashing using Passlib/Bcrypt'
      },
      {
        title: 'Advanced Querying',
        description: 'Complex filtering, pagination, and sorting via reusable dependency injection'
      },
      {
        title: 'Structured JSON Logging',
        description: 'Production-grade logging for observability and debugging'
      },
      {
        title: 'Robust Testing',
        description: '90%+ coverage with Pytest and dedicated Docker databases for integration tests'
      },
      {
        title: 'Multi-Environment Docker',
        description: 'Optimized multi-stage builds for local, staging, and production deployments'
      },
      {
        title: 'Database Migrations',
        description: 'Alembic for reliable schema versioning and migrations'
      }
    ],
    challenges: 'Managing database schema migrations in an async context required careful coordination with Alembic. Ensuring test isolation with dedicated Docker containers for integration testing was also crucial for reliable CI/CD.',
    learnings: 'Deepened expertise in async Python patterns, SQLAlchemy 2.0\'s new async capabilities, and production-grade Docker configurations. Learned the importance of comprehensive testing strategy early in development for long-term maintainability.',
    techStack: [
      {
        name: 'FastAPI',
        category: 'Backend',
        icon: 'fastapi',
        why: 'Native async support, automatic API documentation, built-in data validation with Pydantic, and exceptional performance for handling concurrent requests.',
        how: 'Core framework handling all API endpoints, request validation, authentication middleware, and dependency injection for database sessions.'
      },
      {
        name: 'SQLAlchemy 2.0',
        category: 'Database',
        icon: 'database',
        why: 'Latest async ORM with strict type hinting, relationship management, and modern async query API for non-blocking database operations.',
        how: 'Defines all data models (Contacts, Deals, Interactions), relationships, and provides async session management for database operations.'
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        icon: 'database',
        why: 'Industry-standard relational database with ACID compliance, advanced indexing, and excellent JSON support for flexible CRM data storage.',
        how: 'Persistent storage with optimized indexes on frequently queried columns. Foreign key constraints ensure referential integrity between contacts, deals, and interactions.'
      },
      {
        name: 'Alembic',
        category: 'Database',
        icon: 'database',
        why: 'Reliable database migration tool with version control for schema changes, essential for maintaining consistency across environments.',
        how: 'Manages all schema versions and migrations, allowing team collaboration on database changes with auto-generation from model changes.'
      },
      {
        name: 'Docker',
        category: 'DevOps',
        icon: 'docker',
        why: 'Ensures reproducible environments across development, staging, and production. Simplifies dependency management and deployment.',
        how: 'Multi-stage builds optimize image size. Docker Compose orchestrates API, database, and other services. Separate compose files for local dev, staging, and prod.'
      },
      {
        name: 'GitHub Actions',
        category: 'DevOps',
        icon: 'github',
        why: 'Native CI/CD integration with GitHub. Automates linting, testing, security checks, and deployments on every commit.',
        how: 'Runs Pytest suite, code quality checks, security scanning, and builds production images automatically. Enables fast feedback on pull requests.'
      },
      {
        name: 'Pytest',
        category: 'Testing',
        icon: 'python',
        why: 'Comprehensive testing framework with fixtures, parametrization, and plugin ecosystem. Essential for achieving 90%+ coverage goals.',
        how: 'Unit tests for business logic, integration tests with dedicated Docker databases, and fixtures for common test setup across suite.'
      }
    ],
    screenshots: [
      { caption: 'CRM Dashboard', placeholder: 'from-emerald-100 to-teal-100' },
      { caption: 'Sales Pipeline View', placeholder: 'from-cyan-100 to-blue-100' },
      { caption: 'API Documentation', placeholder: 'from-green-100 to-emerald-100' },
      { caption: 'Contact Management', placeholder: 'from-teal-100 to-cyan-100' }
    ],
    image: null
  },

  {
    id: 'recipe-showcase',
    title: 'Recipe Showcase Platform',
    shortDescription: 'Modern recipe sharing platform with Django REST, React frontend, async task processing, and Redis caching. Full-stack production setup.',
    fullDescription: 'A comprehensive recipe sharing platform built with Django, React, Celery, and Redis. Features recipe CRUD with images, categories, tags, ratings, full-text search, favorites, and user authentication. Mobile-responsive design with smooth animations and SEO optimization. Complete Docker Compose setup for multi-environment deployment.',
    tags: ['Django', 'DRF', 'React', 'PostgreSQL', 'Celery', 'Redis', 'Tailwind CSS', 'Docker'],
    gradient: 'from-orange-100 to-amber-100',
    thumbnail: null, // 'in progress' / '/images/recipe-showcase-thumb.png'
    showcaseGif: null, // '/gifs/recipe-showcase-demo.gif'
    githubUrl: 'https://github.com/GitEagleY/recipe-showcase',
    timeline: 'In Progress',
    role: 'Full-stack Developer',
    teamSize: 'Solo Project',
    status: 'Featured - In Active Development',
    problem: 'Existing recipe platforms lack modern UX, proper caching strategies, and async task handling. Users need responsive, searchable recipe platforms with image optimization and rich user interactions.',
    solution: 'Built a modern full-stack recipe platform combining Django\'s robustness with React\'s interactivity. Integrated Celery for async image processing and email tasks, Redis for caching frequently accessed recipes, and PostgreSQL for reliable data storage. Tailwind CSS provides modern styling with smooth animations.',
    features: [
      {
        title: 'Recipe CRUD',
        description: 'Create, read, update, delete recipes with ingredients, step-by-step instructions, and metadata'
      },
      {
        title: 'Image Processing',
        description: 'Upload images with automatic resizing and optimization via Celery background tasks'
      },
      {
        title: 'Categories & Tags',
        description: 'Organize recipes with flexible tagging and category system'
      },
      {
        title: 'Full-Text Search',
        description: 'Fast recipe search with PostgreSQL full-text search engine'
      },
      {
        title: 'Ratings & Reviews',
        description: 'User ratings, reviews, and comments on recipes'
      },
      {
        title: 'Favorites & Bookmarks',
        description: 'Save favorite recipes and bookmark for later'
      },
      {
        title: 'User Profiles',
        description: 'User authentication, profiles, and recipe collection management'
      },
      {
        title: 'Mobile Responsive',
        description: 'Fully responsive design optimized for all device sizes'
      },
      {
        title: 'Smooth Animations',
        description: 'Enhanced UX with Framer Motion animations'
      },
      {
        title: 'SEO Optimization',
        description: 'Schema.org markup for search engine visibility'
      },
      {
        title: 'Redis Caching',
        description: 'Performance optimization with Redis cache for frequently accessed data'
      },
      {
        title: 'Async Task Processing',
        description: 'Celery integration for image processing and email notifications'
      }
    ],
    challenges: 'Managing async image processing at scale required careful Celery configuration and Redis cache invalidation strategy. Ensuring real-time search responsiveness with PostgreSQL full-text search while keeping memory footprint low was critical.',
    learnings: 'Gained deep expertise in Django-Celery integration, Redis caching strategies, and frontend-backend coordination for image upload workflows. Learned importance of proper task queue monitoring and error handling for background jobs.',
    techStack: [
      {
        name: 'Django & DRF',
        category: 'Backend',
        icon: 'django',
        why: 'Django provides ORM, authentication, and admin interface. DRF handles REST API serialization, validation, and permissions elegantly.',
        how: 'Defines data models, implements API endpoints, handles user authentication, and provides admin interface for content management.'
      },
      {
        name: 'React',
        category: 'Frontend',
        icon: 'react',
        why: 'Component-based architecture for reusable UI elements, React Router for navigation, and rich ecosystem for modern features.',
        how: 'Builds interactive recipe browsing, search interface, user dashboards. Uses React Query for efficient API data fetching and caching.'
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        icon: 'database',
        why: 'Supports complex queries, full-text search, JSON columns, and excellent performance with proper indexing strategy.',
        how: 'Stores recipes, user data, ratings, comments with full-text search indexes on recipe name and description fields.'
      },
      {
        name: 'Celery & Redis',
        category: 'Async Processing',
        icon: 'redis',
        why: 'Celery provides distributed task queue, Redis serves as message broker and cache. Essential for handling image processing without blocking web requests.',
        how: 'Celery tasks handle image resizing/optimization, email notifications. Redis caches recipe queries, trending recipes, and user preferences.'
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'tailwind',
        why: 'Utility-first approach enables rapid responsive design without writing custom CSS. Excellent for maintaining consistent design system.',
        how: 'Styles all frontend components with responsive breakpoints, custom animations, and dark mode support.'
      },
      {
        name: 'Framer Motion',
        category: 'Frontend',
        icon: 'react',
        why: 'Declarative animation library that works seamlessly with React. Enables smooth, performant animations for enhanced UX.',
        how: 'Adds smooth page transitions, recipe card animations, search result animations, and interactive elements.'
      },
      {
        name: 'Docker & Docker Compose',
        category: 'DevOps',
        icon: 'docker',
        why: 'Ensures consistent environments across development, staging, and production. Simplifies managing multiple services (API, frontend, DB, Redis, Celery).',
        how: 'Separate compose files for different environments (.local, .dev, .stage, .prod). Each service has optimized Dockerfile.'
      },
      {
        name: 'Nginx',
        category: 'DevOps',
        icon: 'docker',
        why: 'Reverse proxy and load balancer. Serves static files efficiently and routes requests to appropriate backend services.',
        how: 'Routes API requests to Gunicorn, serves frontend static files, handles SSL termination in production.'
      }
    ],
    screenshots: [
      { caption: 'Recipe Feed & Discovery', placeholder: 'from-orange-100 to-yellow-100' },
      { caption: 'Recipe Detail Page', placeholder: 'from-amber-100 to-orange-100' },
      { caption: 'Search Results', placeholder: 'from-yellow-100 to-amber-100' },
      { caption: 'User Profile & Favorites', placeholder: 'from-amber-100 to-red-100' }
    ]
  },

  {
    id: 'social-network-mern',
    title: 'Social Network (MERN Stack)',
    shortDescription: 'Full-featured social network with real-time feed updates, user authentication, and interactive features built with React and Node.js/Express.',
    fullDescription: 'A fully interactive social network built with the MERN stack (MongoDB, Express, React, Node.js). Features real-time feed updates, user authentication with JWT, post creation, likes, comments, and user profiles. Demonstrates full-stack JavaScript capabilities with responsive design and modern UI using Material-UI.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Material-UI'],
    gradient: 'from-blue-100 to-indigo-100',
    thumbnail: null, // 'in progress' / '/images/social-network-thumb.png'
    showcaseGif: '/public/projects/SocialNetwork.gif', // '/gifs/social-network-demo.gif' - SocialNetwork.gif
    githubUrl: 'https://github.com/GitEagleY/MERN_SocialNetwork',
    timeline: 'Completed',
    role: 'Full-stack Developer',
    teamSize: 'Solo Project',
    status: 'Completed',
    problem: 'Creating a social platform requires managing real-time data, complex user relationships, and responsive UI interactions. Building with JavaScript across the stack ensures code reusability and developer velocity.',
    solution: 'Built a complete social network using MERN stack. Express backend handles user authentication with JWT, MongoDB stores user data and posts, React frontend provides interactive UI with Material-UI components, and real-time updates keep the feed fresh.',
    features: [
      {
        title: 'User Authentication',
        description: 'JWT-based authentication with secure login/registration'
      },
      {
        title: 'Real-Time Feed',
        description: 'Live updates of posts and interactions'
      },
      {
        title: 'Post Creation',
        description: 'Create, edit, delete posts with rich content'
      },
      {
        title: 'Likes & Comments',
        description: 'Interact with posts through likes and comments'
      },
      {
        title: 'User Profiles',
        description: 'User profiles with follower/following system'
      },
      {
        title: 'Responsive Design',
        description: 'Works seamlessly on desktop and mobile devices'
      }
    ],
    challenges: 'Implementing real-time updates efficiently without overwhelming the database required careful pagination and caching strategies. Managing JWT refresh tokens and maintaining session state across components was another key challenge.',
    learnings: 'Gained proficiency with full-stack JavaScript development, MongoDB document design for social features, and real-time data synchronization patterns.',
    techStack: [
      {
        name: 'React',
        category: 'Frontend',
        icon: 'react',
        why: 'Component-based architecture for UI reusability and state management across the social feed',
        how: 'Builds interactive components for posts, comments, user profiles, and real-time feed updates.'
      },
      {
        name: 'Material-UI',
        category: 'Frontend',
        icon: 'react',
        why: 'Pre-built components following Material Design principles for consistent, professional UI',
        how: 'Provides UI components for navigation, cards, modals, forms, and responsive grid layouts.'
      },
      {
        name: 'Node.js & Express',
        category: 'Backend',
        icon: 'nodejs',
        why: 'JavaScript runtime enabling full-stack JavaScript development. Express provides lightweight middleware system.',
        how: 'Handles API endpoints for user management, post operations, authentication, and real-time WebSocket connections.'
      },
      {
        name: 'MongoDB',
        category: 'Database',
        icon: 'mongodb',
        why: 'Flexible document database perfect for social data with nested comments and relationships',
        how: 'Stores user documents, posts with embedded comments and likes, allowing flexible schema for evolving features.'
      },
      {
        name: 'JWT',
        category: 'Security',
        icon: 'oauth',
        why: 'Stateless authentication allowing scalable, decoupled API and frontend',
        how: 'Issues tokens on login, validates tokens on protected routes, includes refresh token mechanism.'
      }
    ],
    screenshots: [
      { caption: 'Feed gif', placeholder: 'feed' },
    ],
    image: null
  },

  {
    id: 'factflow-supabase',
    title: 'FactFlow - Fact Sharing Platform',
    shortDescription: 'React web app for sharing interesting facts with Supabase backend for authentication and data storage. Quick-to-deploy fullstack solution.',
    fullDescription: 'A React-based fullstack web app built with Supabase as the backend service. Users can share and discover interesting facts with built-in authentication, real-time database updates, and a clean, intuitive interface.',
    tags: ['React', 'Supabase', 'JavaScript'],
    gradient: 'from-green-100 to-teal-100',
    thumbnail: null, // 'in progress' / '/images/factflow-thumb.png'
    showcaseGif: '/public/projects/Facts.gif', // '/gifs/factflow-demo.gif' - Facts.gif
    githubUrl: 'https://github.com/GitEagleY/LearnSomethingNew',
    timeline: 'Completed',
    role: 'Full-stack Developer',
    teamSize: 'Solo Project',
    status: 'Completed',
    problem: 'Building a fact-sharing platform with traditional backend infrastructure requires managing servers, databases, and authentication. A simpler approach using managed services accelerates development.',
    solution: 'Leveraged Supabase for backend functionality (authentication, database, real-time subscriptions) while building a responsive React frontend. This approach eliminates backend infrastructure management and accelerates time-to-market.',
    features: [
      {
        title: 'User Authentication',
        description: 'Sign up, login with email via Supabase Auth'
      },
      {
        title: 'Fact Sharing',
        description: 'Create and share interesting facts'
      },
      {
        title: 'Real-time Updates',
        description: 'Live fact feed with real-time Supabase subscriptions'
      },
      {
        title: 'User Profiles',
        description: 'Manage user profile and submitted facts'
      }
    ],
    challenges: 'Understanding Supabase Row Level Security (RLS) policies for data access control and optimizing real-time subscriptions to prevent excessive database triggers.',
    learnings: 'Gained experience with Backend-as-a-Service (BaaS) platforms, understanding trade-offs between convenience and customization. Learned Supabase\'s real-time capabilities and RLS policies.',
    techStack: [
      {
        name: 'React',
        category: 'Frontend',
        icon: 'react',
        why: 'Component-based UI for the fact-sharing interface with state management for user data',
        how: 'Builds pages for authentication, fact feed, submission forms, and user profiles.'
      },
      {
        name: 'Supabase',
        category: 'Backend',
        icon: 'database',
        why: 'Managed BaaS providing PostgreSQL database, authentication, real-time subscriptions, and storage - eliminates backend infrastructure needs',
        how: 'Handles user authentication via Supabase Auth, stores facts in PostgreSQL, real-time subscriptions update the feed, storage handles user uploads.'
      }
    ],
    image: null
  },

  {
    id: 'event-management-django',
    title: 'Event Management System (Django App)',
    shortDescription: 'Simple event management system built with Django, SQLite, and Tailwind CSS. Demonstrates Django ORM and template rendering.',
    fullDescription: 'A straightforward event management system showcasing Django\'s core strengths. Features event creation, management, and display using Django ORM, server-side templates, and Tailwind CSS for modern styling. Perfect example of monolithic Django application architecture.',
    tags: ['Django', 'SQLite', 'Tailwind CSS', 'Django Templates'],
    gradient: 'from-purple-100 to-pink-100',
    thumbnail: null, // 'in progress' / '/images/event-management-thumb.png'
    showcaseGif: '/public/projects/EventManagementSystem.gif', // '/gifs/event-management-demo.gif' - EventManagementSystem.gif
    githubUrl: 'https://github.com/GitEagleY/Event-Management-System',
    timeline: 'Completed',
    role: 'Full-stack Developer',
    teamSize: 'Solo Project',
    status: 'Completed',
    problem: 'Event organizations need a simple, reliable system for creating and managing events without complex infrastructure or JavaScript frameworks.',
    solution: 'Built a lightweight Django application using server-side templating and SQLite. Demonstrates traditional web application architecture with clean separation of concerns using Django\'s MTV (Model-Template-View) pattern.',
    features: [
      {
        title: 'Event CRUD',
        description: 'Create, read, update, delete events with details'
      },
      {
        title: 'Event Listing',
        description: 'Display all events with filtering and search'
      },
      {
        title: 'Event Details',
        description: 'Detailed event pages with attendee information'
      },
      {
        title: 'Admin Interface',
        description: 'Django admin for event management'
      }
    ],
    challenges: 'Creating responsive forms and validation messages with Django templates requires careful HTML structure and CSS classes.',
    learnings: 'Reinforced Django fundamentals including ORM queryset operations, form handling, and template rendering. Appreciated the productivity gains of server-side templating for simpler applications.',
    techStack: [
      {
        name: 'Django',
        category: 'Backend',
        icon: 'django',
        why: 'Full-featured framework with built-in ORM, forms, authentication, and admin interface',
        how: 'Handles all business logic, database operations, request routing, and admin interface for event management.'
      },
      {
        name: 'SQLite',
        category: 'Database',
        icon: 'database',
        why: 'Lightweight embedded database perfect for simple applications and development',
        how: 'Stores event data with full ACID compliance without requiring separate database server.'
      },
      {
        name: 'Django Templates',
        category: 'Frontend',
        icon: 'django',
        why: 'Server-side template engine for rendering HTML with Django template language',
        how: 'Renders event pages, forms, and listing views with access to Python context data.'
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'tailwind',
        why: 'Utility-first CSS framework for rapid, responsive design without custom CSS',
        how: 'Styles all HTML templates with responsive grid, cards, forms, and modern design patterns.'
      }
    ],
    image: null
  }
];

export default projects;
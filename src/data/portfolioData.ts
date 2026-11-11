export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Websites' | 'Mobile Apps' | 'UI/UX';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'core' | 'frontend' | 'backend' | 'database';
  icon: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface PortfolioData {
  personal: {
    initials: string;
    name: string;
    displayName?: string;
    badge: string;
    role: string;
    bio: string;
    aboutText: string;
    location: string;
    experience: string;
    email: string;
    phone: string;
    heroImage: string;
    workspaceImage: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      instagram: string;
    };
  };
  skills: Skill[];
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    initials: 'PO',
    name: 'Praveen Oggu',
    displayName: 'Praveen',
    badge: 'WELCOME TO MY PORTFOLIO',
    role: 'Computer Science Student | Full Stack Developer',
    bio: 'Building modern web applications and exploring AI-powered technologies.',
    aboutText: "I'm Praveen Oggu, a passionate Computer Science student and Full Stack Developer. I love turning ideas into efficient, scalable, and modern digital applications while exploring cutting-edge AI-powered technologies. With a strong commitment to clean code and elegant UI/UX, I strive to build impactful solutions.",
    location: 'India',
    experience: 'Fresher / Student',
    email: 'praveenoggu3@gmail.com',
    phone: '+91 96526 79953',
    heroImage: '/profile.jpg',
    workspaceImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    social: {
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/oggu-praveen-942957449?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/_mr_praveen_45__?exln=MW4ybmJxOHNuNnNubA==',
    },
  },
  skills: [
    { name: 'HTML', level: 95, category: 'core', icon: 'html5', color: '#E34F26' },
    { name: 'CSS', level: 90, category: 'core', icon: 'css3', color: '#1572B6' },
    { name: 'JavaScript', level: 85, category: 'core', icon: 'javascript', color: '#F7DF1E' },
    { name: 'PHP', level: 80, category: 'core', icon: 'php', color: '#777BB4' },
    { name: 'MySQL', level: 75, category: 'core', icon: 'mysql', color: '#4479A1' },
    // Fullstack expansion
    { name: 'React.js', level: 92, category: 'frontend', icon: 'react', color: '#61DAFB' },
    { name: 'Node.js', level: 88, category: 'backend', icon: 'nodejs', color: '#339933' },
    { name: 'TypeScript', level: 86, category: 'frontend', icon: 'typescript', color: '#3178C6' },
    { name: 'Tailwind CSS', level: 94, category: 'frontend', icon: 'tailwind', color: '#06B6D4' },
    { name: 'MongoDB', level: 82, category: 'database', icon: 'mongodb', color: '#47A248' },
  ],
  projects: [
    {
      id: 'saas-landing',
      title: 'SaaS Landing Page',
      description: 'Modern landing page for a SaaS product with clean UI and smooth animations.',
      category: 'Websites',
      tags: ['HTML', 'CSS', 'JavaScript'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      demoUrl: 'https://example.com/demo-saas',
      githubUrl: 'https://github.com/example/saas-landing',
    },
    {
      id: 'task-manager',
      title: 'Task Manager App',
      description: 'A mobile app to manage your tasks efficiently with a clean interface.',
      category: 'Mobile Apps',
      tags: ['Flutter', 'Dart', 'Firebase'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      demoUrl: 'https://example.com/demo-tasks',
      githubUrl: 'https://github.com/example/task-manager',
    },
    {
      id: 'admin-dashboard',
      title: 'Admin Dashboard',
      description: 'A powerful dashboard for managing users, analytics and content.',
      category: 'UI/UX',
      tags: ['React', 'Tailwind', 'Chart.js'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
      demoUrl: 'https://example.com/demo-dashboard',
      githubUrl: 'https://github.com/example/admin-dashboard',
    },
    {
      id: 'ecommerce-site',
      title: 'E-commerce Website',
      description: 'Full-featured online store with seamless payment integration, catalog browsing and real-time inventory.',
      category: 'Websites',
      tags: ['React', 'Tailwind', 'Stripe'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557224e?auto=format&fit=crop&w=900&q=80',
      demoUrl: 'https://example.com/demo-ecommerce',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with glowing modern dark UI and responsive layout.',
      category: 'Websites',
      tags: ['HTML', 'CSS', 'JS'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
      demoUrl: 'https://example.com/demo-portfolio',
      githubUrl: 'https://github.com/example/portfolio',
    },
    {
      id: 'social-media-app',
      title: 'Social Media App',
      description: 'Real-time social mobile application with messaging, story feeds and interactive media sharing.',
      category: 'Mobile Apps',
      tags: ['Flutter', 'Dart', 'Firebase'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=900&q=80',
      demoUrl: 'https://example.com/demo-social',
      githubUrl: 'https://github.com/example/social-media',
    },
  ],
  services: [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Responsive and modern websites using the latest technologies.',
      iconName: 'Globe',
      features: [
        'Custom frontend & full-stack web applications',
        'Mobile-first responsive layouts across all devices',
        'Fast page load speeds & SEO optimization',
        'Secure RESTful APIs & database integration',
        'Clean, modular and scalable architecture',
      ],
      technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'Express.js', 'MongoDB'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'User-centered design for better experiences.',
      iconName: 'Layout',
      features: [
        'Modern user-centered UI/UX design',
        'Interactive Figma prototypes & wireframes',
        'Design systems & reusable component styling',
        'Accessibility (a11y) & smooth user journeys',
        'Conversion-oriented web interfaces',
      ],
      technologies: ['Figma', 'Prototyping', 'Design Systems', 'Responsive UI', 'Wireframing'],
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Cross-platform apps for iOS and Android.',
      iconName: 'Smartphone',
      features: [
        'Single codebase cross-platform apps for iOS & Android',
        'Native-level smooth 60fps animations & UI',
        'Real-time cloud database & Firebase auth',
        'Push notifications & offline state management',
        'App store & play store readiness',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'State Management', 'REST APIs'],
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated and running smoothly.',
      iconName: 'ShieldCheck',
      features: [
        'Regular security audits & dependency patches',
        'Speed optimization & Google Lighthouse improvements',
        'Bug fixing, debugging & feature upgrades',
        'Automated backups & uptime monitoring',
        'Technical support & continuous improvements',
      ],
      technologies: ['SSL & Security', 'Performance Tuning', 'Git / CI/CD', 'Cloud Hosting', 'SEO Audits'],
    },
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'BrightTech',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Praveen delivered an amazing website for our business. The design is clean, fast and exactly what we needed. Highly recommended!',
    },
    {
      id: '2',
      name: 'Michael Lee',
      role: 'Founder',
      company: 'PixelApps',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Professional, creative and easy to work with. The communication was great and the final result exceeded our expectations.',
    },
    {
      id: '3',
      name: 'Emily Davis',
      role: 'Marketing Director',
      company: 'Vanguard Media',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'A talented developer with great attention to detail. I will definitely work with Praveen again on future projects.',
    },
  ],
};


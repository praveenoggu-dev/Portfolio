import React, { useState } from 'react';
import { initialPortfolioData, PortfolioData, Project, Service } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { CustomizeModal } from './components/CustomizeModal';
import { ParticleBackground } from './components/ParticleBackground';
import { SpotlightGlow } from './components/SpotlightGlow';
import { generateAndDownloadCV } from './utils/downloadCV';

export function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('portfolio_user_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (
          parsed?.personal?.name === 'Alex Carter' ||
          parsed?.personal?.heroImage?.includes('unsplash') ||
          parsed?.personal?.email?.includes('example.com') ||
          parsed?.personal?.social?.linkedin === 'https://linkedin.com' ||
          parsed?.personal?.social?.instagram === 'https://instagram.com'
        ) {
          return initialPortfolioData;
        }
        return parsed;
      } catch (e) {
        return initialPortfolioData;
      }
    }
    return initialPortfolioData;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [contactMessagePreset, setContactMessagePreset] = useState<string>('');
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  const handleSaveData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    localStorage.setItem('portfolio_user_data', JSON.stringify(newData));
  };

  const handleResetData = () => {
    setPortfolioData(initialPortfolioData);
    localStorage.removeItem('portfolio_user_data');
  };

  const handleDownloadCV = () => {
    generateAndDownloadCV(portfolioData);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquireService = (service: Service) => {
    setContactMessagePreset(`Hi Praveen, I am interested in discussing your "${service.title}" service for my project.`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-[#F59E0B] selection:text-black font-body relative overflow-x-hidden">
      {/* Pure White Starfield & Constellation Canvas */}
      <ParticleBackground />

      {/* Smooth Cursor Spotlight Interaction */}
      <SpotlightGlow glowColor="rgba(245, 158, 11, 0.08)" />

      {/* Navigation Bar */}
      <Navbar
        data={portfolioData}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
        onDownloadCV={handleDownloadCV}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero data={portfolioData} />

        {/* Featured Projects (3 Selected) */}
        <FeaturedProjects
          projects={portfolioData.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onViewAllProjects={scrollToProjects}
        />

        {/* Technical Skills */}
        <Skills skills={portfolioData.skills} />

        {/* About Me Section with Workspace & Hand-drawn accents */}
        <About data={portfolioData} onDownloadCV={handleDownloadCV} />

        {/* Services (What I Do) */}
        <Services
          services={portfolioData.services}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* All Projects Showcase (Filterable: All, Websites, Mobile Apps, UI/UX) */}
        <ProjectsShowcase
          projects={portfolioData.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Testimonials (What My Clients Say) */}
        <Testimonials testimonials={portfolioData.testimonials} />

        {/* Call to Action Banner (Scenic mountain horizon) */}
        <CallToAction />

        {/* Contact Me Form & Direct Info */}
        <Contact data={portfolioData} messagePreset={contactMessagePreset} />
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={handleInquireService}
      />

      {/* Profile Customize Modal */}
      <CustomizeModal
        data={portfolioData}
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}

export default App;

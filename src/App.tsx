import React, { useState, useEffect } from 'react';
import { User, Code2, Briefcase, ArrowRight } from 'lucide-react';
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

export type Page = 'home' | 'about' | 'skills' | 'services' | 'projects' | 'testimonials' | 'contact';

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
          !parsed?.skills?.some((s: any) => s.name === 'Python') ||
          parsed?.services?.some((s: any) => s.id === 'mobile-app') ||
          parsed?.projects?.some((p: any) => p.category === 'Mobile Apps')
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

  // Hash-based Page Routing (Separates every application into its own distinct page)
  const getPageFromHash = (): Page => {
    const raw = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    const validPages: Page[] = ['home', 'about', 'skills', 'services', 'projects', 'testimonials', 'contact'];
    if (validPages.includes(raw as Page)) {
      return raw as Page;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page | string) => {
    const target = page.toLowerCase() as Page;
    window.location.hash = `#/${target}`;
    setCurrentPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const handleInquireService = (service: Service) => {
    setContactMessagePreset(`Hi Praveen, I am interested in discussing your "${service.title}" service for my project.`);
    setSelectedService(null);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-[#F59E0B] selection:text-black font-body relative overflow-x-hidden flex flex-col justify-between">
      {/* Pure White Starfield & Constellation Canvas */}
      <ParticleBackground />

      {/* Smooth Cursor Spotlight Interaction */}
      <SpotlightGlow glowColor="rgba(245, 158, 11, 0.08)" />

      {/* Navigation Bar with Active Page Highlight */}
      <Navbar
        data={portfolioData}
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
        onDownloadCV={handleDownloadCV}
      />

      {/* Main Content Area - Renders the Active Page View */}
      <main className="flex-1">
        <div key={currentPage} className="page-enter">
          {/* 1. HOME PAGE */}
          {currentPage === 'home' && (
            <div>
              <Hero data={portfolioData} onNavigate={navigateTo} />

              {/* Quick Navigation Cards on Home */}
              <section className="py-12 sm:py-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
                      DISCOVER MORE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
                      Explore My Work & Expertise
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Card */}
                    <div
                      onClick={() => navigateTo('about')}
                      className="glow-card rounded-2xl p-7 flex flex-col justify-between group cursor-pointer hover:border-[#F59E0B]/60 transition-all duration-300"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-5 group-hover:scale-110 transition-transform">
                          <User size={22} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#FBBF24] transition-colors">
                          About Me
                        </h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">
                          Discover my journey, background, and dedication to building modern, performant digital solutions.
                        </p>
                      </div>
                      <div className="pt-6 mt-4 border-t border-[#1A243D]/50 flex items-center justify-between text-xs font-semibold text-[#F59E0B] group-hover:text-[#FBBF24] transition-colors">
                        <span>Read Biography</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>

                    {/* Skills Card */}
                    <div
                      onClick={() => navigateTo('skills')}
                      className="glow-card rounded-2xl p-7 flex flex-col justify-between group cursor-pointer hover:border-[#F59E0B]/60 transition-all duration-300"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-5 group-hover:scale-110 transition-transform">
                          <Code2 size={22} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#FBBF24] transition-colors">
                          Technical Skills
                        </h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">
                          Explore my core tech stack: C, Java, Python, HTML, CSS, JavaScript, React.js, PHP, and MySQL.
                        </p>
                      </div>
                      <div className="pt-6 mt-4 border-t border-[#1A243D]/50 flex items-center justify-between text-xs font-semibold text-[#F59E0B] group-hover:text-[#FBBF24] transition-colors">
                        <span>View 9 Skills</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>

                    {/* Projects Card */}
                    <div
                      onClick={() => navigateTo('projects')}
                      className="glow-card rounded-2xl p-7 flex flex-col justify-between group cursor-pointer hover:border-[#F59E0B]/60 transition-all duration-300"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-5 group-hover:scale-110 transition-transform">
                          <Briefcase size={22} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#FBBF24] transition-colors">
                          Projects Showcase
                        </h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">
                          Browse full-stack websites, e-commerce stores, and UI/UX dashboards with live interactive details.
                        </p>
                      </div>
                      <div className="pt-6 mt-4 border-t border-[#1A243D]/50 flex items-center justify-between text-xs font-semibold text-[#F59E0B] group-hover:text-[#FBBF24] transition-colors">
                        <span>Explore Projects</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Projects Highlight */}
              <FeaturedProjects
                projects={portfolioData.projects}
                onSelectProject={(proj) => setSelectedProject(proj)}
                onViewAllProjects={() => navigateTo('projects')}
              />

              {/* Call to Action Banner */}
              <CallToAction onContactClick={() => navigateTo('contact')} />
            </div>
          )}

          {/* 2. ABOUT PAGE */}
          {currentPage === 'about' && (
            <div>
              <About data={portfolioData} onDownloadCV={handleDownloadCV} />
              <CallToAction onContactClick={() => navigateTo('contact')} />
            </div>
          )}

          {/* 3. SKILLS PAGE */}
          {currentPage === 'skills' && (
            <div>
              <Skills skills={portfolioData.skills} />
              <CallToAction onContactClick={() => navigateTo('projects')} />
            </div>
          )}

          {/* 4. SERVICES PAGE */}
          {currentPage === 'services' && (
            <div>
              <Services
                services={portfolioData.services}
                onSelectService={(service) => setSelectedService(service)}
              />
              <CallToAction onContactClick={() => navigateTo('contact')} />
            </div>
          )}

          {/* 5. PROJECTS PAGE */}
          {currentPage === 'projects' && (
            <div>
              <ProjectsShowcase
                projects={portfolioData.projects}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
              <CallToAction onContactClick={() => navigateTo('contact')} />
            </div>
          )}

          {/* 6. TESTIMONIALS PAGE */}
          {currentPage === 'testimonials' && (
            <div>
              <Testimonials testimonials={portfolioData.testimonials} />
              <CallToAction onContactClick={() => navigateTo('contact')} />
            </div>
          )}

          {/* 7. CONTACT PAGE */}
          {currentPage === 'contact' && (
            <div>
              <Contact data={portfolioData} messagePreset={contactMessagePreset} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        data={portfolioData}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

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

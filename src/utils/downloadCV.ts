import { PortfolioData } from '../data/portfolioData';

export const generateAndDownloadCV = (data: PortfolioData) => {
  const cvContent = `
===========================================================
                  ${data.personal.name.toUpperCase()}
       ${data.personal.role.toUpperCase()}
===========================================================

Contact Information:
- Email: ${data.personal.email}
- Phone: ${data.personal.phone}
- Location: ${data.personal.location}
- GitHub: ${data.personal.social.github}
- LinkedIn: ${data.personal.social.linkedin}

-----------------------------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------------------------
${data.personal.aboutText}

-----------------------------------------------------------
TECHNICAL SKILLS
-----------------------------------------------------------
${data.skills.map(s => `- ${s.name}: ${s.level}% proficiency`).join('\n')}

-----------------------------------------------------------
FEATURED PROJECTS
-----------------------------------------------------------
${data.projects.map(p => `
* ${p.title} (${p.category})
  Tags: ${p.tags.join(', ')}
  Description: ${p.description}
  Demo: ${p.demoUrl || 'N/A'}
  Repository: ${p.githubUrl || 'N/A'}
`).join('\n')}

-----------------------------------------------------------
SERVICES OFFERED
-----------------------------------------------------------
${data.services.map(s => `- ${s.title}: ${s.description}`).join('\n')}

-----------------------------------------------------------
CLIENT TESTIMONIALS
-----------------------------------------------------------
${data.testimonials.map(t => `- "${t.text}" — ${t.name}, ${t.role} (${t.company})`).join('\n')}

===========================================================
Generated on ${new Date().toLocaleDateString()}
`;

  const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.personal.name.replace(/\s+/g, '_')}_CV.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};


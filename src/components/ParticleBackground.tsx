import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gentle interactive ripple
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 130,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle settings: Pure white stars
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.6 + 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw pure white connection lines between nearby stars
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw white particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.8;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Draw pure white glowing star
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = '#FFFFFF';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Ambient Royal Electric Violet Glow Orbs */}
      <div className="absolute -top-[10%] left-[20%] w-[680px] h-[680px] bg-gradient-to-br from-[#7C3AED]/22 to-[#4A0E80]/18 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-[40%] -right-[10%] w-[580px] h-[580px] bg-gradient-to-tl from-[#9333EA]/20 to-[#6D28D9]/16 rounded-full blur-[150px] animate-aurora" />
      <div className="absolute -bottom-[10%] left-[10%] w-[720px] h-[720px] bg-gradient-to-tr from-[#8B5CF6]/20 to-[#4C1D95]/16 rounded-full blur-[160px] animate-pulse-glow" />

      {/* Cybernetic Dot Matrix Grid Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* Canvas for pure white floating stars and constellation mesh */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-75" />
    </div>
  );
};

import React, { useState } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';
import { PortfolioData, initialPortfolioData } from '../data/portfolioData';

interface CustomizeModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  data,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState(data);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0D152B] border border-[#1A2645] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#1A2645] flex items-center justify-between">
          <div>
            <h3 className="text-xl font-heading font-bold text-white">
              Customize Your Portfolio
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Easily update your personal information, role, contact info, and bio.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#081028] text-[#94A3B8] hover:text-white border border-[#1A2645] flex items-center justify-center transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={formData.personal.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      name: e.target.value,
                      displayName: e.target.value.split(' ')[0],
                      initials: e.target.value
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()
                        .slice(0, 2),
                    },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                Professional Title / Role
              </label>
              <input
                type="text"
                value={formData.personal.role}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, role: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
              Hero Bio Headline
            </label>
            <input
              type="text"
              value={formData.personal.bio}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  personal: { ...formData.personal, bio: e.target.value },
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
              About Me Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.personal.aboutText}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  personal: { ...formData.personal, aboutText: e.target.value },
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.personal.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, email: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.personal.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, location: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                Experience
              </label>
              <input
                type="text"
                value={formData.personal.experience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, experience: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                Hero Image URL
              </label>
              <input
                type="text"
                value={formData.personal.heroImage}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, heroImage: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                value={formData.personal.social.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      social: { ...formData.personal.social, linkedin: e.target.value },
                    },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1">
                GitHub Profile URL
              </label>
              <input
                type="text"
                value={formData.personal.social.github}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      social: { ...formData.personal.social, github: e.target.value },
                    },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] focus:border-[#3882F6] text-white text-sm outline-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#1A2645] flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onReset();
                setFormData(initialPortfolioData);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#EF4444] hover:bg-[#EF4444]/10 transition-colors"
            >
              <RotateCcw size={14} />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#081028] border border-[#1A2645] text-white text-xs font-semibold hover:bg-[#141F42] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#3882F6] hover:bg-[#2563EB] text-white text-xs font-semibold transition-all shadow-md shadow-[#3882F6]/30"
              >
                <Save size={14} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  whatsappNo: string;
}

const TeamRegistrationForm = () => {
  const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [teamLeader, setTeamLeader] = useState({
    name: "",
    email: "",
    whatsappNo: "",
  });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const handleAddMember = () => {
    if (teamMembers.length < 3) {
      setTeamMembers([
        ...teamMembers,
        {
          id: Date.now().toString(),
          name: "",
          email: "",
          whatsappNo: "",
        },
      ]);
    }
  };

  const handleRemoveMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleMemberChange = (
    id: string,
    field: keyof TeamMember,
    value: string
  ) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      teamName,
      universityName,
      teamLeader,
      teamMembers,
    });
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Animated Border Container */}
        <div className="relative">
          {/* Animated border effect */}
          <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  transparent 25%, 
                  #002EBA 50%, 
                  transparent 75%, 
                  transparent 100%)`,
                animation: "borderAnimation 3s linear infinite",
              }}
            />
          </div>

          {/* Form Container */}
          <div className="relative bg-black rounded-2xl p-8 border border-gray-800/50">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Team Registration
              </h1>
              <p className="text-gray-400 text-sm">
                Register your team for AlgoArena 2025
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Team Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter your team name"
                  required
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                />
              </div>

              {/* University Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  University Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={universityName}
                  onChange={(e) => setUniversityName(e.target.value)}
                  placeholder="Enter your university name"
                  required
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                />
              </div>

              {/* Team Members Section */}
              <div>
                <label className="block text-white font-medium mb-4">
                  Team Members{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    (Min: 1, Max: 4)
                  </span>
                </label>

                {/* Team Leader */}
                <div className="mb-4">
                  <h3 className="text-white font-medium mb-3">
                    Team Leader <span className="text-red-500">*</span>
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={teamLeader.name}
                        onChange={(e) =>
                          setTeamLeader({ ...teamLeader, name: e.target.value })
                        }
                        placeholder="Full name"
                        required
                        className="w-full px-4 py-2.5 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={teamLeader.email}
                        onChange={(e) =>
                          setTeamLeader({ ...teamLeader, email: e.target.value })
                        }
                        placeholder="email@example.com"
                        required
                        className="w-full px-4 py-2.5 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        WhatsApp No <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={teamLeader.whatsappNo}
                        onChange={(e) =>
                          setTeamLeader({
                            ...teamLeader,
                            whatsappNo: e.target.value,
                          })
                        }
                        placeholder="+94 XX XXXXXXX"
                        required
                        className="w-full px-4 py-2.5 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Team Members */}
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 pb-4 border-b border-gray-800/50"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-white font-medium">
                        Team Member {index + 2}
                      </h3>
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(member.id)}
                        className="text-red-500 hover:text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-gray-400 text-sm mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) =>
                            handleMemberChange(member.id, "name", e.target.value)
                          }
                          placeholder="Full name"
                          className="w-full px-4 py-2.5 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) =>
                            handleMemberChange(member.id, "email", e.target.value)
                          }
                          placeholder="email@example.com"
                          className="w-full px-4 py-2.5 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1">
                          WhatsApp No
                        </label>
                        <input
                          type="tel"
                          value={member.whatsappNo}
                          onChange={(e) =>
                            handleMemberChange(
                              member.id,
                              "whatsappNo",
                              e.target.value
                            )
                          }
                          placeholder="+94 XX XXXXXXX"
                          className="w-full px-4 py-2.5 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Add Member Button */}
                {teamMembers.length < 3 && (
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-[#002EBA] hover:text-[#002EBA] transition-colors"
                  >
                    Fill current member details to add more
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 bg-[#1a2332] text-white rounded-lg font-medium hover:bg-[#22293a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#002EBA] text-white rounded-lg font-medium hover:bg-[#0039d6] transition-colors"
                >
                  Register Team
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {/* CSS for border animation */}
      <style jsx global>{`
        @keyframes borderAnimation {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default TeamRegistrationForm;

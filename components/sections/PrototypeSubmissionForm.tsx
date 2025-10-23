"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const PrototypeSubmissionForm = () => {
  const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [demoVideo, setDemoVideo] = useState("");
  const [teamLeaderEmail, setTeamLeaderEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", message: "" });

    try {
      // Prepare prototype data
      const prototypeData = {
        teamName,
        projectTitle,
        projectDescription,
        githubRepo,
        demoVideo,
        teamLeaderEmail,
        additionalNotes,
        submittedAt: new Date().toISOString(),
      };

      // TODO: Submit to Firebase or backend
      console.log("Prototype submission data:", prototypeData);

      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage({
        type: "success",
        message: "Prototype submitted successfully! 🎉",
      });

      // Reset form after 2 seconds and redirect
      setTimeout(() => {
        router.push("/?submitted=true");
      }, 2000);
    } catch (error) {
      setSubmitMessage({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md lg:max-w-2xl relative"
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
                Prototype Submission
              </h1>
              <p className="text-gray-400 text-sm">
                Submit your project prototype for AlgoArena 2025
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Message */}
              {submitMessage.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border ${
                    submitMessage.type === "success"
                      ? "bg-green-500/10 border-green-500/50 text-green-400"
                      : "bg-red-500/10 border-red-500/50 text-red-400"
                  }`}
                >
                  {submitMessage.message}
                </motion.div>
              )}

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

              {/* Project Title */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="Enter your project title"
                  required
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                />
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Describe your project, its features, and how it solves the problem"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors resize-vertical"
                />
              </div>

              {/* GitHub Repository */}
              <div>
                <label className="block text-white font-medium mb-2">
                  GitHub Repository URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  value={githubRepo}
                  onChange={(e) => setGithubRepo(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  required
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                />
              </div>

              {/* Demo Video */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Demo Video URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  value={demoVideo}
                  onChange={(e) => setDemoVideo(e.target.value)}
                  placeholder="https://youtube.com/watch?v=... or https://drive.google.com/..."
                  required
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                />
                <p className="text-gray-500 text-xs mt-1">
                  Upload your demo video to YouTube or Google Drive and paste the link here
                </p>
              </div>

              {/* Team Leader Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Team Leader Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={teamLeaderEmail}
                  onChange={(e) => setTeamLeaderEmail(e.target.value)}
                  placeholder="leader@example.com"
                  required
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Any additional information you'd like to share with the judges"
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0a1020] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#002EBA] transition-colors resize-vertical"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#1a2332] text-white rounded-lg font-medium hover:bg-[#22293a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#002EBA] text-white rounded-lg font-medium hover:bg-[#0039d6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Prototype"
                  )}
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

export default PrototypeSubmissionForm;

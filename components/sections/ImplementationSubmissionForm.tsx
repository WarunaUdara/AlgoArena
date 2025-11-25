'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitImplementation } from '@/lib/firebase/implementationSubmission'

const ImplementationSubmissionForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    teamName: '',
    googleDriveLink: '',
    additionalNotes: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required'
    }

    if (!formData.googleDriveLink.trim()) {
      newErrors.googleDriveLink = 'Google Drive link is required'
    } else if (
      !formData.googleDriveLink.includes('drive.google.com')
    ) {
      newErrors.googleDriveLink = 'Please provide a valid Google Drive link'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await submitImplementation(formData)

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message,
        })
        // Reset form
        setFormData({
          teamName: '',
          googleDriveLink: '',
          additionalNotes: '',
        })
        // Redirect to home after 2 seconds
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message,
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen py-20 bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Implementation Submission
          </h1>
          <p className="text-gray-400 text-lg">
            Submit your final implementation for AlgoArena 2025
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm border rounded-2xl p-6 lg:p-8 space-y-6"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0, 46, 186, 0.1), rgba(0, 46, 186, 0.02))',
            borderColor: 'rgba(0, 46, 186, 0.2)',
          }}
        >
          {/* Team Name */}
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium mb-2">
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#002EBA] ${
                errors.teamName ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="Enter your registered team name"
            />
            {errors.teamName && (
              <p className="mt-2 text-sm text-red-500">{errors.teamName}</p>
            )}
            <p className="mt-2 text-xs text-gray-400">
              Team name will be verified when you submit
            </p>
          </div>

          {/* Google Drive Link */}
          <div>
            <label
              htmlFor="googleDriveLink"
              className="block text-sm font-medium mb-2"
            >
              Google Drive Link <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="googleDriveLink"
              name="googleDriveLink"
              value={formData.googleDriveLink}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#002EBA] ${
                errors.googleDriveLink ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="https://drive.google.com/..."
            />
            {errors.googleDriveLink && (
              <p className="mt-2 text-sm text-red-500">{errors.googleDriveLink}</p>
            )}
            <p className="mt-2 text-xs text-gray-400">
              Make sure the link has view/download permissions
            </p>
          </div>

          {/* Additional Notes */}
          <div>
            <label
              htmlFor="additionalNotes"
              className="block text-sm font-medium mb-2"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#002EBA] resize-none"
              placeholder="Any additional information or comments..."
            />
          </div>

          {/* Submit Status */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/20 text-green-500'
                  : 'bg-red-500/10 border border-red-500/20 text-red-500'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-[#002EBA] hover:bg-[#0039d4] text-white text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Implementation'}
          </button>

          <p className="text-sm text-gray-400 text-center">
            By submitting, you confirm that all information is accurate and the
            implementation is your team&apos;s original work.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ImplementationSubmissionForm

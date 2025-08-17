'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Brain, Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    codingExperience: '',
    learningGoal: '',
    timeCommitment: '',
    motivation: '',
    agreeToTerms: false
  })

  const supabase = createClientComponentClient()
  const router = useRouter()

  const experienceLevels = [
    { value: 'complete-beginner', label: 'Complete Beginner', desc: 'Never written code before' },
    { value: 'some-basics', label: 'Some Basics', desc: 'Familiar with HTML/CSS or basic concepts' },
    { value: 'intermediate', label: 'Intermediate', desc: 'Can build simple applications' },
    { value: 'advanced', label: 'Advanced', desc: 'Looking to specialize or level up' }
  ]

  const learningGoals = [
    { value: 'career-change', label: 'Career Change', desc: 'Switch to tech career' },
    { value: 'skill-upgrade', label: 'Skill Upgrade', desc: 'Enhance current abilities' },
    { value: 'freelancing', label: 'Freelancing', desc: 'Start freelance work' },
    { value: 'startup', label: 'Startup', desc: 'Build my own product' },
    { value: 'hobby', label: 'Hobby', desc: 'Learn for personal interest' }
  ]

  const timeCommitments = [
    { value: '1-2', label: '1-2 hours/day', desc: 'Light learning pace' },
    { value: '2-4', label: '2-4 hours/day', desc: 'Standard pace' },
    { value: '4-6', label: '4-6 hours/day', desc: 'Intensive learning' },
    { value: '6+', label: '6+ hours/day', desc: 'Bootcamp intensity' }
  ]

  const validateStep = (stepNum: number) => {
    const newErrors: Record<string, string> = {}
    
    if (stepNum === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format'
      }
      if (!formData.password) newErrors.password = 'Password is required'
      else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters'
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    } else if (stepNum === 2) {
      if (!formData.codingExperience) newErrors.codingExperience = 'Please select your experience level'
      if (!formData.learningGoal) newErrors.learningGoal = 'Please select your learning goal'
      if (!formData.timeCommitment) newErrors.timeCommitment = 'Please select time commitment'
    } else if (stepNum === 3) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignUp = async () => {
    setLoading(true)
    setErrors({})
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
        }
      })

      if (authError) {
        setErrors({ general: authError.message })
        return
      }

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([{
            user_id: authData.user.id,
            name: `${formData.firstName} ${formData.lastName}`,
            first_name: formData.firstName,
            last_name: formData.lastName,
            coding_experience: formData.codingExperience,
            learning_goal: formData.learningGoal,
            time_commitment: formData.timeCommitment,
            motivation: formData.motivation,
            onboarding_completed: true,
            is_premium: false
          }])

        if (profileError) {
          console.error('Profile creation error:', profileError)
        }

        router.push('/dashboard')
      }
    } catch (err) {
      setErrors({ general: 'An unexpected error occurred' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <button 
          onClick={() => step === 1 ? router.push('/') : setStep(step - 1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNum === step 
                    ? 'bg-blue-600 text-white' 
                    : stepNum < step 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-600 text-gray-300'
                }`}>
                  {stepNum < step ? <CheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-16 h-1 mx-2 ${stepNum < step ? 'bg-green-600' : 'bg-gray-600'}`} />
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Sign Up for AIHero</h2>
                <p className="text-gray-300">Let's start with your basic information</p>
              </div>

              {errors.general && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">{errors.general}</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.firstName ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.lastName ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`w-full pl-10 pr-12 py-3 bg-white/10 border ${errors.password ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className={`w-full pl-10 pr-12 py-3 bg-white/10 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <button
                  onClick={() => {
                    if (validateStep(1)) setStep(2);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Tell Us About Yourself</h2>
                <p className="text-gray-300">Help us personalize your learning experience</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">Coding Experience Level</label>
                  <div className="space-y-3">
                    {experienceLevels.map((level) => (
                      <div 
                        key={level.value}
                        onClick={() => setFormData({...formData, codingExperience: level.value})}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.codingExperience === level.value
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">{level.label}</h4>
                            <p className="text-gray-400 text-sm">{level.desc}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            formData.codingExperience === level.value
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-400'
                          }`}>
                            {formData.codingExperience === level.value && (
                              <div className="w-full h-full rounded-full bg-white scale-50" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.codingExperience && <p className="text-red-400 text-sm mt-2">{errors.codingExperience}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">Learning Goal</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {learningGoals.map((goal) => (
                      <div 
                        key={goal.value}
                        onClick={() => setFormData({...formData, learningGoal: goal.value})}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.learningGoal === goal.value
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <h4 className="text-white font-medium mb-1">{goal.label}</h4>
                        <p className="text-gray-400 text-sm">{goal.desc}</p>
                      </div>
                    ))}
                  </div>
                  {errors.learningGoal && <p className="text-red-400 text-sm mt-2">{errors.learningGoal}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">Time Commitment</label>
                  <div className="space-y-3">
                    {timeCommitments.map((time) => (
                      <div 
                        key={time.value}
                        onClick={() => setFormData({...formData, timeCommitment: time.value})}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.timeCommitment === time.value
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">{time.label}</h4>
                            <p className="text-gray-400 text-sm">{time.desc}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            formData.timeCommitment === time.value
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-400'
                          }`}>
                            {formData.timeCommitment === time.value && (
                              <div className="w-full h-full rounded-full bg-white scale-50" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.timeCommitment && <p className="text-red-400 text-sm mt-2">{errors.timeCommitment}</p>}
                </div>

                <button
                  onClick={() => {
                    if (validateStep(2)) setStep(3);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Almost Done!</h2>
                <p className="text-gray-300">Just a few more details to complete your profile</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What motivates you to learn programming?</label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Tell us what drives you to learn programming..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                      className="mt-1 w-4 h-4 text-blue-600 bg-transparent border border-white/20 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the{' '}
                      <a href="#" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}
                </div>

                <button
                  onClick={handleSignUp}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                  {!loading && <CheckCircle className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          <div className="text-center mt-6">
            <span className="text-gray-400">Already have an account? </span>
            <button 
              onClick={() => router.push('/auth/signin')}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
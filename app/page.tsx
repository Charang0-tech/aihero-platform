'use client';

import { useRouter } from 'next/navigation';
import { 
  Play, ArrowRight, Code, Trophy, Star, Clock,
  BookOpen, Target, Users, Brain, Rocket
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Become an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">AI Hero</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI development from Python fundamentals to deploying machine learning models. 
              Build real projects, earn achievements, and develop industry-relevant skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Play className="w-5 h-5" />
                Start Learning Free
              </button>
              <button
                className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="bg-blue-500/20 rounded-lg p-3 w-fit mb-4">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Hands-on Coding</h3>
            <p className="text-gray-400">Learn by building real AI projects with Python</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="bg-purple-500/20 rounded-lg p-3 w-fit mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Fundamentals</h3>
            <p className="text-gray-400">Master machine learning and neural networks</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="bg-green-500/20 rounded-lg p-3 w-fit mb-4">
              <Trophy className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Portfolio Projects</h3>
            <p className="text-gray-400">Build impressive projects for your portfolio</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">84</div>
            <div className="text-gray-400">Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">14</div>
            <div className="text-gray-400">Weeks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">12</div>
            <div className="text-gray-400">Free Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">28</div>
            <div className="text-gray-400">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}

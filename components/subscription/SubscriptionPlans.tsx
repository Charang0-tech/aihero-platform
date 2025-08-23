// components/subscription/SubscriptionPlans.tsx
// Beautiful, engaging subscription plans with animations and clear value propositions

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Crown, 
  Zap, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Lock,
  Unlock,
  Gift,
  Trophy,
  Target,
  BookOpen,
  Code,
  Users,
  Award,
  Download,
  MessageSquare,
  Calendar
} from 'lucide-react';
import { 
  useSubscriptionStore, 
  SubscriptionTier, 
  SUBSCRIPTION_TIERS,
  formatPrice,
  getTierGradient 
} from '@/stores/subscriptionStore';

interface SubscriptionPlansProps {
  showModal?: boolean;
  currentTier?: SubscriptionTier['id'];
  onClose?: () => void;
  onUpgrade?: (tier: SubscriptionTier['id']) => void;
}

export default function SubscriptionPlans({ 
  showModal = false, 
  currentTier = 'free',
  onClose,
  onUpgrade 
}: SubscriptionPlansProps) {
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier['id'] | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const { upgradeTier, isProcessingPayment } = useSubscriptionStore();

  const handleSelectTier = (tierId: SubscriptionTier['id']) => {
    setSelectedTier(tierId);
    onUpgrade?.(tierId);
  };

  const content = (
    <div className={`${showModal ? 'max-w-7xl mx-auto p-6' : 'w-full'}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From foundational programming to cutting-edge AI research. Start free, upgrade when you're ready to accelerate your career.
          </p>
          
          {/* Current tier indicator */}
          {currentTier !== 'free' && (
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">
                Current Plan: {SUBSCRIPTION_TIERS.find(t => t.id === currentTier)?.name}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 p-1 rounded-xl border border-gray-600">
          <button
            onClick={() => setShowComparison(false)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              !showComparison 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Plans
          </button>
          <button
            onClick={() => setShowComparison(true)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              showComparison 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Compare Features
          </button>
        </div>
      </div>

      {!showComparison ? (
        <PricingCards 
          tiers={SUBSCRIPTION_TIERS}
          currentTier={currentTier}
          selectedTier={selectedTier}
          onSelectTier={handleSelectTier}
          isProcessing={isProcessingPayment}
        />
      ) : (
        <ComparisonTable 
          tiers={SUBSCRIPTION_TIERS}
          currentTier={currentTier}
          onSelectTier={handleSelectTier}
        />
      )}

      {/* Success Stories */}
      <SuccessStories />
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );

  if (showModal) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Upgrade Your Learning</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2"
              >
                ✕
              </button>
            </div>
            {content}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return <div className="min-h-screen bg-gray-900">{content}</div>;
}

// Pricing Cards Component
function PricingCards({ 
  tiers, 
  currentTier, 
  selectedTier, 
  onSelectTier, 
  isProcessing 
}: {
  tiers: SubscriptionTier[];
  currentTier: SubscriptionTier['id'];
  selectedTier: SubscriptionTier['id'] | null;
  onSelectTier: (tier: SubscriptionTier['id']) => void;
  isProcessing: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {tiers.map((tier, index) => (
        <PricingCard
          key={tier.id}
          tier={tier}
          index={index}
          currentTier={currentTier}
          selectedTier={selectedTier}
          onSelectTier={onSelectTier}
          isProcessing={isProcessing}
        />
      ))}
    </div>
  );
}

// Individual Pricing Card
function PricingCard({
  tier,
  index,
  currentTier,
  selectedTier,
  onSelectTier,
  isProcessing
}: {
  tier: SubscriptionTier;
  index: number;
  currentTier: SubscriptionTier['id'];
  selectedTier: SubscriptionTier['id'] | null;
  onSelectTier: (tier: SubscriptionTier['id']) => void;
  isProcessing: boolean;
}) {
  const isCurrentTier = currentTier === tier.id;
  const isUpgrade = SUBSCRIPTION_TIERS.findIndex(t => t.id === currentTier) < index;
  const gradient = getTierGradient(tier.id);

  return (
    <motion.div
      className={`relative rounded-2xl border-2 transition-all duration-300 ${
        tier.popular 
          ? 'border-blue-500 bg-gradient-to-b from-blue-900/20 to-gray-800 scale-105' 
          : isCurrentTier
          ? 'border-green-500 bg-gradient-to-b from-green-900/20 to-gray-800'
          : 'border-gray-700 bg-gray-800 hover:border-gray-600'
      } ${selectedTier === tier.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Current Tier Badge */}
      {isCurrentTier && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Crown className="w-4 h-4" />
            <span>Current Plan</span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">{tier.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
          
          <div className="mb-4">
            <span className="text-4xl font-bold text-white">{formatPrice(tier.price)}</span>
            {tier.price > 0 && (
              <span className="text-gray-400 text-sm ml-2">one-time</span>
            )}
          </div>
          
          <div className="text-sm text-gray-400">
            Access to {tier.weekAccess.length} weeks of content
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {tier.features.slice(0, 6).map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
          
          {tier.features.length > 6 && (
            <div className="text-gray-400 text-sm text-center pt-2">
              +{tier.features.length - 6} more features
            </div>
          )}
        </div>

        {/* Action Button */}
        <motion.button
          onClick={() => onSelectTier(tier.id)}
          disabled={isCurrentTier || isProcessing}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
            isCurrentTier
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : isUpgrade
              ? `bg-gradient-to-r ${gradient} text-white hover:shadow-lg hover:shadow-blue-500/25`
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          whileHover={!isCurrentTier && !isProcessing ? { scale: 1.02 } : {}}
          whileTap={!isCurrentTier && !isProcessing ? { scale: 0.98 } : {}}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Processing...</span>
            </div>
          ) : isCurrentTier ? (
            'Current Plan'
          ) : tier.price === 0 ? (
            'Get Started Free'
          ) : isUpgrade ? (
            <div className="flex items-center justify-center space-x-2">
              <span>Upgrade Now</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          ) : (
            'Downgrade'
          )}
        </motion.button>

        {/* Value Proposition */}
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
          <div className="text-xs text-gray-400 text-center">
            {tier.price === 0 
              ? 'Perfect for getting started'
              : `Best value: $${(tier.price / tier.weekAccess.length).toFixed(2)} per week of content`
            }
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Comparison Table Component
function ComparisonTable({ 
  tiers, 
  currentTier, 
  onSelectTier 
}: {
  tiers: SubscriptionTier[];
  currentTier: SubscriptionTier['id'];
  onSelectTier: (tier: SubscriptionTier['id']) => void;
}) {
  const features = [
    { name: 'Weeks of Content', key: 'weeks' },
    { name: 'Portfolio Projects', key: 'projects' },
    { name: 'Downloadable Resources', key: 'downloads' },
    { name: 'Certificates', key: 'certificates' },
    { name: 'Community Access', key: 'community' },
    { name: 'Priority Support', key: 'support' }
  ];

  return (
    <div className="overflow-x-auto mb-16">
      <div className="min-w-full bg-gray-800 rounded-2xl border border-gray-700">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 p-6 border-b border-gray-700">
          <div className="text-white font-semibold">Features</div>
          {tiers.map(tier => (
            <div key={tier.id} className="text-center">
              <div className="text-2xl mb-2">{tier.icon}</div>
              <div className="text-white font-semibold">{tier.name}</div>
              <div className="text-2xl font-bold text-white mt-2">{formatPrice(tier.price)}</div>
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {features.map((feature, index) => (
          <div key={feature.key} className={`grid grid-cols-5 gap-4 p-6 ${index !== features.length - 1 ? 'border-b border-gray-700' : ''}`}>
            <div className="text-gray-300 font-medium">{feature.name}</div>
            {tiers.map(tier => (
              <div key={tier.id} className="text-center">
                {feature.key === 'weeks' && <span className="text-white">{tier.weekAccess.length}</span>}
                {feature.key === 'projects' && <span className="text-white">{tier.maxProjects}</span>}
                {feature.key === 'downloads' && (
                  tier.downloadableContent ? 
                    <Check className="w-5 h-5 text-green-400 mx-auto" /> : 
                    <span className="text-gray-500">—</span>
                )}
                {feature.key === 'certificates' && (
                  tier.certificateAccess ? 
                    <Check className="w-5 h-5 text-green-400 mx-auto" /> : 
                    <span className="text-gray-500">—</span>
                )}
                {feature.key === 'community' && (
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    tier.communityAccess === 'vip' ? 'bg-purple-900/50 text-purple-300' :
                    tier.communityAccess === 'premium' ? 'bg-blue-900/50 text-blue-300' :
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {tier.communityAccess}
                  </span>
                )}
                {feature.key === 'support' && (
                  tier.prioritySupport ? 
                    <Check className="w-5 h-5 text-green-400 mx-auto" /> : 
                    <span className="text-gray-500">—</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Success Stories Component - REPLACED WITH HONEST CONTENT
function SuccessStories() {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose AIHero?</h2>
        <p className="text-gray-400">Learn AI development through hands-on projects and real-world applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-3xl mb-4 text-center">🚀</div>
          <h4 className="font-semibold text-white mb-2">Project-Based Learning</h4>
          <p className="text-gray-300">Build real AI applications and add them to your portfolio</p>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-3xl mb-4 text-center">📚</div>
          <h4 className="font-semibold text-white mb-2">Comprehensive Curriculum</h4>
          <p className="text-gray-300">From Python basics to advanced machine learning concepts</p>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-3xl mb-4 text-center">🎯</div>
          <h4 className="font-semibold text-white mb-2">Industry-Relevant Skills</h4>
          <p className="text-gray-300">Learn the tools and techniques used by professional AI developers</p>
        </div>
      </div>
    </div>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the difference between tiers?",
      answer: "Each tier builds on the previous one. Free covers Python fundamentals, Intermediate adds web development and data science, Advanced includes machine learning and AI, while Professional covers cutting-edge research and leadership skills."
    },
    {
      question: "Can I upgrade anytime?",
      answer: "Yes! You can upgrade at any time and only pay the difference. Your progress is saved and you immediately get access to additional content."
    },
    {
      question: "Is this really one-time payment?",
      answer: "Absolutely. Unlike subscriptions, you pay once and get lifetime access to your tier's content, including future updates and improvements."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, we'll refund your payment, no questions asked."
    },
    {
      question: "Do I get certificates?",
      answer: "Intermediate tier and above include course completion certificates that you can add to your LinkedIn profile and resume to showcase your AI skills to employers."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400">Got questions? We've got answers.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span className="font-semibold text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: openFAQ === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

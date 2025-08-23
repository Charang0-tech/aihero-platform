// stores/subscriptionStore.ts
// Complete subscription and freemium management system

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SubscriptionTier {
  id: 'free' | 'intermediate' | 'advanced' | 'professional';
  name: string;
  price: number;
  duration: 'forever' | 'one-time' | 'monthly' | 'yearly';
  features: string[];
  weekAccess: number[];
  maxProjects: number;
  downloadableContent: boolean;
  certificateAccess: boolean;
  prioritySupport: boolean;
  communityAccess: 'basic' | 'premium' | 'vip';
  color: string;
  gradient: string;
  icon: string;
  popular?: boolean;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface UserSubscription {
  userId: string;
  currentTier: SubscriptionTier['id'];
  purchaseDate?: Date;
  expiryDate?: Date;
  isActive: boolean;
  paymentMethod?: string;
  totalSpent: number;
  upgradeHistory: {
    fromTier: SubscriptionTier['id'];
    toTier: SubscriptionTier['id'];
    date: Date;
    amount: number;
  }[];
  accessLimits: {
    weeklyLessons: number;
    monthlyProjects: number;
    assessmentRetries: number;
  };
}

export interface PaymentDetails {
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  method: 'stripe' | 'paypal' | 'crypto';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  date: Date;
}

// Subscription tier definitions
export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: 'free',
    name: 'Free Explorer',
    price: 0,
    duration: 'forever',
    weekAccess: Array.from({length: 12}, (_, i) => i + 1), // Weeks 1-12
    maxProjects: 5,
    downloadableContent: false,
    certificateAccess: false,
    prioritySupport: false,
    communityAccess: 'basic',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-600',
    icon: '🌟',
    description: 'Perfect for beginners exploring AI fundamentals',
    features: [
      'Access to first 12 weeks of content',
      'Python fundamentals & basic programming',
      'Interactive coding exercises',
      'Basic discussion features',
      'Progress tracking',
      'Mobile-friendly learning'
    ],
    benefits: [
      {
        title: 'Solid Foundation',
        description: 'Master Python and programming fundamentals that form the backbone of AI development',
        icon: '🐍'
      },
      {
        title: 'Hands-on Practice',
        description: 'Interactive exercises and real coding challenges to build practical skills',
        icon: '💻'
      },
      {
        title: 'Learning Tools',
        description: 'Access to discussion features and self-paced learning resources',
        icon: '📚'
      }
    ]
  },
  {
    id: 'intermediate',
    name: 'AI Developer',
    price: 197,
    duration: 'one-time',
    weekAccess: Array.from({length: 28}, (_, i) => i + 1), // Weeks 1-28
    maxProjects: 25,
    downloadableContent: true,
    certificateAccess: true,
    prioritySupport: false,
    communityAccess: 'premium',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🚀',
    popular: true,
    description: 'Comprehensive full-stack development with data science foundations',
    features: [
      'Everything in Free Explorer',
      'Web development with JavaScript & React',
      'Data science with NumPy & Pandas',
      'API development and databases',
      'Portfolio-worthy projects',
      'Downloadable resources',
      'Course completion certificate',
      'Enhanced discussion features'
    ],
    benefits: [
      {
        title: 'Full-Stack Skills',
        description: 'Build complete web applications and understand the entire development stack',
        icon: '🌐'
      },
      {
        title: 'Data Science Foundation',
        description: 'Master data manipulation, visualization, and analysis - essential for AI',
        icon: '📊'
      },
      {
        title: 'Portfolio Projects',
        description: 'Create impressive projects that showcase your skills to employers',
        icon: '🎯'
      },
      {
        title: 'Skill Development',
        description: 'Comprehensive learning path designed for practical skill building',
        icon: '💼'
      }
    ]
  },
  {
    id: 'advanced',
    name: 'AI Engineer',
    price: 497,
    duration: 'one-time',
    weekAccess: Array.from({length: 52}, (_, i) => i + 1), // Weeks 1-52
    maxProjects: 75,
    downloadableContent: true,
    certificateAccess: true,
    prioritySupport: true,
    communityAccess: 'vip',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-600',
    icon: '🧠',
    description: 'Master machine learning, deep learning, and AI development',
    features: [
      'Everything in AI Developer',
      'Advanced machine learning algorithms',
      'Deep learning with TensorFlow/PyTorch',
      'Computer vision and NLP projects',
      'Model deployment and MLOps',
      'Premium discussion features',
      'Advanced certification',
      'Industry-standard practices',
      'Capstone AI projects'
    ],
    benefits: [
      {
        title: 'ML Mastery',
        description: 'Deep understanding of machine learning algorithms and when to use them',
        icon: '🤖'
      },
      {
        title: 'Deep Learning',
        description: 'Build neural networks and understand cutting-edge AI technologies',
        icon: '🧬'
      },
      {
        title: 'Production Skills',
        description: 'Deploy models to production and manage ML workflows like a pro',
        icon: '🚀'
      },
      {
        title: 'Advanced Certification',
        description: 'Comprehensive certification demonstrating advanced AI development skills',
        icon: '🏆'
      }
    ]
  },
  {
    id: 'professional',
    name: 'AI Research Pro',
    price: 997,
    duration: 'one-time',
    weekAccess: Array.from({length: 84}, (_, i) => i + 1), // All weeks 1-84
    maxProjects: 200,
    downloadableContent: true,
    certificateAccess: true,
    prioritySupport: true,
    communityAccess: 'vip',
    color: 'gold',
    gradient: 'from-yellow-500 to-orange-600',
    icon: '👑',
    description: 'Complete AI mastery - from research to industry leadership',
    features: [
      'Complete 84-week curriculum',
      'Advanced AI research topics',
      'Transformer models and LLMs',
      'AI system design and architecture',
      'Leadership and business skills',
      'Research paper implementation',
      'Advanced discussion features',
      'Lifetime access and updates',
      'Extended learning resources'
    ],
    benefits: [
      {
        title: 'Research Expertise',
        description: 'Implement cutting-edge research papers and contribute to AI advancement',
        icon: '🔬'
      },
      {
        title: 'System Architecture',
        description: 'Design and build scalable AI systems for enterprise applications',
        icon: '🏗️'
      },
      {
        title: 'Leadership Skills',
        description: 'Lead AI teams and drive innovation in your organization',
        icon: '👨‍💼'
      },
      {
        title: 'Lifetime Learning',
        description: 'Stay current with lifetime access to new content and industry updates',
        icon: '♾️'
      }
    ]
  }
];

interface SubscriptionState {
  currentSubscription: UserSubscription;
  availableTiers: SubscriptionTier[];
  paymentHistory: PaymentDetails[];
  
  // UI state
  showUpgradeModal: boolean;
  selectedTier: SubscriptionTier['id'] | null;
  isProcessingPayment: boolean;
  
  // Actions
  initializeUser: (userId: string) => void;
  upgradeTier: (targetTier: SubscriptionTier['id'], paymentDetails: PaymentDetails) => void;
  checkAccess: (weekNumber: number) => boolean;
  getAccessibleWeeks: () => number[];
  canAccessLesson: (lessonId: string) => { allowed: boolean; reason?: string };
  trackUsage: (action: 'lesson_completed' | 'project_submitted' | 'assessment_taken') => void;
  
  // Analytics
  getUsageStats: () => any;
  getRecommendations: () => any;
}

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set, get) => ({
      currentSubscription: {
        userId: '',
        currentTier: 'free',
        isActive: true,
        totalSpent: 0,
        upgradeHistory: [],
        accessLimits: {
          weeklyLessons: 10,
          monthlyProjects: 2,
          assessmentRetries: 3
        }
      },
      
      availableTiers: SUBSCRIPTION_TIERS,
      paymentHistory: [],
      
      showUpgradeModal: false,
      selectedTier: null,
      isProcessingPayment: false,
      
      // Actions
      initializeUser: (userId: string) => {
        set((state) => ({
          currentSubscription: {
            ...state.currentSubscription,
            userId
          }
        }));
      },
      
      upgradeTier: (targetTier: SubscriptionTier['id'], paymentDetails: PaymentDetails) => {
        set((state) => {
          const newTier = SUBSCRIPTION_TIERS.find(t => t.id === targetTier);
          if (!newTier || paymentDetails.status !== 'completed') return state;
          
          const upgradeRecord = {
            fromTier: state.currentSubscription.currentTier,
            toTier: targetTier,
            date: new Date(),
            amount: paymentDetails.amount
          };
          
          return {
            currentSubscription: {
              ...state.currentSubscription,
              currentTier: targetTier,
              purchaseDate: new Date(),
              totalSpent: state.currentSubscription.totalSpent + paymentDetails.amount,
              upgradeHistory: [...state.currentSubscription.upgradeHistory, upgradeRecord]
            },
            paymentHistory: [...state.paymentHistory, paymentDetails],
            showUpgradeModal: false,
            selectedTier: null,
            isProcessingPayment: false
          };
        });
      },
      
      checkAccess: (weekNumber: number) => {
        const { currentSubscription, availableTiers } = get();
        const userTier = availableTiers.find(t => t.id === currentSubscription.currentTier);
        return userTier ? userTier.weekAccess.includes(weekNumber) : false;
      },
      
      getAccessibleWeeks: () => {
        const { currentSubscription, availableTiers } = get();
        const userTier = availableTiers.find(t => t.id === currentSubscription.currentTier);
        return userTier ? userTier.weekAccess : [1];
      },
      
      canAccessLesson: (lessonId: string) => {
        const weekNumber = parseInt(lessonId.replace('w', '').split('-')[0]);
        const hasAccess = get().checkAccess(weekNumber);
        
        if (!hasAccess) {
          const { currentSubscription, availableTiers } = get();
          const currentTier = availableTiers.find(t => t.id === currentSubscription.currentTier);
          const requiredTier = availableTiers.find(t => t.weekAccess.includes(weekNumber));
          
          return {
            allowed: false,
            reason: `This lesson requires ${requiredTier?.name || 'a higher tier'} subscription. You currently have ${currentTier?.name || 'Free'} access.`
          };
        }
        
        return { allowed: true };
      },
      
      trackUsage: (action: string) => {
        // Track usage for analytics and limits
        console.log(`Tracked usage: ${action}`);
        // This would integrate with analytics system
      },
      
      getUsageStats: () => {
        const { currentSubscription, paymentHistory } = get();
        return {
          currentTier: currentSubscription.currentTier,
          totalSpent: currentSubscription.totalSpent,
          upgradeHistory: currentSubscription.upgradeHistory,
          paymentCount: paymentHistory.length,
          memberSince: currentSubscription.purchaseDate || new Date()
        };
      },
      
      getRecommendations: () => {
        const { currentSubscription, availableTiers } = get();
        const currentTierIndex = availableTiers.findIndex(t => t.id === currentSubscription.currentTier);
        const nextTier = availableTiers[currentTierIndex + 1];
        
        if (!nextTier) return null;
        
        return {
          suggestedTier: nextTier,
          benefits: nextTier.benefits,
          priceIncrease: nextTier.price - (availableTiers[currentTierIndex].price || 0),
          additionalWeeks: nextTier.weekAccess.length - availableTiers[currentTierIndex].weekAccess.length
        };
      }
    }),
    {
      name: 'aihero-subscription',
      version: 1
    }
  )
);

// Helper functions for subscription management
export const formatPrice = (price: number): string => {
  if (price === 0) return 'Free';
  return `$${price}`;
};

export const getTierColor = (tierId: SubscriptionTier['id']): string => {
  const tier = SUBSCRIPTION_TIERS.find(t => t.id === tierId);
  return tier ? tier.color : 'gray';
};

export const getTierGradient = (tierId: SubscriptionTier['id']): string => {
  const tier = SUBSCRIPTION_TIERS.find(t => t.id === tierId);
  return tier ? tier.gradient : 'from-gray-500 to-gray-600';
};

export const shouldShowUpgradePrompt = (currentTier: SubscriptionTier['id'], targetWeek: number): boolean => {
  const tier = SUBSCRIPTION_TIERS.find(t => t.id === currentTier);
  if (!tier) return true;
  
  return !tier.weekAccess.includes(targetWeek);
};

export const getNextTierForWeek = (weekNumber: number): SubscriptionTier | null => {
  return SUBSCRIPTION_TIERS.find(tier => tier.weekAccess.includes(weekNumber)) || null;
};

export default {
  SUBSCRIPTION_TIERS,
  useSubscriptionStore,
  formatPrice,
  getTierColor,
  getTierGradient,
  shouldShowUpgradePrompt,
  getNextTierForWeek
};
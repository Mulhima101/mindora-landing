import React, { useState, useEffect } from 'react';
import { 
  Heart, Shield, Sparkles, Moon, Brain, ArrowRight, 
  Menu, X, CheckCircle, Mail, Phone, Zap, Users, 
  TrendingUp, Clock, Lock, Smile, Target, MessageCircle,
  Star, Award, Activity
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mindora
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('vision')} 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Get Started
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('vision')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-center font-semibold shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white border border-purple-200 px-5 py-2.5 rounded-full mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">AI-Powered Emotional Wellness Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Your Safe Space to
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Release & Heal
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Express your emotions privately with an empathetic AI companion. Get 24/7 support, coping techniques, and personalized guidance without judgment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto group"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                Learn More
              </button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-purple-600" />
                <span className="font-medium">100% Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Secure & Anonymous</span>
              </div>
            </div>
          </div>

          {/* Chat Demo */}
          <div className="mt-20 relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-sm border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-5 shadow-sm">
                      <p className="text-gray-800 leading-relaxed">I'm feeling really overwhelmed with work stress and can't seem to find balance...</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-2 mt-1 block">Just now</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl rounded-tl-sm p-5 border border-purple-100 shadow-sm">
                      <p className="text-gray-800 leading-relaxed mb-3">I hear you, and what you're experiencing is valid. Feeling overwhelmed is a natural response to stress. Let's work through this together.</p>
                      <p className="text-gray-700 leading-relaxed">Would you like to try a quick 2-minute breathing exercise, or would you prefer to talk more about what's been weighing on you?</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-2 mt-1 block">Just now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why People Hesitate to Seek Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stress and anxiety are universal, but traditional barriers prevent people from getting the support they need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold text-red-600 mb-3">60%</div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">Fear judgment when sharing their feelings with others</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold text-purple-600 mb-3">$200+</div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">Average cost per therapy session—a barrier for many</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold text-blue-600 mb-3">3-6</div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">Weeks average wait time to see a mental health professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Mindora?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your personal AI companion designed for complete emotional wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Private & Anonymous",
                description: "Your conversations are completely confidential. End-to-end encrypted with zero data retention. No judgment, no records—just pure support.",
                color: "from-blue-600 to-cyan-600",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                icon: Heart,
                title: "Empathetic AI Companion",
                description: "Advanced natural language AI trained on emotional intelligence frameworks to provide compassionate, human-like responses.",
                color: "from-pink-600 to-rose-600",
                bgColor: "from-pink-50 to-rose-50"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Stress doesn't follow a schedule. Access support instantly, anytime, anywhere—no appointments, no waiting rooms.",
                color: "from-indigo-600 to-purple-600",
                bgColor: "from-indigo-50 to-purple-50"
              },
              {
                icon: Sparkles,
                title: "Guided Coping Techniques",
                description: "Evidence-based breathing exercises, mindfulness practices, and cognitive behavioral strategies personalized to your needs.",
                color: "from-yellow-600 to-orange-600",
                bgColor: "from-yellow-50 to-orange-50"
              },
              {
                icon: Brain,
                title: "Personalized Support",
                description: "AI learns your unique emotional patterns and preferences, providing increasingly tailored guidance over time.",
                color: "from-purple-600 to-pink-600",
                bgColor: "from-purple-50 to-pink-50"
              },
              {
                icon: Smile,
                title: "No Stigma, No Barriers",
                description: "Access professional-grade mental wellness support without the cost, stigma, or barriers of traditional therapy.",
                color: "from-green-600 to-emerald-600",
                bgColor: "from-green-50 to-emerald-50"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br ${feature.bgColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Mindora Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, intuitive, and designed for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Open & Express", 
                desc: "Share your thoughts, feelings, and concerns freely in a judgment-free space",
                icon: MessageCircle,
                color: "from-blue-600 to-cyan-600"
              },
              { 
                step: "2", 
                title: "AI Listens Deeply", 
                desc: "Our empathetic AI understands context and responds with genuine care",
                icon: Brain,
                color: "from-purple-600 to-pink-600"
              },
              { 
                step: "3", 
                title: "Get Expert Support", 
                desc: "Receive personalized coping strategies and evidence-based techniques",
                icon: Zap,
                color: "from-yellow-600 to-orange-600"
              },
              { 
                step: "4", 
                title: "Feel Better", 
                desc: "Experience relief, clarity, and emotional balance through consistent support",
                icon: Heart,
                color: "from-pink-600 to-rose-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {item.step}
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="mb-4">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A massive, underserved market with exponential growth potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-extrabold text-purple-600 mb-3">$280B</div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">Global mental health market by 2027</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center border border-pink-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-3">970M</div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">People worldwide with mental health conditions</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center border border-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-3">16.5%</div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">Expected annual market growth rate (CAGR)</p>
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to global mental wellness platform
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              { 
                phase: "Phase 1 - Q1 2025", 
                title: "MVP Launch", 
                items: [
                  "Web-based AI chatbot with core emotional support",
                  "Privacy-first architecture with end-to-end encryption", 
                  "Basic coping techniques library (breathing, mindfulness)"
                ],
                icon: Zap,
                color: "from-green-600 to-emerald-600",
                status: "In Development"
              },
              { 
                phase: "Phase 2 - Q2 2025", 
                title: "Mobile Experience", 
                items: [
                  "Native iOS & Android applications",
                  "Push notifications for wellness check-ins", 
                  "Offline mode with local coping resources",
                  "Voice-to-text emotional journaling"
                ],
                icon: Moon,
                color: "from-blue-600 to-cyan-600",
                status: "Planned"
              },
              { 
                phase: "Phase 3 - Q3 2025", 
                title: "Advanced AI & Analytics", 
                items: [
                  "Emotion pattern detection and analysis",
                  "Personalized wellness action plans", 
                  "Integration with health tracking wearables",
                  "Proactive mental health insights"
                ],
                icon: Brain,
                color: "from-purple-600 to-pink-600",
                status: "Planned"
              },
              { 
                phase: "Phase 4 - Q4 2025", 
                title: "Global Expansion", 
                items: [
                  "Multilingual support (15+ languages)",
                  "Optional anonymous peer support communities", 
                  "Enterprise B2B wellness programs",
                  "Integration with telehealth platforms"
                ],
                icon: TrendingUp,
                color: "from-orange-600 to-red-600",
                status: "Vision"
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <phase.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-purple-600 uppercase tracking-wider">{phase.phase}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    </div>
                  </div>
                  <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                    phase.status === 'In Development' 
                      ? 'bg-green-100 text-green-700' 
                      : phase.status === 'Planned'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-purple-100">
            <Target className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're seeking strategic partners and investors who share our vision of making mental wellness accessible to everyone, everywhere.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join Us in Revolutionizing Mental Wellness
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            We're seeking strategic investors and partners to bring this vision to life. Join us in making mental wellness support accessible to millions.
          </p>

          {submitted ? (
            <div className="bg-white rounded-3xl p-10 max-w-md mx-auto transform animate-fadeIn shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600 text-lg">We've received your information and will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-sm font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-purple-100 text-sm mt-4">Join 5,000+ people on the waitlist. No spam, ever.</p>
            </form>
          )}

          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-purple-100 text-lg mb-6 font-semibold">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
              <a 
                href="mailto:hello@mindora.ai" 
                className="flex items-center space-x-3 hover:text-purple-200 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">muhammedhuminhaj@gmail.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center space-x-3 hover:text-purple-200 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+94 77 818 1851
</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description - Centered on mobile */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Mindora</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                Building the world's most accessible AI-powered mental wellness platform. Everyone deserves a safe space to heal.
              </p>
            </div>

            {/* Product Links - Centered on mobile */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors duration-200 text-gray-400">Features</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors duration-200 text-gray-400">How It Works</button></li>
                <li><button onClick={() => scrollToSection('vision')} className="hover:text-white transition-colors duration-200 text-gray-400">Roadmap</button></li>
              </ul>
            </div>

            {/* Company Links - Centered on mobile */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200 text-gray-400">About Us</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-200 text-gray-400">Contact</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Centered on mobile */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
              <p className="text-sm text-gray-400">&copy; 2025 Mindora. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-200 text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200 text-gray-400">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
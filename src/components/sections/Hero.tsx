import React from 'react';
import { ArrowRight, Activity, Clock, Brain, Shield } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
  

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Healthcare with AI
            </h1>
            <p className="text-xl text-gray-600">
              Empowering 200+ hospitals with intelligent patient care management, 
              reducing wait times and improving diagnosis accuracy through advanced AI.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src="/images/dash.webp" 
              alt="Healthcare Dashboard" 
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <StatsCard 
            icon={<Clock className="w-8 h-8 text-blue-600" />}
            title="40% Reduced Wait Times"
            description="Optimizing patient flow and resource allocation"
          />
          <StatsCard 
            icon={<Brain className="w-8 h-8 text-blue-600" />}
            title="35% Better Diagnosis"
            description="AI-powered clinical decision support"
          />
          <StatsCard 
            icon={<Shield className="w-8 h-8 text-blue-600" />}
            title="HIPAA Compliant"
            description="Enterprise-grade security and privacy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
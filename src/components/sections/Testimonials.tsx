import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "PatientCare AI has revolutionized how we manage patient care. The reduction in wait times and improved diagnosis accuracy has been remarkable.",
      author: "Dr. Sarah Chen",
      role: "Chief of Medicine",
      hospital: "Metropolitan General Hospital",
      rating: 5
    },
    {
      quote: "The AI-powered diagnosis support has been invaluable in helping our staff make more accurate and timely decisions. A game-changer for our hospital.",
      author: "Dr. James Wilson",
      role: "Director of Operations",
      hospital: "Central Health System",
      rating: 5
    },
    {
      quote: "Implementation was smooth and the results were immediate. Our patient satisfaction scores have improved significantly since adopting PatientCare AI.",
      author: "Emily Rodriguez",
      role: "Hospital Administrator",
      hospital: "Valley Medical Center",
      rating: 5
    }
  ];

  return (
    <div className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Healthcare Providers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what healthcare professionals are saying about their experience with PatientCare AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative hover:shadow-xl transition duration-300"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-6xl text-blue-200 font-serif">"</div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
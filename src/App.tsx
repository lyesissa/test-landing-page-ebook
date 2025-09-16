import React, { useState } from 'react';
import { CheckCircle, Download, Mail, Star, User } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service
    setIsSubscribed(true);
    setEmail('');
    setName('');
  };

  const TestimonialCard = ({ name, title, content, rating }: { name: string, title: string, content: string, rating: number }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <User className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover the Real
                <span className="text-orange-400"> Science Behind Beauty</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Debunk the myths and discover what really goes into your beauty routine with evidence-based insights from Dr. Michelle Wong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Download className="w-5 h-5 inline mr-2" />
                  Download Now
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-2xl opacity-30 scale-110"></div>
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/public/image.png" 
                    alt="The Science of Beauty book cover" 
                    className="w-80 h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook Details Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Your Complete Guide to <span className="text-blue-600">Beauty Science</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "The Science of Beauty" cuts through marketing hype and gives you the scientific facts about skincare, cosmetics, and beauty treatments. Learn what really works and what's just clever marketing.
            </p>
          </div>

          <div className="bg-blue-50 p-8 lg:p-12 rounded-2xl shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Discover Inside:</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                "The truth about expensive vs. drugstore skincare products",
                "How to read ingredient lists like a cosmetic chemist",
                "Which beauty trends are backed by science (and which aren't)",
                "The real facts about anti-aging ingredients and their effectiveness",
                "How your skin actually works and what it needs to stay healthy",
                "Common beauty myths debunked with scientific evidence",
                "How to build an effective skincare routine based on your skin type",
                "The science behind popular beauty treatments and procedures"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-48 h-48 rounded-full mx-auto flex items-center justify-center">
                  <User className="w-24 h-24 text-white" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Guide</h2>
                <h3 className="text-xl text-blue-600 font-semibold mb-4">Dr. Michelle Wong, Cosmetic Chemist</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dr. Michelle Wong is a cosmetic chemist with a PhD in chemistry and the founder of Lab Muffin Beauty Science. She's dedicated to making beauty science accessible to everyone through evidence-based content.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With millions of followers across social media platforms, Michelle is known for her ability to translate complex scientific concepts into practical beauty advice that actually works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
            What Readers Are Saying
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              title="Beauty Enthusiast"
              content="This book completely changed how I approach skincare. I finally understand what ingredients actually work and why!"
              rating={5}
            />
            <TestimonialCard
              name="Emma Davis"
              title="Dermatology Student"
              content="Dr. Wong's explanations are so clear and backed by real science. This should be required reading for anyone interested in beauty."
              rating={5}
            />
            <TestimonialCard
              name="Lisa Chen"
              title="Skincare Blogger"
              content="Finally, a beauty book that doesn't just repeat marketing claims. The scientific approach is refreshing and incredibly helpful."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join the community of Beauty Science enthusiast
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get exclusive beauty science insights, myth-busting content, and evidence-based skincare tips delivered to your inbox every week.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                >
                  Subscribe & Get Free Ebook
                </button>
              </form>
            ) : (
              <div className="bg-green-500 text-white p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Thank you for subscribing!</p>
                <p>Check your email for your free ebook download link.</p>
              </div>
            )}
            
            <p className="text-blue-200 text-sm mt-4">
              No spam. Unsubscribe at any time. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 The Science of Beauty. All rights reserved.</p>
          <p className="mt-2">Terms of Service • Privacy Policy • Contact</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
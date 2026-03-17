import React, { useState } from "react";
import { Send } from "lucide-react";

export function Catering() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or save to a database
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-green text-white py-24 lg:py-32 border-b-8 border-wagon-mustard overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-md">
            Bring the Wagon <span className="text-wagon-mustard block mt-2">to the Party</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            From office lunches to community events, Wiener Wagon catering adds flavor, fun, and a little local legend to the mix.
          </p>
        </div>
      </section>

      <section className="py-24 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info */}
            <div className="space-y-16">
              
              {/* Why book the wagon */}
              <div className="space-y-8">
                <h2 className="font-display text-4xl text-wagon-red border-b-4 border-wagon-mustard pb-4 inline-block">Why Book the Wagon</h2>
                <ul className="space-y-6 text-lg font-medium text-wagon-text/80">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-wagon-green text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">✓</div>
                    <span>Memorable and unique</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-wagon-green text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">✓</div>
                    <span>Easy crowd-pleaser</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-wagon-green text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">✓</div>
                    <span>Great for casual celebrations and events</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-wagon-green text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">✓</div>
                    <span>A fun local touch people will actually talk about</span>
                  </li>
                </ul>
              </div>

              {/* Ideal event types */}
              <div className="space-y-8 bg-wagon-bg-alt p-10 rounded-[3rem] border-4 border-wagon-green/20 shadow-md">
                <h2 className="font-display text-3xl text-wagon-green text-center">Ideal Event Types</h2>
                <div className="grid grid-cols-2 gap-4 text-center font-medium text-wagon-text/80">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-wagon-bg-alt">Office lunches</div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-wagon-bg-alt">Private parties</div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-wagon-bg-alt">Community events</div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-wagon-bg-alt">Weddings</div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-wagon-bg-alt">School gatherings</div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-wagon-bg-alt">Festival appearances</div>
                </div>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-xl border-t-8 border-wagon-red relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-wagon-mustard rounded-full flex items-center justify-center shadow-lg transform rotate-12 border-4 border-white">
                <span className="font-display text-3xl text-wagon-text leading-none text-center">Let's<br/>Roll</span>
              </div>
              
              <h2 className="font-display text-4xl text-wagon-green mb-8">Inquiry Form</h2>
              
              {isSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-24 h-24 bg-wagon-green text-white rounded-full flex items-center justify-center mx-auto shadow-lg mb-8">
                    <span className="text-4xl">✓</span>
                  </div>
                  <h3 className="font-display text-3xl text-wagon-text">Thanks for reaching out!</h3>
                  <p className="text-lg text-wagon-text/80 font-medium">
                    We've received your inquiry and will be in touch soon to discuss bringing the wagon to your event.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-wagon-red font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-bold text-wagon-text">Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-bold text-wagon-text">Email</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-bold text-wagon-text">Phone</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="date" className="block font-bold text-wagon-text">Event Date</label>
                      <input type="date" id="date" className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="location" className="block font-bold text-wagon-text">Event Location</label>
                      <input type="text" id="location" className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="block font-bold text-wagon-text">Estimated Guest Count</label>
                      <input type="number" id="guests" min="1" className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="block font-bold text-wagon-text">Tell us about your event</label>
                    <textarea id="details" rows={4} required className="w-full px-4 py-3 rounded-xl border-2 border-wagon-bg-alt focus:border-wagon-green focus:ring-0 transition-colors bg-wagon-bg resize-none"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-wagon-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2 mt-8"
                  >
                    Send Inquiry <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Closing Copy */}
          <div className="mt-24 text-center max-w-3xl mx-auto border-t-2 border-wagon-green/20 pt-16">
            <p className="font-display text-3xl text-wagon-green leading-relaxed">
              When you want something easy, fun, and full of personality, the wagon is ready to roll.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

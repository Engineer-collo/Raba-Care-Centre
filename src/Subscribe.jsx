import React, { useState } from "react";
import { Mail, Check, Bell, Heart } from "lucide-react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // Typically, you’d send this to your backend here
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  const benefits = [
    "Health tips and wellness advice",
    "Updates on new services and treatments",
    "Community health event notifications",
    "Seasonal health reminders and screenings",
    "Special offers and discounts",
  ];

  return (
    <section
      id="subscription"
      className="pt-12 pb-6 section-padding bg-gradient-to-br from-amber-50 to-maroon-50 scroll-mt-[100px]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-amber-400 rounded-full p-3 w-fit mx-auto mb-6">
              <Mail className="h-8 w-8 text-maroon-900" />
            </div>
            <h2 className="text-4xl font-bold text-maroon-900 mb-6 section-title">Stay Connected with Raba Care Center</h2>
            <p className="section-subtitle">
              Subscribe to our newsletter and never miss important health
              updates, wellness tips, and news about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-maroon-900 mb-6 flex items-center">
                <Bell className="h-5 w-5 text-amber-500 mr-2" />
                What You'll Receive:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-maroon-700" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Privacy block */}
              <div className="bg-white rounded-lg p-6 mt-8 shadow-md">
                <div className="flex items-center mb-3">
                  <Heart className="h-5 w-5 text-amber-500 mr-2" />
                  <h4 className="font-semibold text-maroon-900">
                    Privacy Promise
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  We respect your privacy and will never share your information
                  with third parties. You can unsubscribe at any time with just
                  one click.
                </p>
              </div>
            </div>

            {/* Subscription Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {!subscribed ? (
                  <>
                    <h3 className="text-2xl font-bold text-maroon-900 mb-6 text-center">
                      Join Our Newsletter
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className=" form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className=" border-2 pl-2 ml-2 border-customPurple rounded form-input"
                          required
                        />
                      </div>

                      <div className="flex items-start">
                      <input
  type="checkbox"
  id="consent"
  className="mt-1 mr-3 accent-customPurple"
  required
/>

                        <label
                          htmlFor="consent"
                          className="text-sm text-muted-foreground"
                        >
                          I agree to receive healthcare tips, updates, and
                          promotional emails from Raba Care Center. I understand
                          I can unsubscribe at any time.
                        </label>
                      </div>

                      <button type="submit" className=" bg-customPurple text-white rounded-xl p-2 btn-primary w-full">
                        Subscribe to Newsletter
                      </button>
                    </form>

                    <p className="text-center text-xs text-muted-foreground mt-4">
                      By subscribing, you agree to our                 <a
                  href="privacy"
                  className="text-maroon-300 hover:text-amber-400 text-xsm transition-colors duration-300"
                >
                  Privacy Policy
                </a> and                 <a
                  href="terms"
                  className="text-maroon-300 hover:text-amber-400 text-xsm transition-colors duration-300"
                >
                  Terms of Service
                </a>
.
                    </p>
                  </>
                ) : (
                  <div className="text-center animate-scale-in">
                    <div className="bg-amber-100 rounded-full p-4 w-fit mx-auto mb-6">
                      <Check className="h-8 w-8 text-maroon-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-maroon-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      You've successfully subscribed to our newsletter. Check
                      your email for a confirmation message.
                    </p>
                    <button
                      onClick={() => setSubscribed(false)}
                      className="btn-secondary"
                    >
                      Subscribe Another Email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;

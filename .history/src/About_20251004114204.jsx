import React from "react";
import { Heart, Users, Award, Clock } from "lucide-react";
import CoreValues from "./CoreValues";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and dignity, ensuring personalized care that addresses both physical and emotional well-being.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our highly qualified healthcare professionals bring years of experience and continuous education to provide the best possible care.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards of medical care through evidence-based practices and state-of-the-art facilities.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Healthcare emergencies don't wait, and neither do we. Our dedicated team is available around the clock for urgent care needs.",
    },
  ];

  return (
    <section id="about" className="mt-12 pt-12 section-padding bg-white scroll-mt-[100px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maroon-900 section-title">
            About Raba Care Center
          </h2>
          <p className="section-subtitle">
            Dedicated to providing exceptional healthcare services with
            compassion, expertise, <br /> and a commitment to improving lives in our
            community.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-maroon-900 mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to transform healthcare delivery, Raba Care
              Center has been serving our community for over a decade. We
              believe that quality healthcare should be accessible,
              compassionate, and comprehensive.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our journey began with a simple mission: to provide healthcare
              that treats not just the condition, but the whole person. Today,
              we continue to uphold this commitment through innovative
              treatments, personalized care plans, and a team that truly cares.
            </p>

            <div className="bg-amber-50 border-l-4 border-red-900 p-6 rounded-r-lg shadow-md mb-6">
              <h4 className="font-semibold text-maroon-900 mb-2">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To be the most preferred center for comprehensive mental healing services
              </p>
            </div>

            <div className="bg-red-900/85 text-white border-l-4 border-amber-400 p-6 rounded-r-lg shadow-md mb-6">
              <h4 className="font-semibold text-white mb-2">Our Mission</h4>
              <p className="text-gray-200 leading-relaxed">
                We exist to educate society on mental health issues, empowering individuals
                in their wellness journey, challenging mental health stigma and advocating
                for psychotherapy for a healthier society.
              </p>
            </div>

            <CoreValues />
          </div>

          <div className="animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3]">
                <img
                  src="/raba-team.png"
                  alt="Our Care Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="about-card animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <value.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-maroon-900 mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

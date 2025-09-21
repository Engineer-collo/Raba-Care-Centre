import React from "react";

const Services = () => {
  const services = [
    {
      image: "/couple-counselling.png",
      title: "Couple counselling",
      description:
        "Couple counselling provides a safe and supportive space for partners to openly share their thoughts, feelings, and concerns. It helps couples improve communication, resolve conflicts, rebuild trust, and strengthen their emotional connection. Whether you’re experiencing challenges in your relationship, preparing for marriage, or simply want to deepen your bond, couple counselling empowers both partners to understand each other better and work towards a healthier, more fulfilling relationship.",
    },
    {
      image: "/trauma-therapy.png",
      title: "Trauma Therapy",
      description:
        "Trauma therapy provides a safe environment to process painful or distressing experiences. It helps individuals understand the impact of trauma on their thoughts, emotions, and behaviors while guiding them toward healing and resilience. Through proven therapeutic approaches, clients learn coping strategies, rebuild self-confidence, and regain a sense of control and peace in their lives.",
    },
    {
      image: "/teens-mentorship.png",
      title: "Teens Mentorship",
      description:
        "Teen mentorship is designed to guide young people through the challenges of adolescence by providing positive role models, support, and encouragement. It helps teens build confidence, set healthy goals, develop life skills, and make informed decisions. Through mentorship, they gain direction, resilience, and a stronger sense of purpose for their future.",
    },
  ];

  // max length before showing "Learn More"
  const maxLength = 1200;

  return (
    <section
      id="services"
      className="mt-12 pt-12 section-padding bg-gradient-to-br from-maroon-50 to-amber-50 scroll-mt-[100px]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maroon-900 section-title">
            Our Services
          </h2>
          <p className="section-subtitle">
            Comprehensive healthcare services designed to meet all your medical
            needs <br /> with expertise, compassion, and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isLong = service.description.length > maxLength;

            return (
              <div
                key={service.title}
                className="service-card animate-fade-in rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain" // ✅ shows the full image
                  />
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-maroon-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {isLong && (
                    <button className="bg-customPurple text-white rounded-xl px-4 py-2 w-full hover:bg-customPurple/90 transition">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-maroon-900 mb-4">
              Need to Schedule an Appointment?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our scheduling team is ready to help you find the right care at
              the right time. Contact us today to book your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#581616] text-white rounded-xl p-2 btn-primary">
                Book Appointment
              </button>
              <button className="border-2 border-amber-400 text-amber-400 rounded-xl px-4 py-2 hover:bg-amber-400 hover:text-white transition">
                Call +254787530331
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

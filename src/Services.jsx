import React, { useState } from "react";

const Services = () => {
  const services = [
    {
      image: "/marriage-therapy.png",
      title: "Marriage therapy",
      description:
        "Marriage challenges are inevitable, but with the right support, they can become opportunities for growth and rebuilding broken bonds. At Raba Care Center, expert couple therapy helps transform conflicts into meaningful steps toward healing. Rekindle your bond, overcome struggles, and create a healthier, lasting relationship. Let us guide you toward a stronger connection.",
    },
    {
      image: "/family-therapy.png",
      title: "Family Therapy",
      description:
        "Family Therapy is a type of psychotherapy that involves treating multiple family members at the same time, with the goal of improving communication, resolving conflicts, and strengthening relationships. It is based on the idea that family dynamics play a critical role in an individual’s mental health, and that problems in one family member can affect others within the system.",
    },
    {
      image: "/individual-therapy.png",
      title: "Individual Therapy",
      description:
        "This is also known as psychotherapy or counseling, is a form of mental health treatment wherean individual works one-on-one with a trained therapist. The goal of individual therapy is toprovide a supportive and confidential environment in which a person can explore and addressvarious personal issues, emotional difficulties, and challenges",
    }
    ,
    {
      image: "/presentations.png",
      title: "Presentations & Seminars",
      description:
        "These are common formats for sharing information, educating an audience, and facilitatingdiscussion. Whether in a professional, academic, or community setting, effective presentationsand seminars involve careful planning, engaging delivery, and thoughtful interaction with theaudience.",
    },
    {
      image: "/career-guidance.png",
      title: "Career Guidance",
      description:
        "This guidance can assist with selecting a career, choosing an appropriate field of study, making career transitions, or improving skills for career advancement. Career guidance is often provided by career counselors, mentors, coaches, or through online resources, and it aims to align a person’s interests, skills, values, and personality with potential career options.",
    },{
      image: "/online-therapy.png",
      title: "Online Therapy",
      description:
        "This refers to mental health counseling and therapeutic services conducted via the internet, using digital tools such as video calls, phone calls, messaging, or email. This form of therapy provides individuals with greater flexibility and accessibility, allowing them to receive counseling services from the comfort of their own home or any location with internet access. Online therapy is particularly valuable for those who face barriers to in-person therapy, such as geographical location, time constraints, mobility issues, or the desire for anonymity.",
    },{
      image: "/marriage-therapy.png",
      title: "Marriage Counseling",
      description:
        "Every marriage faces challenges, but those hurdles don’t have to define your relationship. With the right tools and guidance, trust can be rebuilt, and bonds can grow even stronger. Let’s work together to navigate the tough times and rediscover the connection that brought you together in the first place",
    },{
      image: "/community-outreaches.png",
      title: "Community Outreaches",
      description:
        "Mental health support should never feel out of reach. Through our Community Outreach Programs, we bring resources, counseling, and education directly to you. Whether it’s in schools, communities, or workplaces, we ensure mental health care is accessible to everyone. Let’s work together to break barriers and foster wellness where it matters most.",
    },{
      image: "/counselling-workshop.png",
      title: "Counseling workshops",
      description:
        "Stress and burnout can take a toll, but you don’t have to face it alone. Our counseling workshops offer practical tools and compassionate guidance to help you regain balance and resilience. Let’s work together to turn challenges into growth and build a healthier, calmer mind. Your journey to wellness starts here.",
    },{
      image: "/mentorship-programe.png",
      title: "Mentorship Program",
      description:
        "Feeling stuck doesn’t have to be permanent. Our mentorship program is designed to guide you through life’s challenges with clarity and confidence. With the support of an experienced mentor, you’ll uncover new perspectives, build resilience, and take meaningful steps toward your goals. Let’s work together to help you thrive on your wellness journey.",
    },{
      image: "/personal-therapy-for-students.png",
      title: "Personal Therapy for students",
      description:
        "Therapeutic services specifically designed to support students in managing their mental, emotional, and psychological well-being. Given the unique challenges that students face—academic pressure, life transitions, relationship issues, and personal identity development—personal therapy can be a vital tool for helping students navigate these experiences in a healthy way.",
    },{
      image: "/group-therapy.png",
      title: "Group Therapy",
      description:
        "Struggling to feel connected as a group? Group therapy can provide a fresh start. Led by a licensed therapist, this counseling experience is designed to foster communication, understanding, and a sense of unity among group members. Whether it's overcoming challenges or just finding better ways to support one another, group therapy offers the tools you need to rebuild stronger connections together.",
    },{
      image: "/couple-counselling.png",
      title: "Couple Counseling",
      description:
        "Every relationship faces its ups and downs, but with the right support, couples can rediscover their connection. At Raba Care Center, our couple counseling sessions are designed to help you and your partner rebuild trust, improve communication, and strengthen your bond. Let us help guide you toward a healthier, more fulfilling relationship.",
    },{
      image: "/trauma-therapy.png",
      title: "Trauma Therapy",
      description:
        "Healing after loss can be overwhelming, but you don't have to do it alone. Through our compassionate approach, we guide you on a journey to rebuild and find peace. Let us help you process your grief and discover strength as you move forward with care and support.",
    }
    ,{
      image: "/child-therapy.png",
      title: "Adolescent/Child Therapy",
      description:
        "Children and teenagers often face unique challenges as they grow—ranging from academic pressures, family transitions, peer influence, emotional struggles, and even the effects of trauma. At Raba Care Center, Child and Adolescent Therapy provides a safe and supportive space where young people can freely express themselves, understand their emotions, and build resilience.",
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const maxLength = 220; // chars before truncating

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="mt-12 pt-12 bg-gradient-to-br from-maroon-50 to-amber-50 scroll-mt-[100px]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maroon-900">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Comprehensive mental health and counseling services <br />
            delivered with compassion, expertise, and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const textToShow =
              service.description.length > maxLength && !isExpanded
                ? service.description.slice(0, maxLength) + "..."
                : service.description;

            return (
              <div
                key={service.title}
                className="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col transform hover:-translate-y-1 transition duration-300"
              >
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-contain bg-amber-50"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-maroon-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {textToShow}
                  </p>

                  {service.description.length > maxLength && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="bg-customPurple text-white rounded-xl px-4 py-2 hover:bg-customPurple/90 transition"
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-maroon-900 mb-4">
              Need to Schedule an Appointment?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our scheduling team is ready to help you find the right care at
              the right time. Contact us today to book your session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#581616] text-white rounded-xl px-6 py-3 shadow hover:bg-[#451010] transition">
                Book Appointment
              </button>
              <a
                href="tel:+254787530331"
                className="border-2 border-amber-400 text-amber-400 rounded-xl px-6 py-3 hover:bg-amber-400 hover:text-white transition"
              >
                Call +254 787 530 331
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

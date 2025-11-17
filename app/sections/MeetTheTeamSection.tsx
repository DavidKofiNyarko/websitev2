"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    name: "Michael Farid Conway",
    title: "Founder & CEO",
    image: "/team/farid.png",
  },
  {
    name: "David Nyarko",
    title: "Chief Technology Officer (CTO)",
    image: "/team/David.png",
  },
  // {
  //   name: "Michael  Anderson",
  //   title: "Lead Engineer (Engineering)",
  //   image: "/team/mike-2.png",
  // },
  {
    name: "Ewuradwoa Koranteng",
    title: "Investment Manager",
    image: "/team/Ewuradjoa.png",
  },
  {
    name: "Blaise Quainoo",
    title: "HR & Administrative Manager",
    image: "/team/Blaise.png",
  },
  {
    name: "Davida Bonney",
    title: "Marketing Manager",
    image: "/team/Davida.png",
  },
  {
    name: "Marlon Bamfo",
    title: "Finance Manager",
    image: "/team/Marlon.png",
  },
  {
    name: "Gideon Gameli",
    title: "Compliance Manager",
    image: "/team/Gideon.png",
  },
  {
    name: "Wilhelmina Augustt",
    title: "Legal Manager",
    image: "/team/Whilemina.png",
  },
];

export default function MeetTheTeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate heading and intro - blending with Core Values
      if (headingRef.current && introRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });

        tl.from(headingRef.current, {
          opacity: 0,
          y: 40,
          x: -20,
          duration: 1.2,
          ease: "power3.out",
        }).from(
          introRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.8"
        );
      }

      // Animate team members - flowing cascade
      if (teamRef.current) {
        const members = Array.from(teamRef.current.children);
        gsap.from(members, {
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotation: -2,
          duration: 1.2,
          ease: "power3.out",
          stagger: {
            amount: 0.9,
            from: "start",
          },
        });
      }

      // Animate CTA section - final flourish
      if (ctaRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        tl.from(ctaRef.current.children, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 1.1,
          ease: "power3.out",
          stagger: {
            amount: 0.4,
            from: "start",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
          >
            Meet the Team
          </h2>
          <p
            ref={introRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed"
          >
            We&apos;re a diverse team of strategists, finance experts, and
            innovators driven by a shared mission, to make agriculture a
            profitable, transparent, and inclusive industry for all.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={teamRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 md:w-56 md:h-56 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain grayscale "
                />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-1 text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="text-left max-w-3xl flex flex-col items-start"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-kulim-park text-[#1C442A]">
            Passionate About Agriculture and Innovation?
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            Join a mission-driven team shaping the future of agri-investment in
            Africa. Whether you&apos;re a farmer, technologist, investor, or
            creative thinker, there&apos;s a place for you at AgriPath.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a
              href="https://app.agripath.co/signin"
              className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center"
            >
              Join Our Team
            </a>
            <a
              href="https://app.agripath.co/signin"
              className="px-8 py-3.5 border-2 border-[#1C442A] text-[#1C442A] font-semibold rounded-full bg-transparent hover:bg-[#1C442A] hover:text-white hover:shadow-lg transition-all duration-300 ease-out text-center"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

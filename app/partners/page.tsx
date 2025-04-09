"use client";

import { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import { TeamMember, getAllTeamMembers } from "@/sanity/lib/queries";

import Marquee from "react-fast-marquee";

import background from "@/public/Partnets/Phon.jpg";
import Link from "next/link";
import TextWrapper from "@/components/TextWrapper";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [partners, setPartners] = useState<TeamMember[]>([]);
  const [otherMembers, setOtherMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to shuffle an array (Fisher-Yates shuffle algorithm)
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const scrollToPartner = (id: string) => {
    const partner = document.getElementById(id);
    if (partner) {
      partner.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await getAllTeamMembers();

        // Split team members into partners and other members
        const partners = data.filter((member) =>
          member.position.toLowerCase().includes("партнёр")
        );

        const others = data.filter(
          (member) => !member.position.toLowerCase().includes("партнёр")
        );

        setTeamMembers(data);
        setPartners(partners);
        setOtherMembers(others);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden text-white relative bg-black mb-80">
      <Navbar />
      <Image
        src={background}
        alt="Background"
        width={0}
        height={0}
        unoptimized
        className="fixed w-[335.7vw] h-[299.4vw] -top-[6.4vw] -left-[] md:w-[109.9vw] md:h-[148.2vw] md:-top-[7.9vw] md:-left-[11.3vw] lg:w-[237.9vw] lg:h-[133.9vw] lg:-left-[7.9vw] lg:-top-[30.9vw]"
      />
      <Image
        src={background}
        alt="Background"
        width={0}
        height={0}
        unoptimized
        className="fixed md:w-[82.1vw] md:h-[146.4vw] md:-top-[7.9vw] md:left-[17.8vw] lg:w-[237.9vw] lg:h-[157.5vw] lg:left-[24.9vw] lg:-top-[55.8vw]"
      />

      <Marquee className="mt-16 md:mt-[315px] !hidden lg:!flex" pauseOnClick>
        {[...Array(10)].map((_, i) => {
          const shuffledMembers = shuffleArray(teamMembers);
          return shuffledMembers.map(
            (member) =>
              member.images.length > 0 && (
                <div
                  key={`set-${i}-${member.id.current}`}
                  className="w-full h-auto flex-none max-h-[220px] md:max-h-[319px] lg:max-h-[360px] xl:max-h-[514px]"
                  onClick={() =>
                    scrollToPartner(member.name.toLowerCase().split(" ")[0])
                  }
                >
                  <Image
                    src={urlFor(member.images[1]).url()}
                    alt={`${member.name}`}
                    width={300}
                    height={500}
                    className="h-auto w-full object-contain"
                  />
                </div>
              )
          );
        })}
      </Marquee>

      <div className="flex flex-col items-center text-center mt-[100px] md:mt-[192px] lg:mt-[72px] lg:px-[10vw] z-50">
        <TextWrapper>
          <p className="bold-text mb-[53px]">КОМАНДА</p>
        </TextWrapper>

        {/* Partners Row (with big text) */}
        <div className="lg:flex lg:flex-row lg:gap-8 md:mt-12 lg:mt-3 flex flex-col items-center w-full lg:flex-wrap lg:justify-center z-50 px-2.5 gap-6">
          {partners.map((partner, index) => (
            <div
              className="flex flex-row max-md:w-full md:items-end md:gap-3 cursor-pointer"
              key={partner.id.current}
              onClick={() =>
                scrollToPartner(partner.name.toLowerCase().split(" ")[0])
              }
            >
              <p className="bold-text leading-[16px]">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-3 w-full items-center md:flex-row">
                {partner.teamBlockImage && (
                  <Image
                    src={urlFor(partner.teamBlockImage).url()}
                    alt={partner.name}
                    width={300}
                    height={300}
                    className="h-auto w-[60px] md:h-[24px] md:w-auto"
                  />
                )}
                <div className="flex flex-col gap-2 md:flex-row md:items-end">
                  <p className="big-text underline underline-extension-2 hover:no-underline">
                    {partner.name}
                  </p>
                  <p className="bold-text text-[#5D5D5D]">{partner.position}</p>
                </div>
              </div>
              <p className="bold-text leading-[16px] md:hidden">
                {(index + 1).toString().padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:flex gap-2 md:gap-3 md:mt-9 lg:flex-row lg:gap-4 lg:mt-[48px] flex flex-row items-center mt-10 flex-wrap justify-center">
          {otherMembers.map((member, index) => (
            <div
              className="flex flex-row gap-1 md:gap-3 items-end mt-2 uppercase bold-text cursor-pointer"
              key={index}
              onClick={() =>
                scrollToPartner(member.name.toLowerCase().split(" ")[0])
              }
            >
              <p>{(partners.length + index + 1).toString().padStart(2, "0")}</p>
              {member.teamBlockImage && (
                <Image
                  src={urlFor(member.teamBlockImage).url()}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-auto h-[24px] hidden lg:block"
                />
              )}
              <p className="underline underline-extension hover:no-underline">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {teamMembers.map((member, index) => (
        <div
          key={member.id.current}
          className={cn(
            "z-50 w-full",
            index === 0 ? "mt-16 md:mt-[315px]" : "mt-[128px] md:mt-[192px]"
          )}
          id={member.name.toLowerCase().split(" ")[0]}
        >
          <div className="flex flex-row items-end z-20 pointer-events-none w-full h-[220px] md:h-[319px] lg:h-[360px] xl:h-[514px]">
            {member.images
              .slice(0, isMobile ? 3 : 5)
              .map((image, imageIndex) => (
                <div
                  className={cn(
                    "w-full relative pointer-events-none",
                    imageIndex === 0 && "h-[64%]",
                    imageIndex === 1 && "h-[100%]",
                    imageIndex === 2 && "h-[80%]",
                    imageIndex === 3 && "h-[64%]",
                    imageIndex === 4 && "h-[51.2%]"
                  )}
                  key={image.asset._ref}
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={`${member.name} ${imageIndex + 1}`}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
          </div>

          <div className="flex flex-col mt-12 ml-[29%] md:ml-0 md:max-lg:max-w-[682px] md:max-lg:ml-[calc(17.8vw+8px)] pr-2.5 lg:ml-[calc(25%+8px)] lg:w-[calc(55.417vw+8px)] z-20">
            <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
              <p className="big-text">{member.name}</p>
              <p className="bold-text uppercase leading-[14px] mt-1.5">
                {member.position}
              </p>
            </div>
            <p className="regular-text mt-6">
              {member.description.map((description) => (
                <span className="bold-text" key={description}>
                  {description}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

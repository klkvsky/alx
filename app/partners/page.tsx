"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import { TeamMember, getAllTeamMembers } from "@/sanity/lib/queries";

import Marquee from "react-fast-marquee";
import background from "@/public/background.png";

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

  const shuffleArray = (array: TeamMember[]) => {
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
    <div className="flex flex-col max-w-[100vw] overflow-hidden text-white relative bg-black pb-32 min-h-dvh">
      <Navbar />

      <div className="max-md:aspect-[733/679] w-[679px] fixed top-0 right-0 md:w-[1003px] md:max-[1199px]:aspect-[1003/1083] min-[1199px]:w-screen min-[1199px]:aspect-[1200/1293]">
        <Image
          src={background}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <Marquee
        className="hidden min-[1199px]:!flex mt-[334px] h-fit"
        pauseOnClick
      >
        {[...Array(10)].map((_, i) => {
          const shuffledMembers = shuffleArray(teamMembers);
          return shuffledMembers.map(
            (member) =>
              member.images.length > 0 && (
                <div
                  key={`set-${i}-${member.id.current}`}
                  className="w-fit h-auto min-h-[237px] xl:max-h-[514px]"
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

      <div className="flex flex-col items-center text-center mt-[100px] md:mt-[296px] min-[1199px]:mt-[144px] min-[1199px]:px-[5vw] 2xl:px-[30vw] z-50">
        <p className="bold-text mb-[53px] md:mb-[24px]">КОМАНДА</p>

        {/* Partners Row (with big text) */}
        <div className="flex flex-col items-center w-full gap-6 md:flex-row md:flex-wrap md:justify-center lg:gap-8 lg:mt-3 z-50 px-2.5">
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
                    className="w-auto h-[60px] md:h-[18px] lg:h-[24px]"
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

        <div className="flex flex-row items-center mt-12 flex-wrap justify-center gap-2 md:mt-[62px] md:gap-4 lg:mt-[48px]">
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
                  className="w-auto md:h-[18px] lg:h-[24px] hidden md:block"
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
            "z-40 w-full",
            index === 0
              ? "mt-[256px] md:mt-[276px] lg:mt-[315px]"
              : "mt-[128px] md:mt-[108px] lg:mt-[192px]"
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

          <div className="flex flex-col mt-12 ml-[29%] md:ml-0 md:max-lg:max-w-[674px] md:max-lg:mx-auto pr-2.5 md:pr-0 lg:ml-[calc(25%+8px)] lg:w-[calc(55.417vw+8px)] z-20 xl:max-w-[674px] xl:mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
              <p className="big-text">{member.name}</p>
              <p className="bold-text uppercase leading-[14px] mt-1.5">
                {member.position}
              </p>
            </div>
            <p className="regular-text mt-6">
              {member.description.map((description, index) => (
                <span className="regular-text" key={description}>
                  <span className="bold-text"> 0{index + 1}</span> {description}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

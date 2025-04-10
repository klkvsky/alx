"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
// import { useState, useEffect } from "react";
import { useEffect, useRef, useState } from "react";

import Navbar from "@/components/navbar";
import TextWrapper from "@/components/TextWrapper";

import Image from "next/image";

// import HeroImage from "@/public/Home/MainHeroBackground.png";
import HeroImageX from "@/public/Home/MainHeroBackgroundX.jpg";
import Hero2 from "@/public/Home/Home2.jpg";
// import Hero3 from "@/public/Home/Home3.png";
import Hero3X from "@/public/Home/Home3X.jpg";
import Hero4 from "@/public/Home/Home4.jpg";
import Hero5 from "@/public/Home/Home5.jpg";
// import Hero6 from "@/public/Home/Home6.png";
import Hero6X from "@/public/Home/Home6X.jpg";
import Hero7 from "@/public/Home/Home7.jpg";
import Hero8 from "@/public/Home/Home8.jpg";
import Hero9 from "@/public/Home/Home9.jpg";
import Hero10 from "@/public/Home/Home10.jpg";
import Hero11 from "@/public/Home/Home11.jpg";
import Hero12 from "@/public/Home/Home12.jpg";
import Hero13 from "@/public/Home/Home13.jpg";
// import Hero14 from "@/public/Home/Home14.jpg";
import Hero14X from "@/public/Home/Home14X.jpg";

import HeroX from "@/public/Home/HomeX.jpeg";

import Slider1 from "@/public/Home/Slider1.jpg";
import Slider2 from "@/public/Home/Slider2.jpg";
import Slider3 from "@/public/Home/Slider3.jpg";
import Slider4 from "@/public/Home/Slider4.jpg";
import Slider5 from "@/public/Home/Slider5.jpg";
import Slider6 from "@/public/Home/Slider6.jpg";
import Slider7 from "@/public/Home/Slider7.jpg";
import Slider8 from "@/public/Home/Slider8.jpg";
import Slider9 from "@/public/Home/Slider9.png";
import Slider10 from "@/public/Home/Slider10.png";
import Slider11 from "@/public/Home/Slider11.jpg";
import Link from "next/link";

import {
  getAllPosts,
  getAllTeamMembers,
  Post,
  TeamMember,
} from "@/sanity/lib/queries";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  const [topNews, setTopNews] = useState<Post[]>([]);

  useEffect(() => {
    const fetchTopNews = async () => {
      const posts = await getAllPosts();
      setTopNews(posts);
    };

    fetchTopNews();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1199);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const [partners, setPartners] = useState<TeamMember[]>([]);
  const [otherMembers, setOtherMembers] = useState<TeamMember[]>([]);

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

        setPartners(partners);
        setOtherMembers(others);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden bg-[#E8E8E8]">
      <Navbar />

      <div className="flex flex-col relative w-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
        >
          <ImageWrapper>
            <Image
              src={HeroImageX}
              alt="Hero Home"
              fill
              objectFit="cover"
              objectPosition={isMobile ? "60% 50%" : "60% 50%"}
              className="max-h-[100dvh]"
            />
          </ImageWrapper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-[100px] ml-[155px] gap-3 flex flex-col items-start justify-start md:block md:ml-auto md:mt-[104px] mr-[16px] mg:mr-[90px] mg:mt-[42px] lg:mr-[90px] lg:mt-[42px]"
        >
          <p className="bold-text uppercase leading-[14px] z-10 md:hidden">
            БЕСПОКОЙСТВО <br /> ВАШИХ ОППОНЕНТОВ.
          </p>
          <div className="w-[117px] h-[84px] md:w-[135px] md:h-[96px] relative z-0">
            <Image
              src={Hero2}
              alt="Hero Home"
              fill
              objectFit="cover"
              className="invert"
            />
          </div>
        </motion.div>

        <div className="flex flex-row items-center bg-black text-white whitespace-nowrap mx-2.5 md:mx-3 overflow-hidden mt-[63dvh] px-2 lg:pl-2.5 lg:mt-[80dvh] py-1 md:py-2 z-20 md:gap-4 lg:gap-[25px] md:h-[40px] opacity-0 pointer-events-none">
          <motion.div
            className="flex flex-row items-center gap-[25px]"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First instance of content */}
            <Link
              href="/news"
              className="bold-text underline underline-extension-2 hover:no-underline cursor-pointer"
            >
              НОВОСТИ
            </Link>
            {topNews.map((post, idx) => (
              <Link
                key={`first-${post.slug.current}`}
                href={post.sourceLink}
                className="flex flex-row items-center gap-2"
              >
                <p className="bold-text leading-[22px] md:leading-[24px]">
                  {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                </p>
                <p className="regular-text ml-2 ">
                  <span className="underline underline-extension-2 hover:no-underline">
                    {post.titleLink}
                  </span>
                  {post.titleNormal && <span>{post.titleNormal}</span>}
                </p>
              </Link>
            ))}

            {/* Duplicate content for seamless loop */}
            <Link
              href="/news"
              className="bold-text underline underline-extension-2 hover:no-underline cursor-pointer"
            >
              НОВОСТИ
            </Link>
            {topNews.map((post, idx) => (
              <Link
                key={`second-${post.slug.current}`}
                href={post.sourceLink}
                className="flex flex-row items-center gap-2"
              >
                <p className="bold-text leading-[22px] md:leading-[24px]">
                  {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                </p>
                <p className="regular-text ml-2">
                  <span className="underline underline-extension-2 hover:no-underline">
                    {post.titleLink}
                  </span>
                  {post.titleNormal && <span>{post.titleNormal}</span>}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="w-[calc(100dvw-20px)] mx-auto h-[61.5vw] relative md:h-[65.3vw] lg:h-screen z-10">
          <Image src={Hero2} alt="Hero Home" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col items-center relative text-white pt-8 pb-12 md:pt-12 lg:py-[84px] lg:pb-8">
        <motion.div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <ImageWrapper>
            <Image
              src={Hero3X}
              alt="Hero Home"
              fill
              className="scale-[1.1] object-cover object-left-top"
            />
          </ImageWrapper>
        </motion.div>
        <motion.div className="hidden md:block absolute top-0 md:-left-[90%] lg:-left-[95%] w-full h-full z-0">
          <Image
            src={HeroX}
            alt="Hero Home"
            fill
            objectFit="cover"
            objectPosition="100%"
          />
        </motion.div>
        <motion.div className="hidden md:block absolute top-[264px] md:-left-[90%] lg:-left-[95%] w-full h-[calc(100%-264px)] z-0">
          <Image
            src={HeroX}
            alt="Hero Home"
            fill
            objectFit="cover"
            objectPosition="100%"
          />
        </motion.div>
        <TextWrapper>
          <p className="bold-text uppercase z-10">Знаем свои сильные стороны</p>
        </TextWrapper>
        <TextWrapper>
          <div className="md:flex md:flex-row md:gap-3 flex flex-col max-md:items-center z-10 md:max-lg:mt-[24px]">
            <div className="flex flex-row items-end gap-2 mt-4 md:gap-3">
              <p className="bold-text leading-[16px] md:leading-[19px]">01</p>
              <p className="big-text">Суд и арбитраж</p>
            </div>
            <div className="flex flex-row items-end gap-2 mt-1 md:gap-3 ">
              <p className="bold-text leading-[16px] md:leading-[19px]">02</p>
              <p className="big-text">Банкротство</p>
              <p className="bold-text leading-[16px] md:leading-[19px]">03</p>
              <p className="big-text">M&A</p>
            </div>
          </div>
        </TextWrapper>
        <TextWrapper>
          <div className="md:flex md:flex-row md:gap-3 flex flex-col items-center lg:-mt-2 z-10">
            <div className="flex flex-row items-end gap-2 mt-1 md:gap-3">
              <p className="bold-text leading-[16px] md:leading-[19px]">04</p>
              <p className="big-text">Бизнес-конфликты</p>
            </div>
            <div className="flex flex-row items-end gap-2 mt-1 md:gap-3 ">
              <p className="bold-text leading-[16px] md:leading-[19px]">05</p>
              <p className="big-text">Медиация</p>
            </div>
          </div>
        </TextWrapper>

        <div className="flex flex-col items-center mt-[100dvh] pl-2.5 pr-2 lg:px-[210px] z-10">
          <TextWrapper>
            <p className="bold-text uppercase">
              руководствуемся простыми принципами
            </p>
          </TextWrapper>

          <TextWrapper>
            <div className="flex flex-row mt-8 max-md:max-w-[480px] lg:min-w-[780px] md:min-w-[590px] md:max-w-[590px] w-full md:justify-between">
              <p className=" bold-text leading-[22px] md:leading-[26px]">01</p>
              <p className="ml-[26px] mr-[29px] regular-text lg:-ml-12 max-md:w-[260px]">
                Узкая специализация: мы делаем <br className="md:hidden" />{" "}
                только то, что хорошо знаем <br className="md:hidden" />
                и умеем.
              </p>
              <p className=" bold-text leading-[22px] md:leading-[26px]">01</p>
            </div>
          </TextWrapper>

          <TextWrapper>
            <div className="flex flex-row mt-8 max-md:max-w-[480px] lg:min-w-[780px] md:min-w-[590px] md:max-w-[590px] w-full md:justify-between">
              <p className=" bold-text leading-[22px] md:leading-[26px]">02</p>
              <p className="ml-[26px] mr-[29px] regular-text max-md:w-[260px]">
                Высокая юридическая кухня — <br className="md:hidden" />
                качество документов, творческие <br className="md:hidden" />
                и креативные рецепты.
              </p>
              <p className=" bold-text leading-[22px] md:leading-[26px]">02</p>
            </div>
          </TextWrapper>
          <TextWrapper>
            <div className="flex flex-row mt-8 max-md:max-w-[480px] lg:min-w-[780px] md:min-w-[590px] md:max-w-[590px] w-full md:justify-between">
              <p className="bold-text leading-[22px] md:leading-[26px]">03</p>
              <p className="ml-[26px] mr-[29px] regular-text max-md:w-[260px]">
                Честные и долгосрочные отношения <br className="md:hidden" />{" "}
                важнее заработка. Некоторые <br className="md:hidden" />
                клиенты с нами больше 25 лет.
              </p>
              <p className=" bold-text leading-[22px] md:leading-[26px]">03</p>
            </div>
          </TextWrapper>
          <TextWrapper>
            <div className="flex flex-row mt-8 max-md:max-w-[480px] lg:min-w-[780px] md:min-w-[590px] md:max-w-[590px] w-full md:justify-between">
              <p className=" bold-text leading-[22px] md:leading-[26px]">04</p>
              <p className="ml-[26px] mr-[29px] regular-text max-md:w-[260px]">
                Наша главная ценность — команда.
                <br className="md:hidden" />
                Она стабильна: костяк вместе <br className="md:hidden" />
                больше десятилетия. Она <br className="md:hidden" />
                преемственна: есть те, кому 50, <br className="md:hidden" />
                40, 30 и даже чуть за 20, наше
                <br className="md:hidden" />
                прошлое, настоящее и будущее.
              </p>
              <p className="bold-text leading-[22px] md:leading-[26px]">04</p>
            </div>
          </TextWrapper>
          <TextWrapper>
            <div className="flex flex-row mt-8 max-md:max-w-[480px] lg:min-w-[780px] md:min-w-[590px] md:max-w-[590px] w-full md:justify-between">
              <p className=" bold-text leading-[22px] md:leading-[26px]">05</p>
              <p className="ml-[26px] mr-[29px] regular-text max-md:w-[260px]">
                Каждое дело — это инвестиция.
                <br className="md:hidden" /> В саморазвитие, в развитие{" "}
                <br className="md:hidden" /> судебной практики и отношения{" "}
                <br className="md:hidden" />
                с клиентом. 
              </p>
              <p className=" bold-text leading-[22px] md:leading-[26px]">05</p>
            </div>
          </TextWrapper>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[calc(100vw-20px)] h-[45.1vw] relative md:h-[49vw] md:w-[calc(100vw-24px)] lg:h-[564px]">
          <Image src={Hero4} alt="Hero Home" fill objectFit="cover" />
        </div>
        <motion.div
          className="w-[51.2vw] h-[32.8vw] bg-slate-300 -mt-[4.1vw] relative md:w-[32.4vw] md:h-[21vw] lg:w-[32.1vw] lg:h-[21vw]"
          style={{ y: y2 }}
        >
          <Image src={Hero5} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center text-center mt-12 md:mt-[192px] lg:mt-[72px]">
        <TextWrapper>
          <p className="bold-text">КОМАНДА</p>
        </TextWrapper>
        <div className="lg:flex lg:flex-row lg:gap-8 md:mt-12 lg:mt-3 flex flex-col items-center">
          {partners.map((partner) => (
            <TextWrapper key={partner.id.current}>
              <Link
                href={`/partners#${partner.name.toLowerCase().split(" ").join("-")}`}
                className="flex flex-row gap-2 items-end mt-4 md:mt-0 lg:mt-1"
              >
                <p className="bold-text leading-[16px]">01</p>
                <p className="big-text underline underline-extension-2 hover:no-underline">
                  {partner.name}
                </p>
              </Link>
            </TextWrapper>
          ))}
        </div>

        <div className="lg:flex gap-2 md:gap-3 md:mt-9 lg:flex-row lg:gap-4 lg:mt-[30px] flex flex-col items-center">
          {otherMembers.map((member, index) => (
            <TextWrapper key={member.id.current}>
              <Link
                href={`/partners#${member.name.toLowerCase().split(" ")[0]}`}
                className="flex flex-row gap-1 md:gap-3 items-end mt-6 md:mt-0 uppercase bold-text lg:mt-2"
              >
                <p>
                  {(partners.length + index + 1).toString().padStart(2, "0")}
                </p>
                <p className="underline underline-extension hover:no-underline">
                  {member.name}
                </p>
              </Link>
            </TextWrapper>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-[106px] md:mt-[96px]">
        <div className="w-[70vw] h-[84.1vw] md:w-[80vw] md:h-[100vw] relative lg:w-[calc(100vw-220px)] lg:h-[1140px] overflow-hidden">
          <ImageWrapper>
            <Image src={Hero6X} alt="Hero Home" fill objectFit="cover" />
          </ImageWrapper>
        </div>
        <motion.div
          className="w-[113px] h-[77px] -mt-[38px] relative md:w-[32.4vw] md:h-[21vw] lg:w-[386px] lg:h-[252px] lg:-mt-[100px]"
          style={{ y: y3 }}
        >
          <Image src={Hero7} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <TextWrapper>
        <p className="mt-16 bold-text text-center md:mt-[96px] lg:mt-[52px]">
          ВНИМАТЕЛЬНО ОТНОСИМСЯ К ДЕТАЛЯМ
        </p>
      </TextWrapper>

      <TextWrapper>
        <Link
          href="/artifacts"
          className="flex flex-row items-end justify-between mt-4 px-2.5 md:w-full md:max-w-[576px] lg:mt-3 lg:w-[calc(100vw-440px)] md:mx-auto lg:lg:max-w-[780px]"
        >
          <p className="bold-text max-lg:leading-[19px] ">А</p>
          <p className="big-text">
            Изучите наши{" "}
            <span className="underline underline-extension-2 hover:no-underline">
              артефакты
            </span>
          </p>
          <p className="bold-text max-lg:leading-[19px] ">А</p>
        </Link>
      </TextWrapper>

      <motion.div className="flex flex-row justify-center gap-2.5 mt-[45px] md:mt-[52px] lg:scale-[1.07] max-md:translate-x-28 max-lg:items-end items-center">
        <div className="w-[50px] h-[72px] flex-none relative stroke-none md:w-[4.2vw] md:h-[6vw]">
          <Image src={Slider1} alt="Slider Image 1" fill objectFit="cover" />
        </div>
        <div className="w-[93px] h-[60px] flex-none relative stroke-none md:w-[7.3vw] md:h-[4.7vw]">
          <Image src={Slider2} alt="Slider Image 2" fill objectFit="cover" />
        </div>
        <div className="w-[147px] h-[96px] flex-none relative md:w-[11.5vw] md:h-[7.5vw]">
          <Image src={Slider3} alt="Slider Image 3" fill objectFit="cover" />
        </div>
        <div className="w-[113px] h-[75px] -rotate-[37deg] flex-none relative md:w-[8.8vw] md:h-[5.9vw]">
          <Image src={Slider4} alt="Slider Image 4" fill objectFit="cover" />
        </div>
        <div className="w-[115px] h-[78px] flex-none relative md:w-[9vw] md:h-[6.1vw]">
          <Image src={Slider5} alt="Slider Image 5" fill objectFit="cover" />
        </div>
        <div className="w-[96px] h-[56px] flex-none relative md:w-[7.5vw] md:h-[5.15vw]">
          <Image
            src={Slider6}
            alt="Slider Image 6"
            fill
            objectFit="cover"
            style={{
              transform: "scaleX(-1)",
            }}
          />
        </div>
        <div className="w-[60px] h-[96px] flex-none relative md:w-[4.7vw] md:h-[7.5vw]">
          <Image
            src={Slider7}
            alt="Slider Image 7"
            fill
            objectFit="cover"
            style={{
              transform: "scaleX(-1)",
            }}
          />
        </div>
        <div className="w-[73px] h-[48px] flex-none relative md:w-[5.7vw] md:h-[3.7vw]">
          <Image src={Slider8} alt="Slider Image 8" fill objectFit="cover" />
        </div>
        <div className="w-[150px] h-[96px] flex-none relative md:w-[11.7vw] md:h-[7.5vw]">
          <Image src={Slider9} alt="Slider Image 9" fill objectFit="cover" />
        </div>
        <div className="w-[75px] h-[48px] flex-none relative md:w-[5.8vw] md:h-[3.7vw]">
          <Image src={Slider10} alt="Slider Image 10" fill objectFit="cover" />
        </div>
        <div className="w-[97px] h-[72px] flex-none relative md:w-[7.6vw] md:h-[5.6vw]">
          <Image src={Slider11} alt="Slider Image 11" fill objectFit="cover" />
        </div>
      </motion.div>

      <div className="flex flex-row mt-[36px] relative md:h-[1200px]">
        <motion.div className="w-[308px] h-[480px] max-md:-ml-[209px] relative md:w-[768px] md:h-[1200px] md:z-10 md:absolute md:top-0 md:left-1/2 md:-translate-x-[105%] lg:-translate-x-[126.5%]">
          <Image src={Hero9} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
        <motion.div className="w-[294px] h-[352px] relative md:w-[1488px] md:h-[984px] overflow-hidden md:absolute md:top-0 md:left-1/2 md:-translate-x-[13.7%]">
          <ImageWrapper>
            <Image
              src={Hero8}
              alt="Hero Home"
              fill
              objectFit="cover"
              objectPosition="20%"
            />
          </ImageWrapper>
        </motion.div>
      </div>
      <div className="flex flex-col items-center md:gap-0">
        <motion.div
          className="w-[111px] h-[76px] relative z-10 md:w-[406px] md:h-[254px]"
          // style={{
          //   y: isMobile ? useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) : 0,
          // }}
        >
          <Image src={Hero10} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
        <motion.div
          className="w-[273px] h-[396px] relative md:w-[978px] md:h-[1428px] "
          // style={{
          //   y: isMobile ? useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]) : 0,
          // }}
        >
          <Image src={Hero11} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <TextWrapper>
        <p
          className="uppercase bold-text mt-[128px] md:mt-[192px] text-center"
          id="contacts"
        >
          и решаем ваши задачи здесь и сейчас
        </p>
      </TextWrapper>

      <div className="flex flex-col px-2.5 mt-4 gap-0 md:w-full md:max-w-[586px] lg:w-[calc(100vw-440px)] md:mx-auto">
        <TextWrapper>
          <div className="flex flex-row items-end justify-between">
            <p className="bold-text -translate-y-1">П.</p>
            <Link href="mailto:office@alxlegal.com" className="big-text">
              office@alxlegal.com
            </Link>
            <p className="bold-text -translate-y-1">П.</p>
          </div>
        </TextWrapper>
        <TextWrapper>
          <div className="flex flex-row items-start md:items-start justify-between">
            <p className="bold-text translate-y-3 md:translate-y-1">А.</p>
            <Link
              href="https://yandex.ru/maps/-/CHEpv258"
              target="_blank"
              referrerPolicy="no-referrer"
              className="big-text text-center"
            >
              Москва,1-й Тружеников переулок, 17А
            </Link>
            <p className="bold-text translate-y-3 md:translate-y-1">А.</p>
          </div>
        </TextWrapper>
        <TextWrapper>
          <div className="flex flex-row items-end justify-between">
            <p className="bold-text -translate-y-1">Т.</p>
            <Link href="tel:+74994551777" className="big-text text-center">
              +7 499 455-1-777
            </Link>
            <p className="bold-text -translate-y-1">Т.</p>
          </div>
        </TextWrapper>
        <TextWrapper>
          <div className="flex flex-row items-end justify-between">
            <p className="bold-text -translate-y-1">Т.</p>
            <Link
              href="https://t.me/LisinSergei"
              target="_blank"
              referrerPolicy="no-referrer"
              className="big-text text-center underline underline-extension-2-x hover:no-underline"
            >
              Телеграм
            </Link>
            <p className="bold-text -translate-y-1">Т.</p>
          </div>
        </TextWrapper>
      </div>

      <div className="w-full h-[248px] mt-[64px] relative md:h-[559px] lg:h-[804px] md:mt-[100px] lg:mt-[156px] overflow-hidden">
        <ImageWrapper>
          <Image src={Hero12} alt="Hero Home" fill objectFit="cover" />
        </ImageWrapper>
      </div>
      <TextWrapper>
        <p className="regular-text text-center max-md:text-[12px] mt-8">
          Коллегия адвокатов города Москвы «А-ЭЛ-ИКС Партнеры»
        </p>
      </TextWrapper>
      <TextWrapper>
        <p className="bold-text text-center max-md:text-[10px] uppercase">
          ©2024{" "}
          <Link
            href="/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-extension-2 hover:no-underline cursor-pointer"
          >
            Политика конфиденциальности
          </Link>
        </p>
      </TextWrapper>

      <div className="mt-16 w-[200px] h-[128px] relative mx-auto md:w-[386px] md:h-[240px] md:mt-[96px]">
        <Image src={Hero13} alt="Hero Home" fill objectFit="cover" />
      </div>
      <div className="mt-[128px] md:mt-[192px] w-screen h-screen relative md:h-[150vh] lg:h-[200dvh] lg:mt-[216px] overflow-hidden -mb-[50px]">
        <ImageWrapper>
          <Image src={Hero14X} alt="Hero Home" fill objectFit="cover" />
        </ImageWrapper>
      </div>
    </div>
  );
}

function ImageWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 10,
      }}
      style={{ y: yOffset }}
      ref={ref}
      className="will-change-transform z-0 w-full h-full"
    >
      {children}
    </motion.div>
  );
}

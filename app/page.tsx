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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
          className="mt-[100px] ml-[155px] gap-3 flex flex-col items-start justify-start lg:block lg:ml-auto lg:mr-[90px] lg:mt-[42px]"
        >
          <p className="bold-text uppercase leading-[14px] z-10 lg:hidden">
            БЕСПОКОЙСТВО <br /> ВАШИХ ОППОНЕНТОВ
          </p>
          <div className="w-[117px] h-[84px] lg:w-[135px] lg:h-[96px] relative z-0">
            <Image
              src={Hero2}
              alt="Hero Home"
              fill
              objectFit="cover"
              className="invert"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0, y: 0 }}
          className="flex flex-row items-center bg-black text-white whitespace-nowrap text-[14px] mx-2.5 gap-2.5 overflow-hidden mt-[63dvh] pl-2.5 lg:mt-[80dvh] py-1 hidden"
        >
          <p className="bold-text underline underline-offset-2 decoration-white/50">
            НОВОСТИ
          </p>
          <p className="bold-text">01</p>
          <p className="regular-text">«</p>
          <p className="underline regular-text -ml-2.5">
            Новые тенденции в Верховном суде» Комментарий Сергея Лисина
          </p>
          <p className="bold-text max-lg:text-[10px] ml-9">02</p>
          <p className="underline regular-text decoration-white/20">
            «Интервью с Алексей Ахубой, сооснователем ALX Part
          </p>
        </motion.div>
        <div className="w-[calc(100dvw-20px)] mx-auto h-[240px] relative lg:h-screen z-10 mt-[63dvh] lg:mt-[75dvh]">
          <Image src={Hero2} alt="Hero Home" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col items-center relative text-white pt-8 pb-12 lg:py-[84px]">
        <motion.div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <ImageWrapper>
            <Image
              src={Hero3X}
              alt="Hero Home"
              fill
              objectFit="cover"
              objectPosition="10%"
              className="scale-[1.2]"
            />
          </ImageWrapper>
        </motion.div>
        <motion.div className="hidden lg:block absolute top-0 -left-[95%] w-full h-full z-0">
          <Image
            src={HeroX}
            alt="Hero Home"
            fill
            objectFit="cover"
            objectPosition="100%"
          />
        </motion.div>
        <motion.div className="hidden lg:block absolute top-[264px] -left-[95%] w-full h-[calc(100%-264px)] z-0">
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
          <div className="lg:flex lg:flex-row lg:gap-3 flex flex-col max-lg:items-center z-10">
            <div className="flex flex-row items-end gap-2 mt-4 lg:gap-3">
              <p className="bold-text leading-[16px] lg:leading-[19px]">01</p>
              <p className="big-text">Суд и арбитраж</p>
            </div>
            <div className="flex flex-row items-end gap-2 mt-1 lg:gap-3 ">
              <p className="bold-text leading-[16px] lg:leading-[19px]">02</p>
              <p className="big-text">Банкротство</p>
              <p className="bold-text leading-[16px] lg:leading-[19px]">03</p>
              <p className="big-text">M&A</p>
            </div>
          </div>
        </TextWrapper>
        <TextWrapper>
          <div className="lg:flex lg:flex-row lg:gap-3 flex flex-col items-center lg:-mt-2 z-10">
            <div className="flex flex-row items-end gap-2 mt-1 lg:gap-3">
              <p className="bold-text leading-[16px] lg:leading-[19px]">04</p>
              <p className="big-text">Бизнес-конфликты</p>
            </div>
            <div className="flex flex-row items-end gap-2 mt-1 lg:gap-3 ">
              <p className="bold-text leading-[16px] lg:leading-[19px]">05</p>
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
            <div className="flex flex-row mt-8 max-lg:max-w-[480px] lg:min-w-[780px]  lg:justify-between">
              <p className=" bold-text leading-[22px] lg:leading-[26px]">01</p>
              <p className="ml-[26px] mr-[29px] regular-text lg:-ml-12 max-lg:w-[260px]">
                Узкая специализация: мы делаем <br className="lg:hidden" />{" "}
                только то, что хорошо знаем <br className="lg:hidden" />
                и умеем.
              </p>
              <p className=" bold-text leading-[22px] lg:leading-[26px]">01</p>
            </div>
          </TextWrapper>

          <TextWrapper>
            <div className="flex flex-row mt-6 max-lg:max-w-[480px] lg:max-w-[780px]">
              <p className=" bold-text leading-[22px] lg:leading-[26px]">02</p>
              <p className="ml-[26px] mr-[29px] regular-text max-lg:w-[260px]">
                Высокая юридическая кухня — <br className="lg:hidden" />
                качество документов, творческие <br className="lg:hidden" />
                и креативные рецепты.
              </p>
              <p className=" bold-text leading-[22px] lg:leading-[26px]">02</p>
            </div>
          </TextWrapper>
          <TextWrapper>
            <div className="flex flex-row mt-6 max-lg:max-w-[480px] lg:max-w-[780px]">
              <p className="bold-text leading-[22px] lg:leading-[26px]">03</p>
              <p className="ml-[26px] mr-[29px] regular-text max-lg:w-[260px]">
                Честные и долгосрочные отношения <br className="lg:hidden" />{" "}
                важнее заработка. Некоторые <br className="lg:hidden" />
                клиенты с нами больше 25 лет.
              </p>
              <p className=" bold-text leading-[22px] lg:leading-[26px]">03</p>
            </div>
          </TextWrapper>
          <TextWrapper>
            <div className="flex flex-row mt-6 max-lg:max-w-[480px] lg:max-w-[780px]">
              <p className=" bold-text leading-[22px] lg:leading-[26px]">04</p>
              <p className="ml-[26px] mr-[29px] regular-text max-lg:w-[260px]">
                Наша главная ценность — команда.
                <br className="lg:hidden" />
                Она стабильна: костяк вместе <br className="lg:hidden" />
                больше десятилетия. Она <br className="lg:hidden" />
                преемственна: есть те, кому 50, <br className="lg:hidden" />
                40, 30 и даже чуть за 20, наше
                <br className="lg:hidden" />
                прошлое, настоящее и будущее.
              </p>
              <p className=" bold-text leading-[22px] lg:leading-[26px]">04</p>
            </div>
          </TextWrapper>
          <TextWrapper>
            <div className="flex flex-row mt-6 max-lg:max-w-[480px] lg:max-w-[780px]">
              <p className=" bold-text leading-[22px] lg:leading-[26px]">05</p>
              <p className="ml-[26px] mr-[29px] regular-text max-lg:w-[260px]">
                Каждое дело — это инвестиция.
                <br className="lg:hidden" /> В саморазвитие, в развитие{" "}
                <br className="lg:hidden" /> судебной практики и отношения{" "}
                <br className="lg:hidden" />
                с клиентом. 
              </p>
              <p className=" bold-text leading-[22px] lg:leading-[26px]">05</p>
            </div>
          </TextWrapper>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[calc(100vw-20px)] h-[176px] relative lg:w-[calc(100vw-24px)] lg:h-[564px]">
          <Image src={Hero4} alt="Hero Home" fill objectFit="cover" />
        </div>
        <motion.div
          className="w-[200px] h-[128px] bg-slate-300 -mt-[16px] relative lg:w-[386px] lg:h-[252px]"
          style={{ y: y2 }}
        >
          <Image src={Hero5} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center text-center mt-12 lg:mt-[72px]">
        <TextWrapper>
          <p className="bold-text">КОМАНДА</p>
        </TextWrapper>
        <div className="lg:flex lg:flex-row lg:gap-8 lg:mt-3 flex flex-col items-center">
          <TextWrapper>
            <Link
              href="/partners#sergey"
              className="flex flex-row gap-2 items-end mt-4 lg:mt-1"
            >
              <p className="bold-text leading-[16px]">01</p>
              <p className="big-text underline underline-extension-2 hover:no-underline">
                Сергей Лисин
              </p>
            </Link>
          </TextWrapper>
          <TextWrapper>
            <Link
              href="/partners#alexey"
              className="flex flex-row gap-2 items-end mt-1"
            >
              <p className="bold-text leading-[16px]">02</p>
              <p className="big-text underline underline-extension-2 hover:no-underline">
                Алексей Ахуба
              </p>
            </Link>
          </TextWrapper>
          <TextWrapper>
            <Link
              href="/partners#asya"
              className="flex flex-row gap-2 items-end mt-1"
            >
              <p className="bold-text leading-[16px]">03</p>
              <p className="big-text underline underline-extension-2 hover:no-underline">
                Ася Алфёрова
              </p>
            </Link>
          </TextWrapper>
          <TextWrapper>
            <Link
              href="/partners#alexey-r"
              className="flex flex-row gap-2 items-end mt-1"
            >
              <p className="bold-text leading-[16px]">04</p>
              <p className="big-text underline underline-extension-2 hover:no-underline">
                Алексей Рябов
              </p>
            </Link>
          </TextWrapper>
        </div>

        <div className="lg:flex gap-2 lg:flex-row lg:gap-4 lg:mt-[30px] flex flex-col items-center">
          <TextWrapper>
            <Link
              href="/partners#evgeny"
              className="flex flex-row gap-1 items-end mt-6 uppercase bold-text lg:mt-2"
            >
              <p>05</p>
              <p className="underline underline-extension hover:no-underline">
                Евгений Орлов
              </p>
            </Link>
          </TextWrapper>
          <TextWrapper>
            <Link
              href="/partners#anastasia"
              className="flex flex-row gap-1 items-end mt-2 uppercase bold-text "
            >
              <p>06</p>
              <p className="underline underline-extension hover:no-underline">
                Анастасия Рябова
              </p>
            </Link>
          </TextWrapper>
          <TextWrapper>
            <Link
              href="/partners#arina"
              className="flex flex-row gap-1 items-end mt-2 uppercase bold-text "
            >
              <p>07</p>
              <p className="underline underline-extension hover:no-underline">
                Арина Русакевич
              </p>
            </Link>
          </TextWrapper>
          <TextWrapper>
            <Link
              href="/partners#ksenia"
              className="flex flex-row gap-1 items-end mt-2 uppercase bold-text "
            >
              <p>08</p>
              <p className="underline underline-extension hover:no-underline">
                Ксения Мерзлякова
              </p>
            </Link>
          </TextWrapper>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[106px] lg:mt-[96px]">
        <div className="w-[273px] h-[328px] relative lg:w-[calc(100vw-220px)] lg:h-[1140px] overflow-hidden">
          <ImageWrapper>
            <Image src={Hero6X} alt="Hero Home" fill objectFit="cover" />
          </ImageWrapper>
        </div>
        <motion.div
          className="w-[113px] h-[77px] -mt-[38px] relative lg:w-[386px] lg:h-[252px] lg:-mt-[100px]"
          style={{ y: y3 }}
        >
          <Image src={Hero7} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <TextWrapper>
        <p className="mt-16 bold-text text-center lg:mt-[52px]">
          ВНИМАТЕЛЬНО ОТНОСИМСЯ К ДЕТАЛЯМ
        </p>
      </TextWrapper>

      <TextWrapper>
        <Link
          href="/artifacts"
          className="flex flex-row items-end justify-between mt-4 px-2.5 lg:mt-3 lg:w-[calc(100vw-440px)] lg:mx-auto lg:lg:max-w-[780px]"
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

      <motion.div
        className="flex flex-row justify-center gap-2.5 mt-[45px] lg:mt-[52px] lg:scale-[1.07] max-lg:translate-x-28 max-lg:items-end items-center"
        // style={{
        //   x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        // }}
      >
        <div className="w-[50px] h-[72px] flex-none relative stroke-none lg:w-[4.2vw] lg:h-[6vw]">
          <Image src={Slider1} alt="Slider Image 1" fill objectFit="cover" />
        </div>
        <div className="w-[93px] h-[60px] flex-none relative stroke-none lg:w-[7.3vw] lg:h-[4.7vw]">
          <Image src={Slider2} alt="Slider Image 2" fill objectFit="cover" />
        </div>
        <div className="w-[147px] h-[96px] flex-none relative lg:w-[11.5vw] lg:h-[7.5vw]">
          <Image src={Slider3} alt="Slider Image 3" fill objectFit="cover" />
        </div>
        <div className="w-[113px] h-[75px] -rotate-[37deg] flex-none relative lg:w-[8.8vw] lg:h-[5.9vw]">
          <Image src={Slider4} alt="Slider Image 4" fill objectFit="cover" />
        </div>
        <div className="w-[115px] h-[78px] flex-none relative lg:w-[9vw] lg:h-[6.1vw]">
          <Image src={Slider5} alt="Slider Image 5" fill objectFit="cover" />
        </div>
        <div className="w-[96px] h-[56px] flex-none relative lg:w-[7.5vw] lg:h-[5.15vw]">
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
        <div className="w-[60px] h-[96px] flex-none relative lg:w-[4.7vw] lg:h-[7.5vw]">
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
        <div className="w-[73px] h-[48px] flex-none relative lg:w-[5.7vw] lg:h-[3.7vw]">
          <Image src={Slider8} alt="Slider Image 8" fill objectFit="cover" />
        </div>
        <div className="w-[150px] h-[96px] flex-none relative lg:w-[11.7vw] lg:h-[7.5vw]">
          <Image src={Slider9} alt="Slider Image 9" fill objectFit="cover" />
        </div>
        <div className="w-[75px] h-[48px] flex-none relative lg:w-[5.8vw] lg:h-[3.7vw]">
          <Image src={Slider10} alt="Slider Image 10" fill objectFit="cover" />
        </div>
        <div className="w-[97px] h-[72px] flex-none relative lg:w-[7.6vw] lg:h-[5.6vw]">
          <Image src={Slider11} alt="Slider Image 11" fill objectFit="cover" />
        </div>
      </motion.div>

      <div className="flex flex-row mt-[36px] relative lg:h-[1200px]">
        <motion.div className="w-[308px] h-[480px] max-lg:-ml-[209px] relative lg:w-[768px] lg:h-[1200px] lg:z-10 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-[126.5%]">
          <Image src={Hero9} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
        <motion.div className="w-[294px] h-[352px] relative lg:w-[1488px] lg:h-[984px] overflow-hidden lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-[13.7%]">
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
      <div className="flex flex-col items-center lg:gap-0">
        <motion.div
          className="w-[111px] h-[76px] relative z-10 lg:w-[406px] lg:h-[254px]"
          // style={{
          //   y: isMobile ? useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) : 0,
          // }}
        >
          <Image src={Hero10} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
        <motion.div
          className="w-[273px] h-[396px] relative lg:w-[978px] lg:h-[1428px] "
          // style={{
          //   y: isMobile ? useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]) : 0,
          // }}
        >
          <Image src={Hero11} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <TextWrapper>
        <p className="uppercase bold-text mt-[128px] text-center" id="contacts">
          и решаем ваши задачи здесь и сейчас
        </p>
      </TextWrapper>

      <div className="flex flex-col px-2.5 mt-4 gap-0 lg:w-[calc(100vw-440px)] lg:mx-auto">
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
          <div className="flex flex-row items-start lg:items-start justify-between">
            <p className="bold-text translate-y-3 lg:translate-y-1">А.</p>
            <Link
              href="https://yandex.ru/maps/-/CHEpv258"
              target="_blank"
              referrerPolicy="no-referrer"
              className="big-text text-center"
            >
              Москва,1-й Тружеников переулок, 17А
            </Link>
            <p className="bold-text translate-y-3 lg:translate-y-1">А.</p>
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

      <div className="w-full h-[248px] mt-[64px] relative lg:h-[804px] lg:mt-[156px] overflow-hidden">
        <ImageWrapper>
          <Image src={Hero12} alt="Hero Home" fill objectFit="cover" />
        </ImageWrapper>
      </div>
      <TextWrapper>
        <p className="regular-text text-center max-lg:text-[12px] mt-8">
          Коллегия адвокатов города Москвы «А-ЭЛ-ИКС Партнеры»
        </p>
      </TextWrapper>
      <TextWrapper>
        <p className="bold-text text-center max-lg:text-[10px] uppercase">
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

      <div className="mt-16 w-[200px] h-[128px]  relative mx-auto lg:w-[386px] lg:h-[240px]">
        <Image src={Hero13} alt="Hero Home" fill objectFit="cover" />
      </div>
      <div className="mt-[128px] w-screen h-screen relative lg:h-[200dvh] lg:mt-[216px] overflow-hidden -mb-[50px]">
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

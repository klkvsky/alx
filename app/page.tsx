"use client";

import { motion, useScroll, useTransform } from "motion/react";

import Navbar from "@/components/navbar";
import Image from "next/image";

import HeroImage from "@/public/Home/MainHeroBackground.png";
import Hero2 from "@/public/Home/Home2.jpg";
import Hero3 from "@/public/Home/Home3.png";
import Hero4 from "@/public/Home/Home4.jpg";
import Hero5 from "@/public/Home/Home5.jpg";
import Hero6 from "@/public/Home/Home6.png";
import Hero7 from "@/public/Home/Home7.jpg";
import Hero8 from "@/public/Home/Home8.jpg";
import Hero9 from "@/public/Home/Home9.jpg";
import Hero10 from "@/public/Home/Home10.jpg";
import Hero11 from "@/public/Home/Home11.jpg";
import Hero12 from "@/public/Home/Home12.jpg";
import Hero13 from "@/public/Home/Home13.png";
import Hero14 from "@/public/Home/Home14.jpg";

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

export default function Home() {
  const { scrollYProgress } = useScroll();

  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden ">
      <Navbar />

      <div className="flex flex-col relative w-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        >
          <Image
            src={HeroImage}
            alt="Hero Home"
            fill
            objectFit="cover"
            objectPosition="60% 50%"
            className="lg:max-h-[100dvh]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-[100px] ml-[148px] gap-3 flex flex-col lg:block lg:ml-auto lg:mr-[90px] lg:mt-[45px]"
        >
          <p className="bold-text uppercase leading-[14px] lg:hidden">
            Беспокойство <br /> ваших оппонентов.
          </p>
          <div className="w-[117px] h-[84px] lg:w-[135px] lg:h-[96px] relative">
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
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-row items-center bg-black text-white whitespace-nowrap text-[14px] mx-2.5 gap-2.5 overflow-hidden mt-[63dvh] pl-2.5 lg:mt-[80dvh] py-1"
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
        <div className="w-[calc(100dvw-20px)] mx-auto h-[240px] relative lg:h-screen">
          <Image src={Hero2} alt="Hero Home" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col items-center relative text-white pt-8 pb-12 lg:py-[84px]">
        <motion.div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src={Hero3}
            alt="Hero Home"
            fill
            objectFit="cover"
            objectPosition="10%"
          />
        </motion.div>
        <p className="bold-text uppercase">Знаем свои сильные стороны</p>
        <div className="lg:flex lg:flex-row lg:gap-3 flex flex-col max-lg:items-center">
          <div className="flex flex-row items-end gap-2 mt-4 lg:gap-3">
            <p className="bold-text leading-[16px] lg:leading-[22px]">01</p>
            <p className="big-text">Суд и арбитраж</p>
          </div>
          <div className="flex flex-row items-end gap-2 mt-1 lg:gap-3 ">
            <p className="bold-text leading-[16px] lg:leading-[22px]">02</p>
            <p className="big-text">Банкротство</p>
            <p className="bold-text leading-[16px] lg:leading-[22px]">03</p>
            <p className="big-text">M&A</p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-3 flex flex-col items-center">
          <div className="flex flex-row items-end gap-2 mt-1 lg:gap-3">
            <p className="bold-text leading-[16px] lg:leading-[22px]">04</p>
            <p className="big-text">Бизнес-конфликты</p>
          </div>
          <div className="flex flex-row items-end gap-2 mt-1 lg:gap-3 ">
            <p className="bold-text leading-[16px] lg:leading-[22px]">05</p>
            <p className="big-text">Медиация</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[100dvh] pl-2.5 pr-2 lg:px-[210px]">
          <p className="bold-text uppercase">
            руководствуемся простыми принципами
          </p>

          <div className="flex flex-row mt-8 lg:min-w-[780px]  lg:justify-between">
            <p className=" bold-text leading-[20px]">01</p>
            <p className="ml-[26px] mr-[29px] regular-text lg:-ml-12">
              Узкая специализация: мы делаем только то, что хорошо знаем
              и умеем.
            </p>
            <p className=" bold-text leading-[20px]">01</p>
          </div>

          <div className="flex flex-row mt-6 lg:max-w-[780px] ">
            <p className=" bold-text leading-[20px]">02</p>
            <p className="ml-[26px] mr-[29px] regular-text">
              Высокая юридическая кухня — качество документов, творческие
              и креативные рецепты.
            </p>
            <p className=" bold-text leading-[20px]">02</p>
          </div>
          <div className="flex flex-row mt-6 lg:max-w-[780px] ">
            <p className=" bold-text leading-[20px]">03</p>
            <p className="ml-[26px] mr-[29px] regular-text">
              Честные и долгосрочные отношения важнее заработка. Некоторые
              клиенты с нами больше 25 лет.
            </p>
            <p className=" bold-text leading-[20px]">03</p>
          </div>
          <div className="flex flex-row mt-6 lg:max-w-[780px] ">
            <p className=" bold-text leading-[20px]">04</p>
            <p className="ml-[26px] mr-[29px] regular-text">
              Наша главная ценность — команда. Она стабильна: костяк вместе
              больше десятилетия. Она преемственна: есть те, кому 50, 40, 30 и
              даже чуть за 20, наше прошлое, настоящее и будущее.
            </p>
            <p className=" bold-text leading-[20px]">04</p>
          </div>
          <div className="flex flex-row mt-6 lg:max-w-[780px] ">
            <p className=" bold-text leading-[20px]">05</p>
            <p className="ml-[26px] mr-[29px] regular-text">
              Каждое дело — это инвестиция. В саморазвитие, в развитие судебной
              практики и отношения с клиентом. 
            </p>
            <p className=" bold-text leading-[20px]">05</p>
          </div>
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
        <p className="bold-text">команда</p>

        <div className="lg:flex lg:flex-row lg:gap-8 lg:mt-3 flex flex-col items-center">
          <div className="flex flex-row gap-2 items-end mt-4 lg:mt-1">
            <p className="bold-text leading-[16px]">01</p>
            <p className="big-text underline underline-offset-4">
              Сергей Лисин
            </p>
          </div>
          <div className="flex flex-row gap-2 items-end mt-1">
            <p className="bold-text leading-[16px]">02</p>
            <p className="big-text underline">Алексей Ахуба</p>
          </div>
          <div className="flex flex-row gap-2 items-end mt-1">
            <p className="bold-text leading-[16px]">03</p>
            <p className="big-text underline">Ася Алфёрова</p>
          </div>
          <div className="flex flex-row gap-2 items-end mt-1">
            <p className="bold-text leading-[16px]">04</p>
            <p className="big-text underline">Алексей Рябов</p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-4 lg:mt-[30px] flex flex-col items-center">
          <div className="flex flex-row gap-1 items-end mt-6 uppercase bold-text lg:mt-2">
            <p>06</p>
            <p className="underline">Женя Орлов</p>
          </div>
          <div className="flex flex-row gap-1 items-end mt-2 uppercase bold-text ">
            <p>07</p>
            <p className="underline">Настя Рябова</p>
          </div>
          <div className="flex flex-row gap-1 items-end mt-2 uppercase bold-text ">
            <p>08</p>
            <p className="underline">Арина Русакевич</p>
          </div>
          <div className="flex flex-row gap-1 items-end mt-2 uppercase bold-text ">
            <p>09</p>
            <p className="underline">Ксеня Мерзлякова</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[106px] lg:mt-[96px]">
        <div className="w-[273px] h-[328px] relative lg:w-[calc(100vw-220px)] lg:h-[1140px]">
          <Image src={Hero6} alt="Hero Home" fill objectFit="cover" />
        </div>
        <motion.div
          className="w-[113px] h-[77px] -mt-[38px] relative lg:w-[386px] lg:h-[252px] lg:-mt-[100px]"
          style={{ y: y3 }}
        >
          <Image src={Hero7} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <p className="mt-16 bold-text text-center lg:mt-[52px]">
        внимательно относимся к деталям
      </p>

      <div className="flex flex-row items-end justify-between mt-4 px-2.5 lg:mt-3 lg:w-[calc(100vw-440px)] lg:mx-auto">
        <p className="bold-text">А</p>
        <p className="big-text">Изучите наши артефакты</p>
        <p className="bold-text">А</p>
      </div>

      {/* растягивать на больших */}
      <motion.div
        className="flex flex-row justify-center gap-2.5 mt-[45px] lg:mt-[52px]"
        // style={{
        //   x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        // }}
      >
        <div className="w-[50px] h-[72px] flex-none relative stroke-none">
          <Image src={Slider1} alt="Slider Image 1" fill objectFit="cover" />
        </div>
        <div className="w-[93px] h-[60px] flex-none relative stroke-none">
          <Image src={Slider2} alt="Slider Image 2" fill objectFit="cover" />
        </div>
        <div className="w-[147px] h-[96px] flex-none relative">
          <Image src={Slider3} alt="Slider Image 3" fill objectFit="cover" />
        </div>
        <div className="w-[113px] h-[75px] -rotate-[37deg] flex-none relative">
          <Image src={Slider4} alt="Slider Image 4" fill objectFit="cover" />
        </div>
        <div className="w-[115px] h-[78px] flex-none relative">
          <Image src={Slider5} alt="Slider Image 5" fill objectFit="cover" />
        </div>
        <div className="w-[96px] h-[66px] flex-none relative">
          <Image src={Slider6} alt="Slider Image 6" fill objectFit="cover" />
        </div>
        <div className="w-[60px] h-[96px] flex-none relative">
          <Image src={Slider7} alt="Slider Image 7" fill objectFit="cover" />
        </div>
        <div className="w-[73px] h-[48px] flex-none relative">
          <Image src={Slider8} alt="Slider Image 8" fill objectFit="cover" />
        </div>
        <div className="w-[150px] h-[96px] flex-none relative">
          <Image src={Slider9} alt="Slider Image 9" fill objectFit="cover" />
        </div>
        <div className="w-[75px] h-[48px] flex-none relative">
          <Image src={Slider10} alt="Slider Image 10" fill objectFit="cover" />
        </div>
        <div className="w-[97px] h-[72px] flex-none relative">
          <Image src={Slider11} alt="Slider Image 11" fill objectFit="cover" />
        </div>
      </motion.div>

      <div className="flex flex-row mt-[32px]">
        <motion.div
          className="w-[308px] h-[480px] -ml-[209px] relative lg:w-[768px] lg:h-[1200px] lg:-ml-[371px] lg:rotate-0 lg:z-10"
          // style={{
          //   y:
          //     window.innerWidth < 1199
          //       ? useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
          //       : 0,
          // }}
        >
          <Image src={Hero9} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
        <motion.div
          className="w-[294px] h-[352px] relative lg:w-[1488px] lg:h-[984px]"
          // style={{
          //   y:
          //     window.innerWidth < 1199
          //       ? useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
          //       : 0,
          // }}
        >
          <Image
            src={Hero8}
            alt="Hero Home"
            fill
            objectFit="cover"
            objectPosition={window.innerWidth < 1199 ? "20%" : "50%"}
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center lg:gap-0">
        <motion.div
          className="w-[111px] h-[76px] relative z-10 lg:w-[406px] lg:h-[254px]"
          // style={{
          //   y:
          //     window.innerWidth < 1199
          //       ? useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
          //       : 0,
          // }}
        >
          <Image src={Hero10} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
        <motion.div
          className="w-[273px] h-[396px] relative lg:w-[978px] lg:h-[1428px] "
          // style={{
          //   y:
          //     window.innerWidth < 1199
          //       ? useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
          //       : 0,
          // }}
        >
          <Image src={Hero11} alt="Hero Home" fill objectFit="cover" />
        </motion.div>
      </div>

      <p className="uppercase bold-text mt-[128px] text-center" id="contacts">
        и решаем ваши задачи здесь и сейчас
      </p>

      <div className="flex flex-col px-2.5 mt-4 gap-1 lg:w-[calc(100vw-440px)] lg:mx-auto">
        <div className="flex flex-row items-end justify-between">
          <p className="bold-text -translate-y-1">П.</p>
          <p className="big-text">office@alxlegal.com</p>
          <p className="bold-text -translate-y-1">П.</p>
        </div>
        <div className="flex flex-row items-start lg:items-start justify-between">
          <p className="bold-text translate-y-3 lg:translate-y-1">А.</p>
          <p className="big-text text-center">
            Москва,1-й Тружеников переулок, 17А
          </p>
          <p className="bold-text translate-y-3 lg:translate-y-1">А.</p>
        </div>
        <div className="flex flex-row items-end justify-between">
          <p className="bold-text -translate-y-1">Т.</p>
          <p className="big-text text-center">+7 499 455-1-777</p>
          <p className="bold-text -translate-y-1">Т.</p>
        </div>
        <div className="flex flex-row items-end justify-between">
          <p className="bold-text -translate-y-1">Т.</p>
          <p className="big-text text-center">Телеграм</p>
          <p className="bold-text -translate-y-1">Т.</p>
        </div>
      </div>

      <div className="w-full h-[248px] mt-[64px] relative lg:h-[804px] lg:mt-[156px]">
        <Image src={Hero12} alt="Hero Home" fill objectFit="cover" />
      </div>
      <p className="regular-text text-center max-lg:text-[12px] mt-8">
        Коллегия адвокатов города Москвы «А-ЭЛ-ИКС Партнеры»
      </p>
      <p className="bold-text text-center max-lg:text-[10px] mt-1.5 uppercase">
        ©2024 <span className="underline">Политика конфиденциальности</span>
      </p>

      <div className="mt-16 w-[200px] h-[128px]  relative mx-auto lg:w-[386px] lg:h-[240px]">
        <Image src={Hero13} alt="Hero Home" fill objectFit="cover" />
      </div>
      <div className="mt-[128px] w-screen h-screen relative lg:h-[200dvh] lg:mt-[216px]">
        <Image src={Hero14} alt="Hero Home" fill objectFit="cover" />
      </div>
    </div>
  );
}

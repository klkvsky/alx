"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";

import Image from "next/image";

// import Hero1 from "@/public/Partnets/Hero1.png";
// import Hero2 from "@/public/Partnets/Hero2.png";

import Sergey1 from "@/public/Partnets/Sergey/1.jpg";
import Sergey2 from "@/public/Partnets/Sergey/2.jpg";
import Sergey3 from "@/public/Partnets/Sergey/3.jpg";
import Sergey4 from "@/public/Partnets/Sergey/4.jpg";
import Sergey5 from "@/public/Partnets/Sergey/5.jpg";

import Alexey1 from "@/public/Partnets/Alexey/1.jpg";
import Alexey2 from "@/public/Partnets/Alexey/2.jpg";
import Alexey3 from "@/public/Partnets/Alexey/3.jpg";
import Alexey4 from "@/public/Partnets/Alexey/4.jpg";
import Alexey5 from "@/public/Partnets/Alexey/5.jpg";
import Alexey6 from "@/public/Partnets/Alexey/6.jpg";

import Asya1 from "@/public/Partnets/Asya/1.jpg";
import Asya2 from "@/public/Partnets/Asya/2.jpg";
import Asya3 from "@/public/Partnets/Asya/3.jpg";
import Asya4 from "@/public/Partnets/Asya/4.jpg";
import Asya5 from "@/public/Partnets/Asya/5.png";

import AlexeyR1 from "@/public/Partnets/Alexey2/1.png";
import AlexeyR2 from "@/public/Partnets/Alexey2/2.png";
import AlexeyR3 from "@/public/Partnets/Alexey2/3.png";
import AlexeyR4 from "@/public/Partnets/Alexey2/4.png";

import Evgeny1 from "@/public/Partnets/Evgeniy/1.png";
import Evgeny2 from "@/public/Partnets/Evgeniy/2.png";
import Evgeny3 from "@/public/Partnets/Evgeniy/3.png";
import Evgeny4 from "@/public/Partnets/Evgeniy/4.png";
import Evgeny5 from "@/public/Partnets/Evgeniy/5.png";

import Anastasia1 from "@/public/Partnets/Anastasya/1.png";
import Anastasia2 from "@/public/Partnets/Anastasya/2.png";
import Anastasia3 from "@/public/Partnets/Anastasya/3.png";
import Anastasia4 from "@/public/Partnets/Anastasya/4.png";
import Anastasia5 from "@/public/Partnets/Anastasya/5.png";
import Anastasia6 from "@/public/Partnets/Anastasya/6.png";

import Arina1 from "@/public/Partnets/Arina/1.png";
import Arina2 from "@/public/Partnets/Arina/2.png";
import Arina3 from "@/public/Partnets/Arina/3.png";
import Arina4 from "@/public/Partnets/Arina/4.png";

import Ksenia1 from "@/public/Partnets/Ksenya/1.png";
import Ksenia2 from "@/public/Partnets/Ksenya/2.png";
import Ksenia3 from "@/public/Partnets/Ksenya/3.png";
import Ksenia4 from "@/public/Partnets/Ksenya/4.png";
import Ksenia5 from "@/public/Partnets/Ksenya/5.png";

import background from "@/public/Partnets/Phon.jpg";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  // Calculate the transform value based on scroll progress
  const moveUpAnimation = useTransform(scrollYProgress, [0.9, 1], [0, -230]);

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

  function ScrollToTeamMember(member: string) {
    const pickedComponentRef = document.getElementById(member);
    const scrollToComponent = () => {
      const currentPosition = window.scrollY;
      const targetPosition =
        pickedComponentRef!.getBoundingClientRect().top + window.scrollY - 60;

      const distance = targetPosition - currentPosition;
      const duration = 1500;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(
          0,
          currentPosition + distance * easeInOutCubic(percentage)
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    scrollToComponent();
  }

  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = totalHeight - viewportHeight;
      const threshold = scrollableHeight * 0.95; // 95% of scrollable height

      setVisible(latest > viewportHeight && latest < threshold);
    });
  }, [scrollY]);

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden text-white relative bg-black">
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

      <p className="bold-text ml-[94px] mt-[92px] uppercase md:mt-[314px] md:ml-[420px] lg:mt-[224px] lg:ml-[12px] z-10">
        КОМАНДА
      </p>

      <AnimatePresence initial={false} mode="wait">
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              bounce: 0,
            }}
            className="fixed top-[102px] left-0 flex flex-col mt-[24px] pl-2.5 gap-[12px] md:hidden z-10"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("sergey");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">01</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={Sergey4} alt="Sergey 1" fill objectFit="cover" />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("alexey");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">02</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={Alexey4} alt="Alexey 1" fill objectFit="cover" />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("asya");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">03</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={Asya5} alt="Asya 1" fill objectFit="cover" />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("alexey-r");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">04</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={AlexeyR4} alt="Alexey R 1" fill objectFit="cover" />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("evgeny");
              }}
              className="flex flex-row items-center mt-[28px] lg:mt-[52px]"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">05</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={Evgeny5} alt="Evgeny 1" fill objectFit="cover" />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("anastasia");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">06</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image
                  src={Anastasia6}
                  alt="Anastasia 1"
                  fill
                  objectFit="cover"
                />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("arina");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">07</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={Arina4} alt="Arina 1" fill objectFit="cover" />
              </div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                ScrollToTeamMember("ksenia");
              }}
              className="flex flex-row items-center"
            >
              <p className="bold-text mt-0.5 w-[2.5ch]">08</p>
              <div className="w-[44px] h-[28px] relative ml-[15px]">
                <Image src={Ksenia5} alt="Ksenia 1" fill objectFit="cover" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={cn(
          "flex flex-col mt-[24px] pl-2.5 gap-[12px] md:max-lg:ml-[410px] lg:pl-[12px] lg:gap-[20px] lg:fixed lg:top-[272px] lg:z-0 lg:mt-0 z-10"
        )}
        id="team-members"
        style={{
          y: moveUpAnimation,
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("sergey");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">01</p>
          <div className="w-[44px] h-[28px] relative ml-[15px]">
            <Image src={Sergey4} alt="Sergey 1" fill objectFit="cover" />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Сергей Лисин
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("alexey");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">02</p>
          <div className="w-[44px] h-[28px] relative ml-[15px]">
            <Image src={Alexey4} alt="Alexey 1" fill objectFit="cover" />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Алексей Ахуба
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("asya");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">03</p>
          <div className="w-[44px] h-[28px] relative ml-[15px]">
            <Image src={Asya5} alt="Asya 1" fill objectFit="cover" />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Ася Алфёрова
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("alexey-r");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">04</p>
          <div className="w-[44px] h-[28px] relative ml-[15px]">
            <Image src={AlexeyR1} alt="Alexey R 1" fill objectFit="cover" />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Алексей Рябов
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("evgeny");
          }}
          className="flex flex-row items-center mt-[28px] lg:mt-[52px]"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">05</p>
          <div className="w-[44px] h-[28px] relative ml-[15px] overflow-hidden">
            <Image
              src={Evgeny1}
              alt="Evgeny 1"
              fill
              objectFit="cover"
              className="scale-[1.6] translate-y-1"
            />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Евгений Орлов
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("anastasia");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">06</p>
          <div className="w-[44px] h-[28px] relative ml-[15px] overflow-hidden">
            <Image
              src={Anastasia1}
              alt="Anastasia 1"
              fill
              objectFit="cover"
              className="scale-[1.6] translate-y-2"
            />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Анастасия Рябова
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("arina");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">07</p>
          <div className="w-[44px] h-[28px] relative ml-[15px] overflow-hidden">
            <Image
              src={Arina2}
              alt="Arina 1"
              fill
              objectFit="cover"
              className="scale-[1.6] translate-y-2"
            />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Арина Русакевич
          </p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            ScrollToTeamMember("ksenia");
          }}
          className="flex flex-row items-center"
        >
          <p className="bold-text mt-0.5 w-[2.5ch]">08</p>
          <div className="w-[44px] h-[28px] relative ml-[15px]">
            <Image src={Ksenia5} alt="Ksenia 1" fill objectFit="cover" />
          </div>
          <p className="regular-text underline underline-extension-2 ml-2.5 hover:no-underline">
            Ксения Мерзлякова
          </p>
        </button>
      </motion.div>

      <div
        className="flex flex-row items-end mt-16 lg:mt-[315px] lg:ml-[3.667vw] z-20 pointer-events-none"
        id="sergey"
      >
        <div className="w-[156px] h-[103px] relative flex-none md:w-[27vw] md:h-[17.7vw]">
          <Image src={Sergey1} alt="Sergey 1" fill objectFit="cover" />
        </div>
        <div className="w-[145px] h-[220px] relative flex-none -ml-[41px] md:-ml-[9.1vw] md:w-[25.2vw] md:h-[38.1vw]">
          <Image src={Sergey2} alt="Sergey 2" fill objectFit="cover" />
        </div>
        <div className="w-[199px] h-[132px] relative flex-none md:w-[34.5vw] md:h-[22.8vw]">
          <Image src={Sergey3} alt="Sergey 3" fill objectFit="cover" />
        </div>
        <div className="relative flex-none flex w-[146px] h-[96px] md:hidden">
          <Image src={Sergey4} alt="Sergey 3" fill objectFit="cover" />
        </div>
        <div className="relative flex-none flex w-[272px] h-[180px] md:w-[28.8vw] md:h-[19vw] md:-ml-[6.3vw] md:-z-10">
          <Image src={Sergey5} alt="Sergey 3" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw] pr-2.5 lg:ml-[25%] lg:w-[55.417vw] z-20">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Сергей Лисин</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5">
            управляющий партнёр, <br className="md:hidden" />
            адвокат
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text">01</span> Редкий день из последних 15 лет
          провёл не в арбитраже, выиграл сотни процессов на десятки миллиардов.{" "}
          <span className="bold-text">02</span> Создал несколько громких
          прецедентов <br /> в Верховном суде.{" "}
          <span className="bold-text">03</span> Отмечен
          <br className="md:hidden" /> в рейтингах Best Lawyers, Legal 500,
          Leaders League, Право.Ru-300, 100 влиятельных персон банкротства
          России. <span className="bold-text">04</span> Любим не только
          клиентами, <br className="md:hidden" /> но и профессиональными
          изданиями <br className="md:hidden" /> и студентами.{" "}
          <br className="max-md:hidden" />
          <span className="bold-text">05</span> До ALX строил карьеру в BGP
          litigation.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] z-20  pointer-events-none"
        id="alexey"
      >
        <div className="hidden relative flex-none lg:flex">
          <Image src={Alexey1} alt="Sergey 3" fill objectFit="cover" />
        </div>
        <div className="w-[166px] h-[110px] relative flex-none md:w-[24.3vw] md:h-[21.5vw]">
          <Image src={Alexey2} alt="Alexey 1" fill objectFit="cover" />
        </div>
        <div className="w-[148px] h-[220px] relative flex-none -ml-[56px] md:-ml-[6.4vw] md:w-[25.5vw] md:h-[38.1vw]">
          <Image src={Alexey3} alt="Alexey 2" fill objectFit="cover" />
        </div>
        <div className="w-[184px] h-[123px] relative flex-none -ml-[26px] md:-ml-[1.7vw] md:w-[36.9vw] md:h-[24.4vw]">
          <Image src={Alexey4} alt="Alexey 3" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none lg:flex">
          <Image src={Alexey5} alt="Sergey 3" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[28.2vw] md:h-[18.7vw] md:-ml-[2.9vw]">
          <Image src={Alexey6} alt="Sergey 3" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw] pr-2.5 lg:ml-[25%] lg:w-[55.417vw] z-10">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Алексей Ахуба</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5 lg:mt-0">
            старший партнёр
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text">01</span> Занимается юридической
          деятельностью с 1992 года, с начала рыночных реформ в России.
          <span className="bold-text"> 02</span> За его плечами работа
          на руководящих должностях в нескольких крупных финансовых,
          девелоперских и юридических компаниях.{" "}
          <span className="bold-text">03</span> Хорошо разбирается в цифрах и
          документах, а также немного в людях.{" "}
          <span className="bold-text">04</span> В последние годы сосредоточен на
          сопровождении крупных инвестиционных проектов{" "}
          <br className="md:hidden" /> и на урегулировании бизнес-конфликтов.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] z-20 pointer-events-none"
        id="asya"
      >
        <div className="w-[210px] h-[138px] relative flex-none md:w-[36.7vw] md:h-[24.3vw] md:-ml-[5.5vw]">
          <Image src={Asya1} alt="Asya 1" fill objectFit="cover" />
        </div>
        <div className="w-[330px] h-[220px] relative flex-none -ml-[96px] md:w-[48.5vw] md:h-[38.1vw] md:-ml-[13.4vw]">
          <Image src={Asya2} alt="Asya 2" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[15.3vw] md:h-[23.1vw]">
          <Image src={Asya3} alt="Asya 3" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[27.2vw] md:h-[17.9vw] md:-ml-[8.9vw] -z-10">
          <Image src={Asya4} alt="Asya 4" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw] pr-2.5 lg:ml-[25%] lg:w-[55.417vw] z-10">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Ася Алфёрова</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5 lg:mt-0">
            партнёр
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text"> 01 </span> Умеет вникнуть во всё,
          не пропустить ни буквы и встать за клиента горой.
          <span className="bold-text"> 02</span> К ней за помощью не раз
          обращались даже представители другой стороны.{" "}
          <br className="md:hidden" />
          <span className="bold-text">03 </span>15 лет разбирает по косточкам
          конфликты и гладко проводит любые поглощения, выстраивает сложнейшие
          сделки и становится основным коммуникатором{" "}
          <br className="md:hidden" /> для сторон.{" "}
          <span className="bold-text">04</span> За её плечами Платформа,
          АНТИ и BGP Litigation.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] pointer-events-none z-20"
        id="alexey-r"
      >
        <div className="hidden relative flex-none md:flex md:w-[24.8vw] md:h-[16.6vw]">
          <Image src={AlexeyR1} alt="Alexey R 1" fill objectFit="cover" />
        </div>
        <div className="w-[197px] h-[131px] relative flex-none overflow-hidden md:w-[36.2vw] md:h-[24.1vw] md:-ml-[13.7vw] md:-z-10">
          <Image src={AlexeyR2} alt="Alexey R 1" fill objectFit="cover" />
        </div>
        <div className="w-[330px] h-[220px] relative flex-none -ml-[96px] md:w-[55vw] md:h-[38.1vw] md:ml-0">
          <Image src={AlexeyR3} alt="Alexey R 2" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none lg:flex">
          <Image src={AlexeyR4} alt="Alexey R 1" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw] pr-2.5 lg:ml-[25%] lg:w-[56.833vw] z-10">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Алексей Рябов</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5 lg:mt-0">
            партнёр
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text">01</span> Глубокий знаток права
          и подлинный русский интеллигент, треть века в профессии.{" "}
          <span className="bold-text">02</span> Долгое время занимался
          юридической наукой и нёс свет знаний студентам в родной МГЮА, автор
          учебников и монографий. А затем более 10 лет возглавлял
          Экспертно-правовой центр Уполномоченного при Президенте РФ по защите
          прав предпринимателей (бизнес-омбудсмена).{" "}
          <br className="max-md:hidden" />
          <span className="bold-text">03</span> Входил{" "}
          <br className="md:hidden" /> в различные постоянные экспертные группы
          при Верховном суде РФ, Генеральной прокуратуре РФ, Министерстве
          юстиции РФ, Федерального арбитражного суда Московского округа, был
          экспертом Союза Европы в проектах защиты предпринимателей, многократно
          участвовал в рассмотрении вопросов Конституционным судом РФ. Мало кто
          сравнится с ним <br className="md:hidden" /> в понимании работы
          системы на её верхних этажах. <span className="bold-text">04</span>{" "}
          Награждён благодарностью Президента РФ.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] pointer-events-none z-20"
        id="evgeny"
      >
        <div className="w-[168px] h-[111px] relative flex-none md:w-[24.1vw] md:h-[21.5vw] md:-ml-[1.3vw]">
          <Image
            src={Evgeny1}
            alt="Evgeny 1"
            fill
            objectFit="cover"
            style={{
              transform: isMobile ? "translateX(-25%)" : "",
            }}
          />
        </div>
        <div className="w-[133px] h-[201px] relative flex-none -ml-[99px] md:w-[25.2vw] md:h-[38.1vw] md:-ml-[5vw]">
          <Image src={Evgeny2} alt="Evgeny 2" fill objectFit="cover" />
        </div>
        <div className="w-[115px] h-[161px] relative flex-none z-10 md:w-[21.8vw] md:h-[30.5vw] md:-ml-[3.3vw]">
          <Image src={Evgeny3} alt="Evgeny 3" fill objectFit="cover" />
        </div>
        <div className="w-[152px] h-[101px] relative flex-none -ml-[73px] z-0 md:w-[36.3vw] md:h-[24.1vw] md:-ml-[8.1vw]">
          <Image src={Evgeny4} alt="Evgeny 4" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[14.7vw] md:h-[21.6vw] md:-ml-[4.3vw] -z-10">
          <Image src={Evgeny5} alt="Evgeny 5" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] pr-2.5 lg:ml-[25%] lg:max-w-[58.333vw] md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw] z-10">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Евгений Орлов</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5 lg:mt-0">
            старший юрист
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text">01</span> Евгений имеет широкую
          специализацию. Он вёл как громкие судебные дела, так и сопровождал
          такие же громкие сделки. Общий рублёвый счетчик таких дел и сделок
          давно превысил 50 млрд рублей.<span className="bold-text"> 02</span>{" "}
          Составленные им процессуальные документы имеют особый и узнаваемый
          почерк — они лаконичны, пронизаны правом и в большинстве случаев
          приводят к судебным победам.
          <br className="max-md:hidden" />{" "}
          <span className="bold-text"> 03</span> С отличием окончил Российскую
          правовую академию Министерства Юстиции Российской Федерации
          (специалитет) в 2015 году, а впоследствии получил второе образование в
          Англии. <span className="bold-text">04</span> Любит большие скорости и
          тонкие колёса своего шоссейного велосипеда.{" "}
          <span className="bold-text">05 </span>
          До ALX работал в Lidings и BGP Litigation.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] lg:z-20 pointer-events-none z-20"
        id="anastasia"
      >
        <div className="hidden relative flex-none lg:flex lg:w-[13.667vw] lg:h-[14vw] lg:z-10">
          <Image src={Anastasia1} alt="Anastasya 1" fill objectFit="cover" />
        </div>
        <div className="w-[151px] h-[101px] relative flex-none md:w-[23.3vw] md:h-[19vw] md:ml-0">
          <Image
            src={Anastasia2}
            alt="Anastasia 1"
            fill
            objectFit="cover"
            style={{
              transform: isMobile ? "translateX(-20%)" : "",
            }}
          />
        </div>
        <div className="w-[135px] h-[200px] relative flex-none -ml-[41px] z-10 md:w-[25.4vw] md:h-[38.1vw] md:-ml-[5.5vw]">
          <Image src={Anastasia3} alt="Anastasia 2" fill objectFit="cover" />
        </div>
        <div className="w-[232px] h-[153px] relative flex-none -ml-[47px] md:w-[43.9vw] md:h-[29.1vw] md:-ml-[8vw] md:-z-10">
          <Image src={Anastasia4} alt="Anastasia 3" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[24.9vw] md:h-[16.5vw] md:-ml-[13.8vw]">
          <Image src={Anastasia5} alt="Anastasya 4" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[13.6vw] md:h-[11.3vw] md:-ml-[4.1vw]">
          <Image src={Anastasia6} alt="Anastasya 5" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] pr-2.5 lg:ml-[25%] lg:max-w-[54.583vw] z-20 md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw]">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Анастасия Рябова</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5 lg:mt-0">
            адвокат
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text"> 01</span> В студенческие годы приняла
          непростое решение о совмещении работы по юридической специальности и
          учёбы в ВШЭ. К красным дипломам бакалавриата и магистратуры добавился
          еще гигантский прикладной опыт судебного представительства
          и подготовки процессуальных документов.{" "}
          <br className="max-md:hidden" />
          <span className="bold-text"> 02</span> Несколько лет такого симбиоза
          дали феноменальные плоды — Анастасия в 24 года получила статус
          адвоката, сдав один из самых сложных экзаменов в Адвокатской палате
          города Москвы. <span className="bold-text">03 </span>Имеет чётко
          выраженную литигаторскую специализацию (включая дела{" "}
          <br className="md:hidden" /> о банкротстве и оспаривание сделок).{" "}
          <span className="bold-text">04</span> Помимо участия{" "}
          <br className="md:hidden" /> в сложных судебных спорах, пробеждала
          десятки марафонов и проплыла сотни километров. Очаровательная,
          спортивная, уникальная. <span className="bold-text">05</span> До ALX
          работала в BGP Litigation.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] lg:z-20 pointer-events-none z-20"
        id="arina"
      >
        <div className="w-[191px] h-[127px] relative flex-none z-0 md:w-[28.75vw] md:h-[19vw]">
          <Image
            src={Arina1}
            alt="Arina 1"
            fill
            objectFit="cover"
            style={{
              transform: isMobile ? "translateX(-20%)" : "",
            }}
          />
        </div>
        <div className="w-[302px] h-[200px] relative flex-none z-10 md:w-[57.6vw] md:h-[38.1vw] -ml-[90px] md:-ml-[10.9vw]">
          <Image src={Arina2} alt="Arina 2" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[31.4vw] md:h-[20.8vw] md:-ml-[17.3vw] md:z-10">
          <Image src={Arina3} alt="Arina 3" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[17.3vw] md:h-[11.4vw] md:-ml-[6.9vw] md:z-10">
          <Image src={Arina4} alt="Arina 4" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] pr-2.5 lg:ml-[25%] lg:max-w-[56.833vw] z-20 md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw]">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Арина Русакевич</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5">
            помощник юриста
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text"> 01 </span> Первоначальная тяга
          к медицинским знаниям привела её к получению медицинского образования
          (с красным дипломом). Однако параллельно появилось новое увлечение и
          страсть — это право. <span className="bold-text"> 02</span> После
          того, как эти чувства окрепли и превратились{" "}
          <br className="md:hidden" /> во что-то большее, Арина приняла решение
          поступить в ВШЭ <br className="md:hidden" /> на факультет права.
          <span className="bold-text"> 03</span> Совмещает учёбу и работу.
          Талантливая, аккуратная, внимательная. Поразила всех нас несколько лет
          назад глубиной юридических знаний и логикой рассуждений.{" "}
          <span className="bold-text">04</span> Сейчас получает ежедневный
          практический опыт в литигаторской сфере.
        </p>
      </div>

      <div
        className="flex flex-row items-end mt-[128px] lg:mt-[192px] z-20 pointer-events-none"
        id="ksenia"
      >
        <div className="w-[166px] h-[110px] relative flex-none md:w-[17.8vw] md:h-[20.8vw]">
          <Image
            src={Ksenia1}
            alt="Ksenia 1"
            fill
            objectFit="cover"
            style={{
              transform: isMobile ? "translateX(-20%)" : "",
            }}
          />
        </div>
        <div className="w-[132px] h-[200px] relative flex-none md:w-[25.2vw] md:h-[38.1vw] -ml-[71px] md:ml-0">
          <Image src={Ksenia2} alt="Ksenia 2" fill objectFit="cover" />
        </div>
        <div className="w-[114px] h-[160px] relative flex-none z-10 md:w-[21.8vw] md:h-[30.5vw] md:-ml-[2.4vw]">
          <Image src={Ksenia3} alt="Ksenia 3" fill objectFit="cover" />
        </div>
        <div className="w-[152px] h-[101px] relative flex-none -ml-[52px] z-0 md:w-[28.9vw] md:h-[19.1vw] md:-ml-[8.1vw]">
          <Image src={Ksenia4} alt="Ksenia 4" fill objectFit="cover" />
        </div>
        <div className="hidden relative flex-none md:flex md:w-[21.1vw] md:h-[15.2vw] md:-ml-[4.4vw]">
          <Image src={Ksenia5} alt="Ksenia 5" fill objectFit="cover" />
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-[29%] pr-2.5 mb-16 lg:ml-[25%] lg:max-w-[56.833vw] md:z-20 md:ml-0 md:max-lg:max-w-[674px] md:max-lg:ml-[17.8vw]">
        <div className="flex flex-col md:flex-row md:items-end md:gap-[24px]">
          <p className="big-text">Ксения Мерзлякова</p>
          <p className="bold-text uppercase leading-[14px] mt-1.5">
            офис-менеджер
          </p>
        </div>
        <p className="regular-text mt-6">
          <span className="bold-text"> 01 </span> Фея офиса, обеспечивающая,
          чтобы все малозаметные, наиважнейшие шестерёнки крутились слаженно и в
          такт.<span className="bold-text"> 02</span> Лицо — украшение Коллегии,
          она создаёт гостям и резидентам максимальный комфорт и почти домашний
          уют в работе и общении. <span className="bold-text"> 03</span> Человек
          — ходячий позитив, заряжающий своей энергией, гасящий все негативные
          эмоции и исправляющий самое скверное настроение.{" "}
          <span className="bold-text">04</span> Кое-кто из клиентов считает, что
          её детище, офис, есть самое главное наше достижение.
        </p>
      </div>
    </div>
  );
}

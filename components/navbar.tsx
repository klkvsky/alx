"use client";

import Image from "next/image";
import Logo from "@/public/ALXLogo.png";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-row items-start pl-1 pr-2.5 fixed top-1 left-0 w-screen h-fit z-50 lg:pl-11 lg:top-1.5"
        style={{
          color: isOpen || pathname.includes("partners") ? "white" : "black",
        }}
      >
        <Image
          src={Logo}
          alt="ALX Logo"
          width={134}
          height={48}
          objectFit="contain"
          style={{
            filter:
              pathname.includes("partners") || isOpen ? "invert(1)" : "none",
          }}
          className="lg:w-[204px] lg:h-[60px]"
        />
        <div className="flex flex-col ml-[10px] translate-y-[24px] lg:ml-[63px] lg:translate-y-[45px]">
          <div className="flex flex-col gap-[3px] text-[10px] lg:text-[12px]">
            <p className="uppercase bold-text">коллегия адвокатов</p>
            <p className="uppercase font-oceanic leading-[10px] tracking-[0.2em] lg:text-[12px] lg:leading-[12px] lg:ml-[100%] whitespace-nowrap">
              M&A & Litigation
            </p>
          </div>
        </div>

        <div className="lg:flex flex-col lg:ml-[155px] translate-y-[45px] hidden">
          <div className="flex flex-col gap-[3px] text-[10px] lg:text-[12px]">
            <p className="uppercase bold-text">
              Беспокойство ваших оппонентов.
            </p>
            <Link
              href="/"
              className={cn(
                "bold-text mt-[30px] uppercase",
                pathname !== "/" && "underline underline-offset-8",
                pathname === "/partners"
                  ? "decoration-white/50"
                  : "decoration-black/50"
              )}
            >
              О нас
            </Link>
            <Link
              href="/partners"
              className={cn(
                "bold-text mt-3 uppercase",
                pathname !== "/partners" && "underline underline-offset-8",
                pathname === "/partners"
                  ? "decoration-white/50"
                  : "decoration-black/50"
              )}
            >
              Команда
            </Link>
            <Link
              href="/artifacts"
              className={cn(
                "bold-text mt-3 uppercase",
                pathname !== "/artifacts" && "underline underline-offset-8 ",
                pathname === "/partners"
                  ? "decoration-white/50"
                  : "decoration-black/50"
              )}
            >
              Артефакты
            </Link>
            <Link
              href="/#contacts"
              className={cn(
                "bold-text mt-3 uppercase underline underline-offset-8 ",
                pathname === "/partners"
                  ? "decoration-white/50"
                  : "decoration-black/50"
              )}
            >
              Контакты
            </Link>
          </div>
        </div>

        <button
          className="uppercase translate-y-[24px] ml-auto bold-text underline text-[10px] lg:hidden"
          style={{
            opacity: isOpen ? 0 : 1,
            pointerEvents: isOpen ? "none" : "auto",
            transition: "opacity 0.3s",
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          меню
        </button>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed top-0 left-0 w-screen h-[100dvh] bg-black z-40 flex flex-col items-center justify-center gap-6 text-white px-2.5"
          >
            {/* TODO: Фотку фоновую */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                },
              }}
              className="flex flex-row items-end justify-between w-full"
            >
              <p className="bold-text">01</p>
              <Link
                href="/"
                className={cn(
                  "big-text",
                  pathname !== "/" &&
                    "underline underline-offset-8  decoration-white/50"
                )}
              >
                О нас
              </Link>
              <p className="bold-text">01</p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                },
              }}
              className="flex flex-row items-end justify-between w-full"
            >
              <p className="bold-text">02</p>
              <Link
                href="/partners"
                className={cn(
                  "big-text",
                  pathname !== "/partners" &&
                    "underline underline-offset-8  decoration-white/50"
                )}
              >
                Команда
              </Link>
              <p className="bold-text">02</p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                },
              }}
              className="flex flex-row items-end justify-between w-full"
            >
              <p className="bold-text">03</p>
              <Link
                href="/artifacts"
                className={cn(
                  "big-text",
                  pathname !== "/artifacts" &&
                    "underline underline-offset-8  decoration-white/50"
                )}
              >
                Артефакты
              </Link>
              <p className="bold-text">03</p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                },
              }}
              className="flex flex-row items-end justify-between w-full"
            >
              <p className="bold-text">04</p>
              <p
                className={cn(
                  "big-text",
                  pathname !== "/contacts" &&
                    "underline underline-offset-8  decoration-white/50"
                )}
              >
                Контакты
              </p>
              <p className="bold-text">04</p>
            </motion.div>

            <motion.button
              whileTap={{
                scale: 0.9,
                opacity: 0.8,
              }}
              style={{
                position: "fixed",
                bottom: "40px",
              }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L25 25M25 1L1 25" stroke="#E8E8E8" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

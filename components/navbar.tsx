"use client";

import Image from "next/image";
import Logo from "@/public/ALXLogo.svg";
import LogoShort from "@/public/ALXLogoShort.svg";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setVisible(latest > window.innerHeight);
    });
  }, [scrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {visible && (
          <motion.div
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{ opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="hidden fixed top-0 left-0 w-screen z-50 mix-blend-difference p-3 lg:flex flex-row items-center gap-9"
          >
            <Link href="/">
              <Image
                src={LogoShort}
                alt="ALX Logo"
                width={124}
                height={20}
                objectFit="contain"
              />
            </Link>
            <Link
              href="/"
              className={cn(
                "text-white font-brutal font-bold text-[12px] leading-[12px] tracking-[0.2em] ml-auto uppercase",
                pathname !== "/" && "underline underline-extension"
              )}
            >
              О НАС
            </Link>
            <Link
              href="/partners"
              className={cn(
                "text-white font-brutal font-bold text-[12px] leading-[12px] tracking-[0.2em] uppercase",
                pathname !== "/partners" && "underline underline-extension"
              )}
            >
              Команда
            </Link>
            <Link
              href="/artifacts"
              className={cn(
                "text-white font-brutal font-bold text-[12px] leading-[12px] tracking-[0.2em] uppercase",
                pathname !== "/artifacts" && "underline underline-extension"
              )}
            >
              Артефакты
            </Link>
            <Link
              href="/#contacts"
              onClick={(e) => {
                e.preventDefault();
                const href = e.currentTarget.href;
                const targetId = href.split("#")[1];

                if (pathname === "/") {
                  scrollToCenter(targetId);
                } else {
                  router.push("/");
                  setTimeout(() => scrollToCenter(targetId), 300);
                }
              }}
              className={cn(
                "text-white font-brutal font-bold text-[12px] leading-[12px] tracking-[0.2em] uppercase underline underline-extension"
              )}
            >
              Контакты
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="flex flex-row items-start px-2.5 max-lg:fixed top-1 left-0 w-screen h-fit z-50 lg:relative lg:h-0 lg:pl-11 lg:top-1.5"
        style={{
          color: isOpen || pathname.includes("partners") ? "white" : "black",
        }}
      >
        <Link href="/">
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
        </Link>
        <div className="flex flex-col ml-[10px] translate-y-[24px] lg:ml-[63px] lg:translate-y-[35px]">
          <div className="flex flex-col gap-[3px] text-[10px] lg:text-[12px]">
            <p className="uppercase bold-text">коллегия адвокатов</p>
            <p className="uppercase font-oceanic leading-[10px] tracking-[0.2em] lg:text-[12px] lg:leading-[12px] lg:ml-[100%] whitespace-nowrap">
              M&A & Litigation
            </p>
          </div>
        </div>

        <div className="lg:flex flex-col lg:ml-[155px] translate-y-[35px] hidden">
          <div className="flex flex-col gap-[3px] text-[10px] lg:text-[12px]">
            <p className="uppercase bold-text">
              Беспокойство ваших оппонентов.
            </p>
            <Link
              href="/"
              className={cn(
                "bold-text mt-[30px] uppercase",
                pathname !== "/" && "underline underline-extension",
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
                pathname !== "/partners" && "underline underline-extension",
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
                pathname !== "/artifacts" && "underline underline-extension ",
                pathname === "/partners"
                  ? "decoration-white/50"
                  : "decoration-black/50"
              )}
            >
              Артефакты
            </Link>
            <Link
              href="/#contacts"
              onClick={(e) => {
                e.preventDefault();
                const href = e.currentTarget.href;
                const targetId = href.split("#")[1];

                if (pathname === "/") {
                  scrollToCenter(targetId);
                } else {
                  router.push("/");
                  setTimeout(() => scrollToCenter(targetId), 300);
                }
              }}
              className={cn(
                "bold-text mt-3 uppercase underline underline-extension ",
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
                  "big-text text-[24px]",
                  pathname !== "/" &&
                    "underline underline-extension  decoration-white/50"
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
                  "big-text text-[24px]",
                  pathname !== "/partners" &&
                    "underline underline-extension  decoration-white/50"
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
                  "big-text text-[24px]",
                  pathname !== "/artifacts" &&
                    "underline underline-extension  decoration-white/50"
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
              <Link
                href="/#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  const href = e.currentTarget.href;
                  const targetId = href.split("#")[1];

                  if (pathname === "/") {
                    scrollToCenter(targetId);
                  } else {
                    router.push("/");
                    setTimeout(() => scrollToCenter(targetId), 300);
                  }
                }}
                className={cn(
                  "big-text text-[24px]",
                  pathname !== "/contacts" &&
                    "underline underline-extension  decoration-white/50"
                )}
              >
                Контакты
              </Link>
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

export const scrollToCenter = (elementId: string) => {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const navbarHeight = 100; // Adjust based on your navbar height
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset;
    const windowCenter = window.innerHeight / 2;
    const elementCenter = elementRect.height / 2;
    const scrollTo = elementTop - windowCenter + elementCenter - navbarHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  }, 10);
};

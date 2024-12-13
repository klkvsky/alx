"use client";

import Navbar from "@/components/navbar";

import Image from "next/image";

import Image1 from "@/public/Artifacts/Image1.jpg";
import Image2 from "@/public/Artifacts/Image2.jpg";
import Image3 from "@/public/Artifacts/Image3.jpg";
import Image4 from "@/public/Artifacts/Image4.jpg";
import Image5 from "@/public/Artifacts/Image5.jpg";
import Image6 from "@/public/Artifacts/Image6.jpg";
import Image7 from "@/public/Artifacts/Image7.jpg";
import Image8 from "@/public/Artifacts/Image8.jpg";
import Image9 from "@/public/Artifacts/Image9.jpg";
import Image10 from "@/public/Artifacts/Image10.jpg";
import Image11 from "@/public/Artifacts/Image11.jpg";
import Image12 from "@/public/Artifacts/Image12.jpg";
import Image13 from "@/public/Artifacts/Image13.jpg";
import Image14 from "@/public/Artifacts/Image14.jpg";
import Image15 from "@/public/Artifacts/Image15.jpg";
import Image16 from "@/public/Artifacts/Image16.jpg";
import Image17 from "@/public/Artifacts/image17.jpg";

import ImageX from "@/public/Artifacts/ImageForgot.png";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === "/partners") {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "";
  //   }
  // }, [router.pathname]);

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden">
      <Navbar />

      <p className="bold-text text-center mt-[308px] uppercase lg:mt-[272px]">
        Артефакты
      </p>

      <div className="relative mt-16 lg:mt-[60px]">
        <div className="w-full h-[216px] relative group overflow-hidden lg:h-[684px]">
          <Image
            src={Image1}
            alt="Image 1"
            fill
            objectFit="cover"
            style={{
              scale: 1.6,
              transform: "translateX(-14%)",
              zIndex: 10,
            }}
          />
        </div>
        <p className="bold-text absolute left-[150px] lg:left-[487px] top-4">
          01
        </p>
      </div>
      <div className="w-[273px] h-[186px] relative mx-auto -mt-[66px] lg:w-[978px] lg:h-[660px] lg:-mt-[276px]">
        <Image src={Image2} alt="Image 2" fill objectFit="cover" />
      </div>

      <p className="bold-text ml-[150px] lg:ml-[487px] mt-16 lg:mt-[120px]">
        02
      </p>
      <div className="w-full h-[256px] relative mt-3 lg:h-[804px]">
        <Image src={Image3} alt="Image 3" fill objectFit="cover" />
      </div>

      <p className="bold-text ml-[150px] lg:ml-[487px] mt-16 lg:mt-[132px]">
        03
      </p>
      <div className="w-[273px] h-[181px] mt-3 mx-auto relative lg:w-[584px] lg:h-[384px]">
        <Image src={Image4} alt="Image 4" fill objectFit="cover" />
      </div>

      <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:mt-[132px] lg:gap-[208px]">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
          <div className="w-[193px] h-[123px] mx-auto mt-16 relative lg:mx-0 lg:mt-0">
            <Image
              src={Image5}
              alt="Image 5"
              fill
              objectFit="cover"
              style={{
                transform: "scaleX(-1)",
              }}
            />
          </div>
          <p className="bold-text ml-[150px] lg:ml-0 mt-3">04</p>
        </div>

        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
          <div className="w-[193px] h-[123px] relative mx-auto mt-16 lg:mx-0 lg:mt-0">
            <Image
              src={Image6}
              alt="Image 6"
              fill
              objectFit="cover"
              style={{
                transform: "scaleX(-1)",
              }}
            />
          </div>
          <p className="bold-text ml-[150px] lg:ml-0 mt-3 ">05</p>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
          <div className="w-[193px] h-[123px] mx-auto mt-16 relative lg:mx-0 lg:mt-0">
            <Image
              src={Image7}
              alt="Image 7"
              fill
              objectFit="cover"
              style={{
                transform: "scaleX(-1)",
              }}
            />
          </div>
          <p className="bold-text ml-[150px] lg:ml-0 mt-3 ">06</p>
        </div>
      </div>

      <div className="w-full h-[240px] relative mx-auto lg:hidden">
        <Image src={Image8} alt="Image 8" fill objectFit="cover" />
      </div>
      <div className="w-full h-[240px] mx-auto relative lg:hidden">
        <Image src={Image10} alt="Image 10" fill objectFit="cover" />
      </div>
      <div className="w-full h-[240px] relative mx-auto lg:hidden">
        <Image
          src={Image9}
          alt="Image 9"
          fill
          objectFit="cover"
          style={{
            transform: "scaleX(-1)",
          }}
        />
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0 lg:w-screen lg:mt-[185px]">
        <div className="w-full h-[264px] relative">
          <Image src={Image8} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image10} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image9} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image
            src={Image9}
            alt="Image 8"
            fill
            objectFit="cover"
            style={{
              transform: "scaleX(-1)",
            }}
          />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image8} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image10} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image8} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image10} alt="Image 8" fill objectFit="cover" />
        </div>
        <div className="w-full h-[264px] relative">
          <Image src={Image9} alt="Image 8" fill objectFit="cover" />
        </div>
      </div>

      <p className="bold-text ml-[150px] lg:ml-[487px] mt-3 ">07—09</p>

      <div className="w-[273px] h-[178px] relative mx-auto mt-[256px] lg:mt-[600px]">
        <Image src={Image5} alt="Image 11" fill objectFit="cover" />
      </div>
      <p className="bold-text ml-[150px] lg:ml-[487px] mt-3">10</p>

      <div className="w-full h-[161px] relative mt-16 lg:mt-6 lg:w-[672px] lg:h-[258px] lg:mx-auto">
        <Image
          src={Image11}
          alt="Image 12"
          fill
          objectFit="cover"
          objectPosition="50% 90%"
        />
      </div>
      <div className="w-full h-[246px] relative lg:w-[672px] lg:h-[444px] lg:mx-auto">
        <Image src={Image12} alt="Image 13" fill objectFit="cover" />
      </div>

      <p className="bold-text ml-[150px] lg:ml-[487px] mt-3 ">11</p>

      <div className="w-[193px] h-[24px] relative mt-16 mx-auto lg:w-[188px] lg:mt-6">
        <Image src={ImageX} alt="Image 14" fill objectFit="cover" />
      </div>
      <div className="w-[193px] h-[124px] relative mx-auto lg:w-[188px] lg:h-[120px]">
        <Image src={Image13} alt="Image 15" fill objectFit="cover" />
      </div>

      <p className="bold-text ml-[150px] lg:ml-[487px] mt-[256px] lg:mt-[600px]">
        12
      </p>

      <div className="w-full h-[562px] relative mt-3 lg:h-[1800px]">
        <Image src={Image14} alt="Image 16" fill objectFit="cover" />
      </div>
      <div className="w-[193px] h-[125px] relative mx-auto -mt-[17.5%] lg:w-[306px] lg:h-[204px]">
        <Image src={Image15} alt="Image 17" fill objectFit="cover" />
      </div>

      <p className="bold-text ml-[150px] lg:ml-[487px] mt-16 lg:mt-6">13</p>
      <div className="w-[233px] h-[473px] relative mt-3 ml-[25%] lg:ml-auto lg:mr-[111px] lg:w-[385px] lg:h-[792px]">
        <Image
          src={Image16}
          alt="Image 18"
          fill
          objectFit="cover"
          objectPosition="70%"
        />
      </div>

      <div className="w-[273px] h-[170px] relative mt-[256px] mx-auto lg:mt-[948px] lg:w-[386px] lg:h-[240px]">
        <Image src={Image17} alt="Image 19" fill objectFit="cover" />
      </div>
      <p className="bold-text ml-[150px] lg:ml-[487px] mt-3 mb-16">14</p>
    </div>
  );
}

import Navbar from "@/components/navbar";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { getAllPosts, Post } from "@/sanity/lib/queries";

import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden bg-[#E8E8E8] min-h-screen">
      <Navbar />

      <div className="bg-[#171818] w-full text-white pt-[244px] pb-[32px] h-fit md:pt-[344px] lg:pt-[440px] lg:pb-[36px] lg:mx-auto lg:w-[calc(100vw-24px)]">
        <p className="bold-text uppercase pl-[49px] md:pl-[78px] max-w-[353px] md:max-w-[674px] lg:max-w-[584px] mx-auto w-full">
          новости
        </p>

        <div className="flex flex-col mt-[64px] px-[11px] gap-y-[10px] max-w-[353px] md:max-w-[674px] lg:max-w-[780px] mx-auto w-full  lg:px-0">
          {posts.slice(0, 4).map((post, idx) => (
            <div className="flex flex-row" key={post._id}>
              <p className="bold-text leading-[22px] md:leading-[24px] w-[14px]">
                {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
              </p>
              <p className="mx-[25px] regular-text w-full text-left md:mx-[54px] lg:mx-[75px]">
                <span className="underline underline-extension-2">
                  {post.titleLink}
                </span>
                {post.titleNormal && <span>{post.titleNormal}</span>}
              </p>
              <p className="bold-text leading-[22px] md:leading-[24px] w-[14px]">
                {" "}
                {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {posts.map((post, idx) => (
          <>
            <NewsItem
              key={post._id}
              post={post}
              index={idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
            />
            <div className="w-full h-px bg-[#171818]/20" key={idx} />
          </>
        ))}
      </div>
    </div>
  );
}

function NewsItem({ post, index }: { post: Post; index: string }) {
  return (
    <Link
      href={post.sourceLink}
      key={post._id}
      className="flex flex-col pt-[16px] px-[11px] pb-[64px] md:pb-[108px] md:pt-3 md:px-3 max-w-[353px] md:max-w-[674px] lg:max-w-[780px] mx-auto w-full lg:pb-[132px] lg:pt-[24px] lg:px-0"
    >
      <div className="flex flex-row">
        <p className=" bold-text w-[10px] lg:w-fit">{index}</p>
        <p className=" bold-text ml-[28px] md:ml-[51px] lg:ml-[78px]">
          {new Date(post.date).toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className=" bold-text ml-[10px] md:ml-[112px] lg:ml-[112px]">
          {post.source}
        </p>
        <p className=" bold-text w-[10px] lg:w-fit ml-auto">{index}</p>
      </div>

      {post.mainImage && (
        <Image
          src={post.mainImage.asset.url}
          alt="Picture of the author"
          width={273}
          height={273}
          className="mx-auto mt-[64px] md:mt-3 md:w-[calc(100vw-146px)] lg:w-[584px] lg:mt-[12px]"
        />
      )}

      <h1
        className={cn(
          "big-text max-w-[273px] mx-auto md:max-w-[calc(100vw-146px)] lg:max-w-[584px] text-left mr-auto",
          post.mainImage ? "mt-[16px] md:mt-[24px]" : "mt-[64px] md:mt-3"
        )}
      >
        <span className="underline underline-extension-2">
          {post.titleLink}
        </span>
        {post.titleNormal && <span>{post.titleNormal}</span>}
      </h1>

      {post.textType === "bigText" ? (
        <p className="w-full max-w-[273px] mx-auto mt-[24px] big-text text-center md:max-w-[calc(100vw-146px)] lg:max-w-[584px] md:mt-[48px] ">
          {post.text}
        </p>
      ) : (
        <p className="max-w-[273px] mx-auto mt-[24px] regular-text md:max-w-[calc(100vw-146px)] lg:max-w-[584px] md:mt-[48px]">
          {post.text}
        </p>
      )}
    </Link>
  );
}

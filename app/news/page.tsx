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

      <div className="bg-[#171818] h-[570px] w-full text-white pt-[244px] pb-[32px] lg:!h-fit lg:pt-[440px] lg:pb-[36px] lg:mx-auto lg:w-[calc(100vw-24px)]">
        <p className="bold-text uppercase ml-[49px] lg:max-w-[584px] lg:mx-auto lg:w-full">
          новости
        </p>

        <div className="flex flex-col mt-[64px] px-[11px] gap-y-[20px] lg:max-w-[780px] lg:mx-auto lg:w-full">
          {posts.slice(0, 4).map((post, idx) => (
            <div className="flex flex-row" key={post._id}>
              <p className="bold-text leading-[22px] lg:leading-[24px] w-[14px]">
                {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
              </p>
              <p className="mx-[25px] regular-text w-full underline underline-extension-2-x text-left lg:mx-[75px]">
                {post.titleLink}
              </p>
              <p className=" bold-text leading-[22px] lg:leading-[24px] w-[10px]">
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
      className="flex flex-col pt-[16px] px-[11px] pb-[64px] lg:max-w-[780px] lg:mx-auto lg:w-full"
    >
      <div className="flex flex-row">
        <p className=" bold-text w-[10px]">{index}</p>
        <p className=" bold-text ml-[28px] lg:ml-[78px]">{post.date}</p>
        <p className=" bold-text ml-[10px] lg:ml-[112px]">{post.source}</p>
        <p className=" bold-text w-[10px] ml-auto">{index}</p>
      </div>

      {post.mainImage && (
        <Image
          src={post.mainImage.asset.url}
          alt="Picture of the author"
          width={273}
          height={273}
          className="mx-auto mt-[64px] lg:w-[584px] lg:mt-[12px]"
        />
      )}

      <h1
        className={cn(
          "big-text w-[273px] mx-auto lg:w-[584px]",
          post.mainImage ? "mt-[16px] lg:mt-[24px]" : "mt-[64px] lg:mt-[12px]"
        )}
      >
        <span className="underline underline-extension-2">
          {post.titleLink}{" "}
        </span>
        {post.titleNormal && <span>{post.titleNormal}</span>}
      </h1>

      {post.textType === "bigText" ? (
        <p className="w-full max-w-[273px] mx-auto mt-[24px] big-text text-center lg:max-w-[584px] lg:mt-[48px]">
          {post.text}
        </p>
      ) : (
        <p className="w-full max-w-[273px] mx-auto mt-[24px] regular-text lg:max-w-[584px] lg:mt-[48px]">
          {post.text}
        </p>
      )}
    </Link>
  );
}

import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className=" py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Applying a gradient mask: fades in from transparent to black at 10%, stays black until 70%, and fades out to transparent */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className=" absolute inset-0   -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>

        {/* SVG Mask Definition */}
        {/* <svg width="0" height="0">
          <defs>
            <mask
              id="starMask"
              maskUnits="objectBoundingBox"
              maskContentUnits="objectBoundingBox"
            > */}
        {/* Transparent-to-black-to-transparent gradient for the mask */}
        {/* <linearGradient
                id="linearGradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="10%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient> */}

        {/* Use a rectangle to apply the gradient */}
        {/* <rect
                x="0"
                y="0"
                width="1"
                height="0.7"
                fill="url(#linearGradient)"
              />
            </mask>
          </defs>
        </svg> */}

        <HeroOrbit size={800} rotation={-70}>
          <StarIcon
            className="size-28 text-emerald-300"
            // style={{ mask: "url(#starMask)", WebkitMask: "url(#starMask)" }}
          />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* sparkleIcon */}

        <HeroOrbit size={430} rotation={-18}>
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79}>
          <StarIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178}>
          <StarIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144}>
          <StarIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* CircleIcon */}

        <HeroOrbit size={720} rotation={85}>
          <div className=" size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41}>
          <div className=" size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5}>
          <div className=" size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop
            "
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 0%, black 20%, transparent)",
            }}
            // style={{ mask: "url(#starMask)", WebkitMask: "url(#starMask)" }}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className=" max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className=" mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            projects.
          </p>
        </div>

        <div className="flex flex-col  md:flex-row justify-center  items-center mt-8 gap-4 ">
          <button className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className=" font-semibold">Explore My Wok</span>
            <ArrowDown className=" size-4" />
          </button>
          <button className=" inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>🙌</span>
            <span className=" font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

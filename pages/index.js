import Head from "next/head";
import Image from "next/image";
import TopBar from "../components/topBar";
import PlayBtn from "../assets/images/Group 18052.svg";
import GoogleBtn from "../assets/images/btn_google_signin_dark_normal_web@2x 1.png";
import BgImage from "../assets/images/Hero.svg";
import CompanyClient from "../components/companyClient";
import FeatureCard from "../components/featureCard";
import { featureMockData, carouselMockData } from "../assets/mockData/mock";
import Slider from "react-slick";
import ClientCard from "../components/clientCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/images/Group 17624.svg";
import RightArrow from "../assets/images/Group 17625.svg";

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute right-[-5.5rem] md:right-[-7rem] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%]"
      onClick={onClick}
    >
      <Image src={RightArrow} alt="Right Arrow" />
    </button>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute left-[-1rem] md:left-[-2rem]  top-[50%] z-10 translate-x-[-50%] translate-y-[-50%]"
      onClick={onClick}
    >
      <Image src={LeftArrow} alt="Left Arrow" />
    </button>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export default function Home() {
  return (
    <div className="px-[26px] md:px-0">
      <TopBar />
      <section className="bg-image h-[100vh] mx-[-26px] px-[26px] md:px-0 md:mx-0]">
        <div className="flex md:max-w-mw-4/5 mx-auto items-center md:pt-[100px] ">
          <div className="pt-[100px]">
            <h1 className="text-[24px] md:text-[46px] text-textMain font-paytone font-bold">
              Your search for a{" "}
              <span className="text-highlight">Reply.io Alternative</span> ends
              here
            </h1>
            <p className="text-[18px] py-4 font-normal md:max-w-mw-2/4">
              Klenty helps over 5000 winning sales teams stay organized, build
              new pipeline, move them through sales stages faster and generate
              predictable revenue.
            </p>
            <h6 className="cursor-pointer pb-4 flex items-center gap-2 text-violet">
              <Image src={PlayBtn} alt="Arrow Down" width={16} height={16} />
              Watch a Demo
            </h6>
            <button className="bg-violet text-white w-[172px] py-2 rounded-md uppercase text-sm font-semibold ">
              START FREE TRIAL
            </button>
          </div>
          <div className="hidden lg:block bg-bgMain rounded-sm px-[41px] py-[37px] h-full text-center self-end">
            <h4 className="font-bold whitespace-nowrap">
              Get started with your 14-day free trial
            </h4>
            <input
              type={"text"}
              placeholder="Enter Work Email"
              height={"49px"}
              className="rounded-sm border-2 border-[#DDDDDD] w-full p-2 my-4"
            />

            <button className="bg-violet w-full my-2 text-white py-2 rounded-md uppercase text-sm font-semibold ">
              sign up for free
            </button>
            <div className="text-[#DDDDDD] font-[16px] my-8 relative">
              <span className="divider">OR</span>
            </div>
            <Image src={GoogleBtn} alt="Google button" />
            <p className="text-violet font-light text-[12px]">
              * USE WORK EMAIL ONLY
            </p>
          </div>
        </div>
      </section>
      <CompanyClient />
      <section className="my-[91px] ">
        <h4 className="text-[24px] text-textMain font-paytone font-bold text-center">
          4 reasons why <span className="text-highlight">Klenty</span> is the
          best Reply.io Alternative
        </h4>
        <div className="md:flex gap-8 justify-center">
          {featureMockData.map((data, idx) => (
            <FeatureCard
              key={idx}
              imgSrc={data.src}
              title={data.title}
              desc={data.desc}
              descColor={data.descColor}
            />
          ))}
        </div>
      </section>
      <section
        style={{
          margin: "0 -2rem",
          padding: "2rem 2rem",
        }}
        className="bg-image"
      >
        <div className="bg-bgMain max-w-mw-90 md:max-w-mw-2/4 mx-auto">
          <Slider {...settings}>
            {carouselMockData.map((data, index) => (
              <ClientCard key={index} data={data} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

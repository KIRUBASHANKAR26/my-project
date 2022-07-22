import Image from "next/image";

const FeatureCard = ({ desc, title, imgSrc, descColor }) => {
  console.log(desc);
  return (
    <div
      style={{
        boxShadow: "0px 0px 20px 0px #0000001A",
      }}
      className="w-full flex flex-col items-center justify-center mt-[131px] max-w-[350px] bg-bgMain text-center h-[250px] relative"
    >
      <figure className="absolute top-[-55px] left-[50%] translate-x-[-50%] ">
        <Image src={imgSrc} alt="feature-img" width={110} height={110} />
      </figure>
      <p className="text-textMain max-w-[161px] mx-auto mt-4">{title}</p>
      <p className={`${descColor} font-bold max-w-[200px] mx-auto mt-4`}>
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;

import Image from "next/image";
import Company1 from "../assets/images/company-1.svg";
import Company2 from "../assets/images/company-2.svg";
import Company3 from "../assets/images/company-3.svg";
import Company4 from "../assets/images/company-4.svg";
import Company5 from "../assets/images/company-5.svg";
import Company6 from "../assets/images/company-6.svg";

const companyImg = [
  {
    src: Company1,
    alt: "company-1",
  },
  {
    src: Company2,
    alt: "company-2",
  },
  {
    src: Company3,
    alt: "company-3",
  },
  {
    src: Company4,
    alt: "company-4",
  },
  {
    src: Company5,
    alt: "company-5",
  },
  {
    src: Company6,
    alt: "company-6",
  },
];

const CompanyClient = () => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 20px 0px #0000001A",
      }}
      className=" bg-bgMain p-4 py-10 max-w-mw-4/5 mx-auto mt-[-72px]"
    >
      <h4 className="font-paytone text-[20px] md:text-[30px] text-textMain font-bold text-center ">
        Over <span className="text-highlight">5,000 Happy Customers</span> from
        Startups to Large Enterprises
      </h4>
      <div className="items-center grid gap-2 grid-cols-3 md:grid-cols-6 pt-8">
        {companyImg.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={150}
              height={18}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyClient;

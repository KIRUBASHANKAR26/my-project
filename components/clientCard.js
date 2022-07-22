import Image from "next/image";

const ClientCard = ({ data }) => {
  return (
    <div className="md:flex items-center justify-center text-center md:text-left gap-8 p-8">
      <figure>
        <Image
          src={data.src}
          alt="client"
          objectFit="cover"
          className="rounded-full"
          height={120}
          width={120}
        />
      </figure>

      <div className="md:max-w-mw-2/3">
        <Image
          src={data.beforeImage}
          alt="beforeImage"
          height={50}
          width={50}
          objectFit="cover"
          style={{
            marginLeft: "-0.5rem",
          }}
        />
        <p className="text-[12px] md:text-[16px] font-semibold md:font-bold text-textMain ">
          {data.desc}
        </p>
        <h4
          style={{
            color: data.nameColor,
          }}
          className={` font-paytone text-[20px] font-bold mt-2`}
        >
          {data.name}
        </h4>
        <p className="text-[10px] text-textMain mt-2">{data.design}</p>
      </div>
    </div>
  );
};

export default ClientCard;

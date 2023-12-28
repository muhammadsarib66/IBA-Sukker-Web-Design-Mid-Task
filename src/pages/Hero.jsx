import React from "react";
import HeroImg from "../assets/images/heroImg.png";
import User from "../assets/icons/User.svg";
import Email from "../assets/icons/Email.svg";
import Password from "../assets/icons/Password.svg";

const Hero = () => {
  const fields = [
    { icon: User, placeholder: "UserName" },
    { icon: Email, placeholder: "Email" },
    { icon: Password, placeholder: "Password" },
    { icon: Password, placeholder: "Confirm Password" },
  ];
  console.log(fields);
  return (
    <section className="flex flex-col md:flex-row  bg-[#2B2B2B]">
      <div className=" object-fill ">
        <img
          src={HeroImg}
          alt=""
          className="object-cover  w-full h-[232px] md:h-screen"
        />
      </div>
      <div className="flex  flex-col justify-center items-center   lg:pl-40 ">
        <div className="flex flex-col lg:w-[30rem]    text-white py-7 px-8 items-center self-center content-center justify-center  ">
          <p className="text-4xl font-semibold pb-6">Create Account</p>
          <p className="text-sm lg:text-lg pl-4    ">
            Welcome! enter your details anterd start creating, collecting and
            selling NFTs.
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-8 ">
          {fields.map((field) => (
            <span className=" text-lg  flex items-center gap-2 text-black bg-white rounded-full px-4 py-2 ">
              <img src={field.icon} alt="" />
              <input className="outline-none" placeholder={field.placeholder} />
            </span>
          ))}
          <span className=" flex text-sm  font-bold justify-center items-center gap-2 text-white bg-[#A259FF] rounded-full px-4 py-3 ">
            <p> Create account</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

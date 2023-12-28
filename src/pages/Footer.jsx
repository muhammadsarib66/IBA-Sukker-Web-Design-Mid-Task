import React from "react";
import navLogo from "../assets/icons/Storefront.svg";
import logoText from "../assets/icons/logo-text.svg";
import discord from "../assets/icons/Discordlogo.svg";
import youtube from "../assets/icons/Youtubelogo.svg";
import twitter from "../assets/icons/Twitterlogo.svg";
import insta from "../assets/icons/Instagramlogo.svg";
import Email from "../assets/icons/Email.svg";

const Footer = () => {
  const icons = [discord, youtube, twitter, insta];
  const detail = ["Marketplace", "Rankings", "Connect a wallet"];
  console.log(icons);
  return (
        <div className="bg-[#3B3B3B] h-auto px-8">
      <div className="bg-[#3B3B3B] text-[#CCCCCC] flex flex-col lg:flex-row lg:justify-between  lg:mx-32 lg:border-b-2 lg:border-[#858584]  gap-8 py-8   ">
      <div className="flex flex-col     gap-4 py-4 justify  -between lg:justify-normal">
        <span className="flex  gap-2">
          {" "}
          <img src={navLogo} alt="logo" />
          <img src={logoText} alt="logo" />
        </span>

        <p>NFT marketplace UI created with Anima for Figma.</p>
        <p> Join our community</p>

        <div className="flex gap-3 ">
          {icons.map((icon, index) => (
            <img src={icon} alt="" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h5 className="font-mono font-semibold text-lg text-white"> Explore</h5>
        {detail.map((item) => (
          <p className="text-sm ">{item}</p>
        ))}
      </div>
      <div className="flex flex-col gap-4 py-4 ">
        <span className="flex  ">
          <p className="font-mono font-semibold text-xl text-white capitalize tracking-widest ">
            {" "}
            Join our weekly digest{" "}
          </p>
        </span>
        <p className="text-sm ">
          {" "}
          Get exclusive promotions & updates straight to your inbox.{" "}
        </p>
        <div className="flex flex-col gap-4 md:hidden">
            <span className=" text-md  flex items-center  text-black bg-white rounded-full px-4 py-2 ">
              <input className="outline-none" placeholder="Enter you Email" />
            </span>

            <span className="flex text-sm  font-semibold justify-center items-center gap-2 text-[#CCCCCC] bg-[#A259FF] rounded-full px-4 py-3 ">
              <img src={Email} alt="" />

              <p> Create account</p>
            </span>
        </div>
            <span className="hidden  md:flex relative w-[23rem]">
                <input className=" md:block outline-none text-md  flex items-center   w-[30rem] text-black bg-white rounded-2xl px-4 py-4 " placeholder="Enter you Email" />
                    <span className="bg-[#A259FF] right-0 absolute rounded-2xl text-white  px-12 py-4 text-md]  "> Subcribe</span>
            </span>
          
      </div>
    <span className="text-sm lg:hidden  ">

<hr/>
<p className="pt-4"> Ⓒ NFT Market. Use this template freely.</p>
</span>


       
       
    </div>
    <div className="hidden lg:block mx-32 text-[#CCCCCC]">

    <p className="py-4"> Ⓒ NFT Market. Use this template freely.</p>
    </div>


   </div>
  );
};

export default Footer;


{/* <span className="text-sm py-4 bg-slate-700 ">

<hr/>
<p> Ⓒ NFT Market. Use this template freely.</p>
</span> */}


{/* <div className="bg-[#3B3B3B] hidden lg:block">

<div className="border-t-2 text-md border-[#CCCCCC] text-white  py-4">
  <p> Ⓒ NFT Market. Use this template freely.</p>
</div>
</div> */}
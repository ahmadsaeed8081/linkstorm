import React, { useState } from "react";
import Button from "../Button";
import Header from "../header";
import { Link } from "react-router-dom";
const Hero = () => {


  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/linkPDF.pdf");
    window.open(pdfUrl, "_blank");
  };



  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />

      <div className="container tw-mx-auto tw-relative tw-pt-6">
        <div className="row    sm:tw-text-left tw-text-center g-5 tw-items-center">
          <div className="col-lg-6 col-md-12">
            <span className=" tw-text-white tw-font-grotesk tw-text-xl tw-font-normal">
              Link Storm
            </span>
            <h1 className="  tw-pt-2 text-white   tw-font-grotesk  md:tw-text-5xl sm:tw-text-5xl tw-text-2xl">
              The Future of Passsive Crypto Income
            </h1>
            <p className=" tw-text-white sm:tw-text-start tw-text-center   tw-font-inter  tw-leading-7 tw-pt-4 tw-text-lg t">
              Stake. Refer. Earn. Multiply your earnings with our 15-level MLM +
              staking ecosystem.
            </p>

            <div  className=" tw-flex tw-flex-row  tw-justify-center sm:tw-justify-start sm:tw-gap-4 tw-gap-2 tw-items-center tw-pt-4">
              {/* <div>
                <Button
                  Icons={
                    <img
                     src={require("../../assets/images/Wallet.png")}
                      alt=""
                    />
                  }
                  className={"  tw-text-white   tw-font-inter sm:tw-text-base tw-text-xs tw-whitespace-nowrap tw-rounded-md "}
                  label={"Connect Wallet"}
                />
              </div> */}
              <div>
                <Button
                  Icons={
                    <img
                      src={require("../../assets/images/Walletb.png")}
                      alt=""
                    />
                  }
                  
                  className={" tw-z[100] tw-rounded-md tw-bg-white  tw-font-inter tw-whitespace-nowrap sm:tw-text-base tw-text-xs tw-text-primary "
                  }
                  onClick={openPdfInNewTab}

                  label={"Read Whitepapers"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="">
              <img
                src={require("../../assets/images/home.png")}
                className=" tw-w-full"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="row ">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 g-4 col-md-6 ">
              <div className=" tw-rounded-md ">
                <div className="   tw-text-center tw-bg-button-gradient tw-rounded-lg tw-h-32 tw-p-5">
                  <div className="tw-pb-8 ">
                    <h3 className="  tw-text-primary tw-text-3xl  tw-font-zen-dots ">
                      {member.name}
                    </h3>
                    <p className="tw-text-white m-0">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      </div>

      <div className=" tw-absolute tw-left-0 tw-top-0">
        <img src={require("../../assets/images/left_image.png")} alt="" />
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "0.0",
    role: "Total Users",
  },
  {
    name: "0.0",
    role: "Total Investment",
  },
  {
    name: "0.0",
    role: "Total Withdraw",
  },
];

export default Hero;

import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden">
        <div className="container sm:tw-text-left tw-text-center tw-py-10">
          <div className="row tw-items-center tw-text-center  tw-justify-center">
            <div className="col-md-8 tw-mx-auto">
              <h2 className=" tw-text-white tw-font-medium text-xl">Don’t miss out, Stay updated</h2>
              <p className="  tw-text-white    tw-font-light tw-font-inter tw-pt-4">
            Link Storm is a Polygon-based DeFi platform combining staking, multi-level income, and Web3 gaming. Built on smart contracts, it offers passive and active earning without central control.
              </p>

              <ul className=" tw-pt-2 tw-p-0 tw-flex tw-gap-4  tw-justify-center   tw-items-center">
                <li>
                  <Link
                    to={"#"}
                  >
                    <img src={require("../../assets/images/facebook.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/twitter.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/instagram.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/linkdien.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/youtube.png")} />
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
      <div className=" tw-bg-primary tw-w-full tw-py-2  tw-text-center">
        <p className=" sm:tw-text-base tw-text-sm tw-m-0 tw-text-white   tw-font-normal tw-font-poppins">
          Copyright @2025  All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

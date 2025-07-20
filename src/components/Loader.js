import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-cmp tw-flex  tw-items-center tw-absolute tw-h-full tw-w-full">
      <div className="tw-lds-dual-ring"></div>
      <ThreeCircles
        height="80"
        width="80"
        color="#3EAFFE"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;

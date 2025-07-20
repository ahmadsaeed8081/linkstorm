import React, { useState, useEffect } from 'react';

const StakingCounter = (props) => {
  const calculateTimeLeft = () => {
    const difference = Number(props.time) * 1000 - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [props.time]);

  return (
    <div className="tw-pt-3 tw-flex tw-flex-wrap tw-gap-2 sm:tw-gap-3 tw-justify-end">
    <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
      <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
        <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
          {String(timeLeft.days).padStart(2, "0")}
        </p>
      </div>
      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Days</p>
    </div>
    <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
      <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
        <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
          {String(timeLeft.hours).padStart(2, "0")}
        </p>
      </div>
      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Hours</p>
    </div>
    <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
      <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
        <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
          {String(timeLeft.minutes).padStart(2, "0")}
        </p>
      </div>
      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Minutes</p>
    </div>
    <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
      <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
        <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
          {String(timeLeft.seconds).padStart(2, "0")}
        </p>
      </div>
      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Second</p>
    </div>
  </div>
  );
};

export default StakingCounter;

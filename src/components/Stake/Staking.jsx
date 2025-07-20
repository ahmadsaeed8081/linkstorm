import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Tabs from "../../components/Tabs";
import { TiArrowSortedDown } from "react-icons/ti";

const Staking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const dropdownRef2 = useRef(null);


  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const dropdownRef3 = useRef(null);



  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const dropdownRef4 = useRef(null);


  const options = ["150 days", "Option 2", "Option 3"];
  const options2 = ["0", "60", "2323"];
  const options3 = ["7.78", "44.23", "3.54"];
  const options4 = ["7.78", "44.23", "3.54"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3= () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4= () => {
    setIsOpen4(!isOpen4);
  };


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOption2Click = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };


  const handleOption3Click = (option) => {
    setSelectedOption3(option);
    setIsOpen3(false);
  };


  const handleOption4Click = (option) => {
    setSelectedOption4(option);
    setIsOpen4(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsOpen2(false);
      }
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target)
      ) {
        setIsOpen3(false);
      }

      if (
        dropdownRef4.current &&
        !dropdownRef4.current.contains(event.target)
      ) {
        setIsOpen4(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
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
  }, []);

  const defaultTab = "Engage";

  const tabData = [
    {
      title: "Engage",
      content: (
        <>
          <div className="tw-border tw-border-textColor tw-rounded-md">
            <div className="tw-flex px-4 tw-py-3 tw-border-b  tw-border-textColor tw-justify-between tw-items-center">
              <div>
              <img src={require("../../assets/images/c5.png")} />
              </div>
              <p className="tw-m-0  tw-text-textColor tw-text-2xl tw-font-bold">
              Smaritan
              </p>
            </div>

           <div className=" p-4 tw-border-b   tw-border-textColor tw-flex tw-flex-col tw-gap-3">
          
            <div className="tw-flex  tw-justify-between tw-items-center">
              <p className="tw-m-0  tw-text-md tw-text-textColor text-semibold tw-font-poppins ">Use Obligation</p>
              <p className="tw-m-0   text-bold tw-font-poppins tw-text-textColor tw-text-md">9%</p>
            </div>
           </div>

            <div className="tw-flex-col tw-flex tw-justify-between tw-h-96 tw-p-6 tw-py-10">
              <div className="tw-flex tw-flex-col tw-gap-4">
            
                <div>
                <div className=" pb-3">
              <label className=" tw-text-textColor font-blod">Choose Lockups Time</label>
           <div className=" tw-mt-2.5">
            <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef4}
                  >
                    <button
                      onClick={handleToggle4}
                      className="tw-border-textColor tw-flex tw-justify-between tw-border tw-w-full tw-text-black tw-py-4 tw-items-center tw-px-4 tw-rounded-md tw-text-[17.15px] tw-leading-3"
                    >
                      <p className="tw-m-0 tw-border-textColor">
                        {selectedOption4 || "Select an option"}
                      </p>
                      <p className="tw-m-0">
                      <TiArrowSortedDown color="black" size={20} />

                      </p>
                    </button>
                    {isOpen4 && (
                      <ul className="tw-absolute tw-bg-white tw-p-0 tw-z-30 tw-bg- tw-text-[black] black tw-shadow-md tw-rounded-md tw-mt-2 tw-w-full">
                        {options4.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption4Click(option)}
                            className="tw-py-2 tw-px-4 tw-cursor-pointer tw-text-black hover:tw-bg-button-gradient"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
           </div>
        
       
             </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p className=" tw-font-poppins  text-semibold tw-text-textColor">
                      Write Amount
                    </p>
                    
                  </div>
                  <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef2}
                  >
                    <button
                      // onClick={handleToggle2}
                      className=" tw-border-textColor tw-flex tw-items-center tw-justify-between tw-border tw-w-full tw-text-black tw-py-3 tw-px-4 tw-rounded-md tw-text-[17.15px] tw-leading-3"
                    >
                      {/* <p className="tw-m-0">
                        {selectedOption2 || "Select an option"}
                      </p> */}
                      <input placeholder="100" className=" tw-w-full  tw-text-textColor tw-font-poppins  placeholder:tw-text-textColor tw-bg-transparent  tw-outline-none" />
                      <div className="tw-flex tw-items-center tw-gap-2">
                        <p className="tw-text-sm tw-m-0  text-bold tw-text-textColor">SMT</p>
                        <button className=" text-white tw-bg-button-gradient tw-py-1.5 tw-px-1 tw-text-sm tw-rounded-md">
                          Max
                        </button>
                      </div>
                    </button>
                    {isOpen2 && (
                      <ul className="tw-absolute tw-p-0 tw-bg-white border tw-text-black tw-shadow-lg tw-rounded-md tw-mt-2 tw-w-full">
                        {options2.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption2Click(option)}
                            className="tw-py-2 tw-px-4 tw-cursor-pointer tw-text-black hover:tw-bg-button-gradient"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>


                </div>
              </div>

              <div>
                <Button label={"Consent"} className={"tw-w-full  tw-text-white tw-font-zen-dots"} />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Disengage",
      content:(
        <>
        <div className="tw-border tw-border-textColor tw-rounded-md">
          <div className="tw-flex px-4 tw-py-3 tw-border-b  tw-border-textColor tw-justify-between tw-items-center">
            <img src={require("../../assets/images/c5.png")} />
            <p className="tw-m-0  tw-text-textColor tw-text-2xl tw-font-bold">
            Penalty
            </p>
          </div>

          <div className="tw-flex p-4  tw-justify-between tw-items-center">
            <p className="tw-m-0  tw-text-textColor  tw-font-zen-dots">Total Stake</p>
            <p className="tw-m-0  tw-font-zen-dots tw-text-textColor "> 10% </p>
          </div>

          <div className="tw-flex-col tw-flex tw-justify-between tw-h-96 tw-p-6 tw-py-10">
             <div>
              <label className=" tw-text-textColor ">Previous Investment</label>
              <div
                  className="tw-relative tw-mt-2 tw-w-full tw-inline-block"
                  ref={dropdownRef3}
                >
                  <button
                    onClick={handleToggle3}
                    className="tw-border-textColor tw-flex tw-justify-between tw-border tw-w-full tw-text-black tw-py-4 tw-items-center tw-px-4 tw-rounded-md tw-text-[17.15px] tw-leading-3"
                  >
                    <p className="tw-m-0 tw-border-textColor">
                      {selectedOption3 || "Select an option"}
                    </p>
                    <p className="tw-m-0">
                    <TiArrowSortedDown color="black" size={20} />

                    </p>
                  </button>
                  {isOpen3 && (
                    <ul className="tw-absolute tw-bg-white tw-p-0 tw-z-30 tw-bg- tw-text-[black] black tw-shadow-md tw-rounded-md tw-mt-2 tw-w-full">
                      {options3.map((option) => (
                        <li
                          key={option}
                          onClick={() => handleOption4Click(option)}
                          className="tw-py-2 tw-px-4 tw-cursor-pointer tw-text-black hover:tw-bg-button-gradient"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

           <div className=" tw-pt-2.5 tw-flex  tw-gap-2  tw-justify-end">
            <div className=" tw-flex tw-flex-wrap tw-gap-1">
              <div className="  tw-gap-1   tw-w-7 tw-justify-center  tw-font-poppins tw-rounded-sm tw-flex tw-items-center tw-bg-button-gradient">
                <p className=" tw-m-0 tw-text-sm tw-text-white tw-font-poppins tw-font-semibold">{String(timeLeft.days).padStart(2, '0')}</p>
              </div>

              <p className=" tw-m-0 tw-text-sm tw-text-textColor   tw-font-poppins">Days</p>

            </div>
            <div className=" tw-flex tw-flex-wrap tw-justify-center tw-gap-1">
              <div className="  tw-gap-1   tw-w-6  tw-justify-center  tw-rounded-sm tw-flex tw-items-center tw-bg-button-gradient">
                <p className=" tw-m-0 tw-text-white tw-font-poppins">{String(timeLeft.hours).padStart(2, '0')}</p>
              </div>

              <p className=" tw-m-0 tw-text-sm tw-text-textColor ">Hours</p>

            </div>
            <div className=" tw-flex tw-flex-wrap tw-justify-center tw-gap-1">
              <div className="  tw-gap-1   tw-w-6  tw-justify-center  tw-rounded-sm tw-flex tw-items-center tw-bg-button-gradient">
                <p className=" text-white tw-font-poppins tw-m-0 ">{String(timeLeft.minutes).padStart(2, '0')}</p>
              </div>

              <p className=" tw-m-0 tw-text-sm tw-text-textColor  tw-font-poppins">Minutes</p>

            </div>
            <div className=" tw-flex tw-flex-wrap tw-justify-center tw-gap-1">
              <div className="  tw-gap-1   tw-w-6  tw-justify-center  tw-rounded-sm tw-flex tw-items-center tw-bg-button-gradient">
                <p className=" tw-m-0 tw-text-white tw-font-poppins">   {String(timeLeft.seconds).padStart(2, '0')}</p>
              </div>

              <p className=" tw-m-0 tw-text-sm tw-text-textColor  tw-font-poppins">Second</p>

            </div>
           </div>
             </div>
            <div>
              <Button label={"Disengage"} className={"tw-w-full  text-white tw-font-zen-dots"} />
            </div>
          </div>
        </div>
      </>
      ),
    },
    {
      title: "Reward",
      content:(
        <>
        <div className="tw-border tw-border-textColor tw-rounded-md">
          <div className="tw-flex tw-mb-4 px-4 tw-py-3 tw-border-b  tw-border-textColor tw-justify-between tw-items-center">
            <img src={require("../../assets/images/c5.png")} />
            <p className="tw-m-0  tw-text-textColor tw-text-2xl tw-font-bold">
            Smaritan
            </p>
          </div>

          <div className="tw-flex px-4   tw-justify-between tw-items-center">
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-textColor">Total Earning</p>
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-[#2E94CB]">0</p>
          </div>


          <div className="tw-flex px-4  tw-pt-1 tw-justify-between tw-items-center">
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-textColor">Available withdrawal</p>
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-[#2E94CB]">0</p>
          </div>

          <div className="tw-flex-col   tw-flex tw-justify-between tw-h-96 tw-p-6 tw-py-10">
             <div>
              <label className=" tw-text-textColor">Investment History</label>
           <div className=" tw-mt-2.5">
            <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef4}
                  >
                    <button
                      onClick={handleToggle4}
                      className="tw-border-textColor tw-flex tw-justify-between tw-border tw-w-full tw-text-black tw-py-4 tw-items-center tw-px-4 tw-rounded-md tw-text-[17.15px] tw-leading-3"
                    >
                      <p className="tw-m-0 tw-border-textColor">
                        {selectedOption4 || "Select an option"}
                      </p>
                      <p className="tw-m-0">
                      <TiArrowSortedDown color="black" size={20} />

                      </p>
                    </button>
                    {isOpen4 && (
                      <ul className="tw-absolute tw-bg-white tw-p-0 tw-z-30 tw-bg- tw-text-[black] black tw-shadow-md tw-rounded-md tw-mt-2 tw-w-full">
                        {options4.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption4Click(option)}
                            className="tw-py-2 tw-px-4 tw-cursor-pointer tw-text-black hover:tw-bg-button-gradient"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
           </div>
           <div className="tw-flex  tw-pt-7   tw-gap-2  tw-justify-between tw-items-center">
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-border-textColor"> Earn Reward:</p>
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-border-textColor">0</p>
          </div>


          <div className="tw-flex  tw-pt-7   tw-gap-2  tw-justify-between tw-items-center">
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-border-textColor"> Pending Reward:</p>
            <p className="tw-m-0 tw-font-poppins tw-text-sm tw-border-textColor">0</p>
          </div>
         
             </div>
            <div>
              <Button label={"Claim"} className={"tw-w-full text-white tw-font-zen-dots"} />
            </div>
          </div>
        </div>
      </>
      ),
    },
  ];

  return (
    <div className="tw-bg-center  tw-relative  tw-bg-cover tw-w-full tw-h-auto">
      
      <div className="container md:tw-py-24 tw-py-3">
        <div className="row tw-items-center">
          <div className="col-lg-12 col-md-12 tw-mx-auto">
            <div className="mx-auto tw-bg-lightBlue">
              <Tabs tabs={tabData} defaultTab={defaultTab} />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Staking;
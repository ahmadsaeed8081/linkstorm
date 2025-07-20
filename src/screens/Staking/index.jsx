import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../components/Button";
import Footer from "../../components/footer";
import Tabs from "../../components/Tabs";

import StakingCounter from "../../components/StakingCounter";

import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  token_abi, 
  usdt_address,
  staking_cont_address,
  staking_cont_abi,
  USDT_address,       
} from "../../components/configs/Contracts";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";


const Staking = (props) => {

  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const { address,isConnected, isConnecting ,isDisconnected} = useAccount()

  const [count, set_count] = useState(0);
  const notify = () => toast("Transaction Successfull!");



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

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4 = () => {
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
    const difference = +new Date("2024-12-31T00:00:00") - +new Date();
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







  

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
  })

  const [stakeAmount, setStakedAmount] = useState(0);

  async function stake1() {


    try {
        const tx = await writeContractAsync({
          abi: staking_cont_abi,
          address: staking_cont_address,
          functionName: "Stake", 
          args: [
            (stakeAmount? Number(stakeAmount)*10**6 : 0)
          ],

        });

        set_count(1)

    } catch (err) {
        console.error(err);
    }
}

async function unstake1() {

  try {
      const tx = await writeContractAsync({
        abi: staking_cont_abi,
        address: staking_cont_address,
        functionName: "unStake", 
        args: [
          Number(selectedOption3[3])
        ],

      });

      set_count(1)

  } catch (err) {
      console.error(err);
  }
}


async function claim1() {

  try {
      const tx = await writeContractAsync({
        abi: staking_cont_abi,
        address: staking_cont_address,
        functionName: "withdrawReward", 
        // args: [
        //   Number(selectedOption4[3])
        // ],

      });

      set_count(1)

  } catch (err) {
      console.error(err);
  }
}

useEffect(()=>{
  if(isConfirmed)
  {
    if(count==0)
    {
      // alert("ninkn")
      stake1()

    }
    if(count==1)
    {
      set_count(0)
      notify()
      setStakedAmount(0)
      props.mount();
    }
  }


},[isConfirmed])

  async function usdt_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: USDT_address,
          args: [staking_cont_address,( stakeAmount ? Number(stakeAmount)*10**6 : "0")],
          functionName: "approve",

        }); 
        // stake1();
  
       } catch (err) {
        console.error(err);
    }
  }







  function Convert_To_eth(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://endpoints.omniatech.io/v1/arbitrum/sepolia/public	")
    );

    val = web3.utils.fromWei(val.toString(), "ether");
    return val;
  }

  function Convert_To_Wei(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://endpoints.omniatech.io/v1/arbitrum/sepolia/public	")
    );

    val = web3.utils.toWei(val.toString(), "ether");
    return val;
  }



  async function stake()
  {
    

    if(isDisconnected)
    {
      alert("kindly connect your wallet ");
      return;
    }

    if(stakeAmount==0 )
    {
      alert("kindly write amount to stake ");
      return;
    }

    // if(Number(stakeAmount) < Number(props.min_stake)/10**18 )
    // {
    //   alert("Minimum Stake amount is "+ Number(min_stake)/10**18);
    //   return;
    // }

    if(Number(props.usdt_balance)/10**6 < Number(stakeAmount))
    {
      alert("You don't have sufficient balance");
      return;
    }

    if(chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await usdt_approval?.();
    } 
    else 
    {
      await usdt_approval?.();
    }

  }


  async function unstake()
  {
    if(isDisconnected)
    {
      alert("kindly connect your wallet ");
      return;
    }

    if (chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await unstake1?.();
    } 
    else 
    {
      await unstake1?.();
    }
    

  }

  async function claim()
  {
    if(isDisconnected)
    {
      alert("kindly connect your wallet ");
      return;
    }

    if (chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await claim1?.();
    } 
    else 
    {
      await claim1?.();
    }
    

  }



  const defaultTab = "Stake";

  const tabData = [
    {
      title: "Stake",
      content: (
        <>
          <div className="tw-rounded-md">
            <div className="tw-flex tw-py-2 tw-pb-4 tw-justify-between tw-items-center">
              <p className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold">
                USDT
              </p>
              <img 
                src={require("../../assets/images/t_icon.png")} 
                className="tw-w-6 sm:tw-w-8"
                alt="USDT icon"
              />
            </div>

            <div className="tw-border-t tw-py-4 tw-border-b">
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-m-0 tw-text-white tw-font-normal tw-text-sm sm:tw-text-base">
                  Lock-up Period
                </p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">1 Year</p>
              </div>
              <div className="tw-flex tw-pt-3 tw-justify-between tw-items-center">
                <p className="tw-m-0 tw-text-white tw-font-normal tw-text-sm sm:tw-text-base">Fixed APY:</p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">300%</p>
              </div>
            </div>

            <div className="tw-flex-col tw-flex tw-justify-between tw-min-h-[300px] sm:tw-min-h-[384px] tw-py-6 sm:tw-py-10">
              <div className="tw-flex tw-flex-col tw-gap-4">
                <div>
                  <div className="tw-flex tw-flex-col xs:tw-flex-row tw-justify-between tw-items-start xs:tw-items-center tw-gap-2 xs:tw-gap-0">
                    <p className="tw-font-medium tw-text-white tw-text-sm sm:tw-text-base">
                      Amount: (Min $10 - Max $50)
                    </p>
                    <p className="tw-text-white tw-text-xs sm:tw-text-sm">
                      Balance: {props.usdt_balance?Number(props.usdt_balance)/10**6:0} USDT
                    </p>
                  </div>
                  <div
                    className="tw-relative tw-w-full tw-inline-block tw-mt-2"
                    ref={dropdownRef2}
                  >
                    <input
                      placeholder="Amount"
                      className="tw-w-full tw-p-2 sm:tw-p-3 tw-rounded-md tw-outline-none tw-text-sm sm:tw-text-base"
                      min={0}
                      value={stakeAmount}
                      max={props.usdt_balance>0?(Number(props.usdt_balance)/10**18):0}
                      onChange={(e)=>setStakedAmount(e.target.value)}
                    />

                    {isOpen2 && (
                      <ul className="tw-absolute tw-p-0 tw-bg-white tw-border tw-text-black tw-shadow-lg tw-rounded-md tw-mt-1 tw-w-full tw-max-h-40 tw-overflow-auto">
                        {options2.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption2Click(option)}
                            className="tw-py-2 tw-px-3 sm:tw-px-4 tw-cursor-pointer tw-text-sm sm:tw-text-base hover:tw-bg-gray-100"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="tw-mt-4 sm:tw-mt-0">
                <Button
                  onClick={stake} label={"Approve"}
                  className={"tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Unstake",
      content: (
        <>
          <div className="tw-rounded-md">
            <div className="tw-flex tw-py-2 tw-pb-4 tw-justify-between tw-items-center">
              <p className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold">
                USDT
              </p>
              <img 
                src={require("../../assets/images/t_icon.png")} 
                className="tw-w-6 sm:tw-w-8"
                alt="USDT icon"
              />
            </div>
            <div className="tw-flex p-4  tw-justify-between tw-items-center">
            <p className="tw-m-0  tw-text-white  tw-font-zen-dots">Total Stake</p>
            <p className="tw-m-0  tw-font-zen-dots tw-text-white ">                     {props.totalstakedAmount? Number(props.totalstakedAmount)/10**6:0} <span className=" tw-text-green">USDT</span> </p>
          </div>
            <div className="tw-flex-col tw-flex tw-justify-between tw-min-h-[300px] sm:tw-min-h-[384px] tw-py-6 sm:tw-py-10">
              <div>
                <label className="tw-text-white tw-text-sm sm:tw-text-base">Current Investments:</label>
                <div className="tw-mt-2">
                  <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef3}
                  >
                    <button
                      onClick={handleToggle3}
                      className="tw-bg-white tw-flex tw-justify-between tw-border tw-w-full tw-text-black tw-py-3 sm:tw-py-4 tw-items-center tw-px-3 sm:tw-px-4 tw-rounded-md tw-text-sm sm:tw-text-base"
                    >
                      <p className="tw-m-0 tw-truncate">
                      {selectedOption3 ? Number(selectedOption3[0])/10**6:"Select an option"}
                      </p>
                      <p className="tw-m-0">
                        <img
                          src={require("../../assets/images/bxs_up-arrow.png")}
                          className="tw-w-3 sm:tw-w-4"
                          alt="dropdown arrow"
                        />
                      </p>
                    </button>
                    {isOpen3 && (
                      <ul className="tw-absolute tw-p-0 tw-z-20 tw-bg-white tw-text-black tw-shadow-lg tw-rounded-md tw-mt-1 tw-w-full tw-max-h-40 tw-overflow-auto">
                    {props.staking_allInvestments?(

                      props.staking_allInvestments.map((item,index) => (
                      <li
                      onClick={() => {
                      handleOption3Click(item);
                      // setSelectedAmount(item);
                      // set_choosed_Unstake_inv(Number(item[index][3]));

                      }}
                      className="tw-py-2 tw-px-3 sm:tw-px-4 tw-cursor-pointer tw-text-sm sm:tw-text-base hover:tw-bg-gray-100"
                      >
                      {Number(item[0])/10**6}
                      </li>
                      ))
                      ):(null)}
                      </ul>
                    )}
                  </div>
                </div>
                <StakingCounter time={selectedOption3 ? Number(selectedOption3[1]):0}/>

                {/* <div className="tw-pt-3 tw-flex tw-flex-wrap tw-gap-2 sm:tw-gap-3 tw-justify-end">
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
                </div> */}
              </div>
              <div className="tw-mt-4 sm:tw-mt-0">
                <Button
                  onClick={unstake}
                  label={"Unstake"}
                  className={"tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Reward",
      content: (
        <>
          <div className="tw-rounded-md">
            <div className="tw-flex tw-mb-4 tw-py-3 tw-border-b tw-justify-between tw-items-center">
              <p className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold">
                USDT
              </p>
              <img 
                src={require("../../assets/images/t_icon.png")} 
                className="tw-w-6 sm:tw-w-8"
                alt="USDT icon"
              />
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
              <p className="tw-m-0 tw-font-inter tw-text-sm tw-text-white">
                Total Investment
              </p>
              <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-white">
              {props.totalstakedAmount? Number(props.totalstakedAmount)/10**6:0} usdt
              </p>
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
              <p className="tw-m-0 tw-font-inter tw-text-sm tw-text-white">
                Total Earnings
              </p>
              <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-white">
              {props.total_stakingEarning? (Number(props.total_stakingEarning)/10**6).toFixed(2):0} usdt

                
              </p>
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
              <p className="tw-m-0 tw-font-inter tw-text-sm tw-text-white">
                Available to Claim
              </p>
              <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-white">
              {props.total_stakingEarning? (((Number(props.total_stakingEarning))-(Number(props.staking_totalwithdraw)))/10**6).toFixed(2):0} usdt

              </p>
            </div>

            <div className="tw-flex-col tw-flex tw-justify-between tw-min-h-[300px] sm:tw-min-h-[384px] tw-py-6 sm:tw-py-10">
              <div>
                <label className="tw-text-white tw-text-sm sm:tw-text-base">Investment History</label>
                <div className="tw-mt-2">
                  <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef4}
                  >
                    <button
                      onClick={handleToggle4}
                      className="tw-border-[#2596EF] tw-flex tw-bg-white tw-justify-between tw-border tw-w-full tw-text-black tw-py-3 sm:tw-py-4 tw-items-center tw-px-3 sm:tw-px-4 tw-rounded-md tw-text-sm sm:tw-text-base"
                    >
                      <p className="tw-m-0 tw-truncate">
                      {selectedOption4 ? Number(selectedOption4[0])/10**6:"Select an option"}
                      </p>
                      <p className="tw-m-0">
                        <img
                          src={require("../../assets/images/bxs_up-arrow.png")}
                          className="tw-w-3 sm:tw-w-4"
                          alt="dropdown arrow"
                        />
                      </p>
                    </button>
                    {isOpen4 && (
                      <ul className="tw-absolute tw-bg-white tw-p-0 tw-z-30 tw-shadow-md tw-rounded-md tw-mt-1 tw-w-full tw-max-h-40 tw-overflow-auto">
                      {props.staking_allInvestments_reward?(
                      props.staking_allInvestments_reward.map((item,index) => (
                        <li
                          key={index}
                          onClick={() => handleOption4Click(item)}
                          className="tw-py-2 tw-px-3 sm:tw-px-4 tw-cursor-pointer tw-text-sm sm:tw-text-base hover:tw-bg-gray-100"
                        >
                          {Number(item[0])/10**6}

                        </li>
                      ))
                     ):(null)}
                      </ul>
                    )}

                  </div>
                  <div className="  tw-pt-1 tw-text-white tw-flex tw-gap-1 tw-items-center tw-justify-end">Earning: <span className=" tw-text-primary">{selectedOption4 ? (Number(selectedOption4[6])/10**6).toFixed(2):0}</span></div>
                </div>
              </div>
              <div className="tw-mt-4 sm:tw-mt-0">
                <Button
                onClick={claim}
                  label={"Claim"}
                  className={"tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="tw-bg-center tw-relative tw-bg-cover tw-w-full tw-h-auto">
      <div className="tw-max-w-4xl tw-mx-auto">
        <Tabs tabs={tabData} defaultTab={defaultTab} />
      </div>
    </div>
  );
};

export default Staking;
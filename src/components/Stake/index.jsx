import React, { useState } from "react";
import Staking from "../../screens/Staking";
import { GoCopy } from "react-icons/go";
import { FaRegStar, FaStar } from "react-icons/fa";
import ROI from "./ROI";
import TeamMemberShipModal from "../TeamMemberShipModal/TeamMemberShipModal";
import LeaderShipModal from "../LeaderShipBonus/LeaderShipBonus";
// import Web3 from "web3";
import {
  CopyToClipboard,
  PartnerIcon,
  CycleIcon,
} from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { polygon, polygonAmoy } from "wagmi/chains";
import Loader from "../../../src/components/Loader.js";

const StakeComponent = (props) => {
  const [tabs,setTabs] = useState('roi')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addressCopy_notify = () => toast("address is Copied!");

  const link_notify = () => toast("Referral Link Copied!");


  return (
    
    
      <div className="container tw-relative tw-pt-11">
              <LeaderShipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <div className="  tw-bg-lightBlue tw-rounded-full  tw-justify-center tw-items-center tw-mx-auto tw-mb-12 tw-flex tw-w-64 p-2">
            <button onClick={()=>setTabs('staking')} className={`  ${tabs==="staking"?'tw-bg-primary':''} tw-rounded-full tw-py-2 tw-px-10 tw-font-light tw-text-white`}>Staking</button>
            <button onClick={()=>setTabs('roi')} className={` tw-text-primary  ${tabs==="roi"?'tw-bg-primary':''} tw-rounded-full tw-py-2 tw-px-10 tw-font-light tw-text-white `}>ROI</button>
          </div>
          {/* <div className=" row tw-pb-4">
             <div className=" col-md-4 tw-ml-auto">
               <input className=" tw-w-full tw-p-3 tw-rounded-md tw-outline-none tw-text-sm" placeholder="Search..." />
              </div>
          </div> */}
        <div className="row    g-5">
          <div className="col-lg-6">
           <div className=" row">
            {tabs==="staking"?
            <div className="">
            <Staking referral={props.referral} stakingDirects={props.stakingDirects} staking_totalwithdraw={props.staking_totalwithdraw} mount={props.mount} usdt_balance={props.usdt_balance} staking_allInvestments_reward={props.staking_allInvestments_reward} staking_allInvestments={props.staking_allInvestments} totalstakedAmount={props.totalstakedAmount} total_stakingEarning={props.total_stakingEarning}   choosed_Unstake_inv={props.choosed_Unstake_inv}      />
            </div>:<div className="">
            <ROI  totalReferralsEarning={props.totalReferralsEarning} maximum_investment={props.maximum_investment} withdrawFee={props.withdrawFee} set_withdraw_Amount={props.set_withdraw_Amount} availBalance={props.availBalance} withdraw_Amount={props.withdraw_Amount} setInvestment={props.setInvestment}  minimum_investment={props.minimum_investment} Invest={props.Invest}  total_withdraw_reaward={props.total_withdraw_reward} WithdrawReward={props.WithdrawReward} investment={props.investment} address={props.address}/>
            </div>
            }
            
           </div>
          </div>
          <div className="col-lg-6">
            <div className=" row  g-4">
             
               <div className=" col-md-12">
                <div className=" tw-flex tw-gap-6 tw-items-center   tw-bg-lightBlue   tw-rounded-3xl  p-4">
                  <div  className=" tw-relative">
                    <img height={70} width={70} src={require('../../assets/images/logo2.png')} className=" tw-border tw-border-primary tw-rounded-full" alt="" />
                          {props.rank? props.rank.map((validateTypedData,index)=>{
                  
                  <div className="   tw-flex tw-gap-1 tw-bg-primary tw-absolute tw-bottom-0 tw-w-full tw-rounded-full tw-px-2  tw-py-1"> 

                      <FaStar className=" tw-text-yellow " />
                      </div>

}):""}



                      
                  </div>
                <div>
                    <h6 className="  tw-text-white  tw-font-poppins tw-flex tw-gap-3  tw-items-center">
                    {props.address ? props.address.slice(0,4)+"..."+ props.address.slice(39,42):"kindly connect"}
                  {" "}
                  <CopyToClipboard
                        text={props.address? props.address:""}
                        >
                    <GoCopy onClick={addressCopy_notify}  size={23} className="  tw-text-primary" />
                    </CopyToClipboard>
                                      </h6>
                  <span className="   tw-text-white tw-font-poppins tw-flex  tw-gap-3 tw-text-md">
                  Upline: {props.upliner ? props.upliner.slice(0,4)+"..."+ props.upliner.slice(39,42) :""}
                  
                  <CopyToClipboard
                        text={props.upliner? props.upliner:""}
                        >
                    <GoCopy onClick={addressCopy_notify}  size={23} className="  tw-text-primary" />
                    </CopyToClipboard>
                  </span>
                </div>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                  <h6 className="   tw-text-white  tw-font-inter ">
                    Current Balance
                  </h6>
                  <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {(Number(props.availBalance)/10**6)}

                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                  <h6 className="   tw-text-white  tw-font-inter ">
                    Total Investment
                  </h6>
                  <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {(Number(props.totlaInvestment)/10**6) } 

                  </span>
                </div>
              </div>
                <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                  <h6 className="   tw-text-white  tw-font-inter ">
                    Total Withdraw
                  </h6>
                  <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">

                  {(Number(props.total_withdraw_reward)/10**6)} 

                  </span>
                </div>
              </div>
               <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                  <h6 className="   tw-text-white  tw-font-inter ">
                    Total Referrals
                  </h6>
                  <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {Number(props.directs)}

                  </span>
                </div>
              </div>
               <div className=" col-md-6">
                <div  className=" tw-border  tw-cursor-pointer tw-border-textColor   tw-rounded-3xl  p-4">
                  <div className=" tw-flex tw-justify-between tw-items-center">
                    <h6 className="   tw-text-white  tw-font-inter ">
                    Leadership Bonus
                  </h6>
                  <img onClick={()=>setIsModalOpen(true)} src={require('../../assets/images/bouns.png')} alt="" />
                  </div>
                  <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {(Number(props.MatchingEarning)/10**6)} 

                  </span>
                </div>
              </div>
                <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="  tw-text-white  tw-font-poppins tw-flex tw-gap-3  tw-justify-between tw-items-center">
                   Direct Earning  : {(Number(props.totalReferralsEarning)/10**6)+(Number(props.hold_amount)/10**6)} 

  
                  </h6>
                  <span className="  tw-text-white  tw-font-sm  tw-font-poppins tw-text-sm">
                    Hold  : 
                  </span>
                  <span className="   tw-text-white tw-font-poppins tw-text-sm">
                  : {(Number(props.hold_amount)/10**6)} |
                  </span>
                  <span className="  tw-text-white  tw-font-sm  tw-font-poppins tw-text-sm">
                     | Released  : 
                  </span>
                  <span className="   tw-text-white tw-font-poppins tw-text-sm">
                  : {(Number(props.totalReferralsEarning)/10**6) } 
                  </span>
                </div>
              </div>
              <div className=" col-md-12">

                <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                  <h6 className="  tw-text-white  tw-font-poppins tw-flex tw-gap-3  tw-justify-between tw-items-center">
                    My Link 
                    <CopyToClipboard
                        text={`${window.location.host}/?ref=${props.address? props.address:""}`}
                    >
                   <GoCopy  onClick={link_notify}  size={23} color="#fff" />
                  </CopyToClipboard>
                  </h6>
                  <span className="   tw-text-primary tw-font-poppins tw-text-md">
                  {window.location.host}/?ref={props.address?props.address.slice(0,4)+"..."+props.address.slice(39,42):"kindly connect"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default StakeComponent;
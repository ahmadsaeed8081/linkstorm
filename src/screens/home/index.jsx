import React, { useEffect, useState } from "react";
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import About from '../../components/About/About';
import WhyLinkStorm from '../../components/WhyLinkStorm/WhyLinkStorm';
import StakeComponent from '../../components/Stake';
import RoadMap from '../../components/RoadMap';
import ReferralRewards from '../../components/ReferralRewards/ReferralRewards';
import FAQ from '../../components/FAQs';

import { useLocation } from "react-router-dom";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { polygon, polygonAmoy } from "wagmi/chains";
import Loader from "../../../src/components/Loader.js";

import {
  token_abi, 
  USDT_address,
  cont_address,
  cont_abi,       
  staking_cont_address,
  staking_cont_abi,  
} from "../../components/configs/Contracts.js";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";


import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { Alert } from "bootstrap";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
const Home = () => {




  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [isProcessingPayment, setIsProcessingPayment] = useState(true);


  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const { address,isConnected, isConnecting ,isDisconnected} = useAccount()

  const [count, set_count] = useState(0);

  const notify = () => toast("Transaction Successfull!");

  const [ref_add, set_ref] = useState("0x0000000000000000000000000000000000000000");




  // const { address, isConnecting ,isDisconnected} = useAccount()


  const [loader, setLoader] = useState(false);
  const [investment, setInvestment] = useState("");
  const [curr_time, set_curr_time] = useState(0);
  const [total_withdraw_reward, set_total_withdraw_reward] = useState(0);
  const [withdraw_Amount, set_withdraw_Amount] = useState("0");

  
  const [todayEarning, set_todayEarning] = useState(0);

  const [totlaInvestment, setTotalInvestment] = useState(0);
  const [totalEarning, set_totalEarning] = useState(0);
  const [levelEarning, set_levelEarning] = useState([]);
  const [refCount, set_refCount] = useState([]);

  const [directs, set_directs] = useState("0");
  const [RoiEarning, set_RoiEarning] = useState(0);
  const [pol_balance, setBalance] = useState(0);
  const [exor_balance, set_exorBalance] = useState(0);

  const [usdt_balance, set_usdtBalance] = useState(0);
  const [maximum_investment, set_maximum_investment] = useState(0);

  
  const [minimum_investment, set_minimum_investment] = useState(0);
  const [minWithdraw, set_minWithdraw] = useState(0);
  const [withdrawFee, set_withdrawFee] = useState(0);

  const [maxWithdraw, set_maxWithdraw] = useState(0);

  const [Allinvestment, set_Allinvestment] = useState([]);
  const [withdrawList, setwithdrawList] = useState([]);
  const [availBalance, set_availBalance] = useState(0);

  const [totalReferralsEarning, settotalReferralsEarning] = useState(0);

  const [referral, setReferral] = useState("0x0000000000000000000000000000000000000000");
  const [upliner, set_upline] = useState();
  const [MatchingEarning, set_MatchingEarning] = useState(0);
  
  const [directs_members, set_directs_members] = useState([]);
  const [Level_locking, set_Level_locking] = useState([]);
  const [Level_business, set_Level_business] = useState([]);

  
  const [exorUsdPrice, set_exorUsdPrice] = useState();
  const [rank, set_rank] = useState(0);
  const [hold_amount, set_holdAmount] = useState(0);

  //staking 



  const [totalstakedAmount, set_totalstakedAmount] = useState(0);
  const [total_stakingEarning, set_total_stakingEarning] = useState(0);
  const [staking_totalwithdraw, set_staking_totalwithdraw] = useState(0);

  const [choosed_Unstake_inv, set_choosed_Unstake_inv] = useState();
  const [staking_allInvestments, set_staking_allInvestments] = useState([]);
  const [staking_allInvestments_reward, set_staking_allInvestments_reward] = useState([]);
  
  const [stakingDirects, set_stakingDirects] = useState(0);
  
  const [staking_min_inv, set_staking_min_inv] = useState(0);
  const [sl, set_sl] = useState(0);
  const [ol, set_ol] = useState(0);
  const [total_business, set_business] = useState(0);
  const [team, set_team] = useState(0);

  
  const [state, setState] = useState({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
    time_up: "",
    // bid_time: selectedAmount,
  });



  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
  })
  useEffect(() => {

    if(address)
    {
      mount();

    }
  }, [ address]);


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
  setInvestment(0)
  mount();
}
}


},[isConfirmed])


async function USDT_approval () {
try {
  const tx = await writeContractAsync({
    abi: token_abi,
    address: USDT_address,
    args: [cont_address,( investment ? Number(investment)*10**6 : "0")],
    functionName: "approve",

  }); 
  // stake1();

 } catch (err) {
  console.error(err);
}
}
async function stake1() {


try {
    const tx = await writeContractAsync({
      abi: cont_abi,
      address: cont_address,
      functionName: "invest", 
      args: [
        (investment? Number(investment)*10**6 : 0),referral
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
    abi: cont_abi,
    address: cont_address,
    functionName: "withdrawReward", 
    args: [
      (Number(withdraw_Amount)) * (10**6)
    ],

  });

  set_count(1)

} catch (err) {
  console.error(err);
}
}




const search = useLocation().search;
const id = new URLSearchParams(search).get("ref");

const count1 = (_deadline) => {
console.log("here is deadine "+_deadline)
var now = new Date().getTime();
_deadline = Number(_deadline) * 1000;
var t;
if ( Number(now) <  Number(_deadline)) {
t = Number(_deadline) - Number(now);
console.log(" its count " + _deadline + "   " + now + "   " + t);
// console.log(deadline)
var dd = Math.floor(t / (1000 * 60 * 60 * 24));
var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var ss = Math.floor((t % (1000 * 60)) / 1000);

var days = dd < 10 ? "0" + dd : dd;
var hours = hh < 10 ? "0" + hh : hh;
var minutes = mm < 10 ? "0" + mm : mm;
var seconds = ss < 10 ? "0" + ss : ss;


if (days > 0) {
  return Number(days)+1 + " days";
} else if (hours > 0) {
  return Number(hours)+1 + " hours";
} else if (minutes > 0) {
  return Number(minutes)+1 + " minutes";
} else {
  return Number(seconds)+1 + " seconds";
}
} else {
return "Expired";
}
};


function Convert_To_Wei(val) {
const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));

val = web3.utils.toWei(val.toString(), "ether");
return val;
}
async function mount() {
if (isDisconnected) {
return;
}
setLoader(true)
if (id != null) {

  setReferral(id);

}
let address1="0x3A7792B6A5EF05a9b38A17A327744df63fD7c4B0"


let web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));
const pol_balance = await web3.eth.getBalance(address1);
//usdt token
      //  alert(web3.utils.sha3( "initialize()").substr(0, 10))

const contract_usdt = new web3.eth.Contract(token_abi, USDT_address);
let usdt_balance = await contract_usdt.methods.balanceOf(address1).call();

//roi contract
const contract = new web3.eth.Contract(cont_abi, cont_address);
const user = await contract.methods.user(address1).call();
console.log(user)
let totalEarning= await contract.methods.get_totalEarning(address1).call();
let level_earning= await contract.methods.get_level_earning(address1).call();

let roi_earning= await contract.methods.get_roi_earning(address1).call();
let matchingRew= await contract.methods.get_matchingRew(address1).call();

console.log(totalEarning)
// let exorUsdPrice= await contract.methods.exorUsdPrice(address1).call();

let directs_members= await contract.methods.ReferralsList().call({from : address1.toString()});

let Level_count = await contract.methods.Level_count(address1).call();

let Level_locking = await contract.methods.Level_locking(address1).call();
let Level_business = await contract.methods.Level_business(address1).call();

const business = await contract.methods.totalbusiness().call();
const allInvestments = await contract.methods.getAllinvestments(address1).call();

let minimum_investment = await contract.methods.minimum_investment().call(); 
let rank_no = await contract.methods.get_rank(address1).call(); 

// const curr_time = await contract.methods.get_currTime().call();
let team=0;
let business1=0;

for(let i=0;i<15;i++)
{
  business1+=Number(Level_business[i]);
  // alert(Number(Level_business[i]))
    team+=Number(Level_count[i]);
}

//Staking 
const staking_contract = new web3.eth.Contract(staking_cont_abi, staking_cont_address);

let staking_totalReward = await staking_contract.methods.get_TotalReward().call({ from: address });   

let staking_user = await staking_contract.methods.user(address).call();      
let staking_min_investment = await staking_contract.methods.min_investment().call();      

let staking_allInvestments = await staking_contract.methods.getAll_investments().call({from: address});
// let staking_allInvestments_reward = await staking_contract.methods.getAll_investments_ForReward().call({from: address});
let currTime = await staking_contract.methods.get_currTime().call();    

set_rank(rank_no)
set_directs_members(directs_members)
setBalance(pol_balance);
set_usdtBalance(usdt_balance);
setTotalInvestment(user[2])
set_curr_time(curr_time);
set_availBalance((Number(totalEarning)) - (Number(user.totalWithdraw_reward)));
set_minimum_investment(minimum_investment);
set_maximum_investment(maximum_investment);
set_total_withdraw_reward(user.totalWithdraw_reward);
settotalReferralsEarning(user[7])
set_directs(user[6])
set_holdAmount(user.total_hold_Amount)
set_upline(user.referralFrom)
set_Level_locking(Level_locking)
set_Level_business(Level_business)

set_totalEarning(Number(totalEarning))
set_levelEarning(level_earning.LevelRewards);
set_RoiEarning(Number(roi_earning))
// set_todayEarning(Number(arr.today_earning))
set_MatchingEarning(Number(matchingRew.rew))
set_sl(Number(matchingRew.sl))
set_ol(Number(matchingRew.ol))

// set_exorUsdPrice(Number(exorUsdPrice)/10**6)
set_team(team)
set_business(business1)
set_refCount(Level_count);
set_Allinvestment(allInvestments)

set_staking_totalwithdraw(staking_user?staking_user[2]:0)
set_totalstakedAmount(staking_user?staking_user[1]:0)
// set_totalstakingWithdraw(staking_user?staking_user[2]:0)
set_stakingDirects(staking_user[5])
set_staking_min_inv(staking_min_investment)

set_staking_allInvestments(staking_allInvestments);
// set_staking_allInvestments_reward(staking_allInvestments_reward)
if(staking_allInvestments!=null)
  {
    if(staking_allInvestments[0])
    {
      set_choosed_Unstake_inv(staking_allInvestments[0][3])

    }   
  }

  set_total_stakingEarning(staking_totalReward)

setLoader(false)



// } catch (error) {
//   // Catch any errors for any of the above operations.

//   console.error(error);
// }
}






async function Invest() 
{
if (isDisconnected) {
alert("kindly connect your wallet");
return

}
if (investment <= 0 || investment == "") {
alert("please write amount ");
return
}
// if (investment < (Number(minimum_investment)/10**6)) {
// alert("You can't invest less than "+ Number(minimum_investment)/10**6+"USDT");
// return
// }
// if (investment >( Number(maximum_investment)/10**6)) {
// alert("You can't invest more than "+ Number(minimum_investment)/10**6+"USDT");
// return
// }
if (Number(usdt_balance) < Number(investment)*10**6) {
alert("you dont have enough usdt to invest");
return;
} 


if(chainId != currentChainId )
{
  await switchChainAsync({ chainId });
  await USDT_approval?.();
} 
else 
{
  await USDT_approval?.();
}







}

async function WithdrawReward() {

  if (isDisconnected) {
    alert("kindly connect your wallet");
    return;

  }
  if (Number(withdraw_Amount) <= 0 || Number(withdraw_Amount) == "") {
    alert("please write amount ");
    return
  }
  // if (Number(withdraw_Amount) < Number(minWithdraw)/10**18) {
  //   alert("You can't withdraw less than "+Number(minWithdraw)/10**18);
  //   return
  // }
  // if (Number(withdraw_Amount) > Number(maxWithdraw)/10**18) {
  //   alert("You can't withdraw more than "+Number(maxWithdraw)/10**18);
  //   return
  // }
  if (Number(totalEarning)==0) {
    alert("You don't have earning to withdraw");
    return;
  }
  if (Number(withdraw_Amount) > Number(availBalance)) {
    alert("you cant withdraw more than your current balance");
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

  // if (chain.id != du_CHAIN_ID) {
  //   reward_switch?.();
  // } else {
  //   console.log("object withdraw "+withdraw_Amount);

  //   withdraw?.()
  // }

}



  return (
    <div className=' tw-overflow-x-hidden'>
      <Hero />
      <StakeComponent total_business={total_business} sl={sl} ol={ol} staking_min_inv={staking_min_inv} referral={referral} stakingDirects={stakingDirects} mount={mount}  hold_amount={hold_amount} rank={rank}  usdt_balance={usdt_balance} staking_totalwithdraw={staking_totalwithdraw} staking_allInvestments_reward={staking_allInvestments_reward} staking_allInvestments={staking_allInvestments} totalstakedAmount={totalstakedAmount} total_stakingEarning={total_stakingEarning}   choosed_Unstake_inv={choosed_Unstake_inv} MatchingEarning={MatchingEarning} upliner={upliner} team={team} withdrawFee={withdrawFee} todayEarning={todayEarning} availBalance={availBalance} exor_balance={exor_balance} RoiEarning={RoiEarning} directs={directs} levelEarning={levelEarning} total_withdraw_reward={total_withdraw_reward} totalReferralsEarning={totalReferralsEarning} withdraw_Amount={withdraw_Amount} setInvestment={setInvestment}  minimum_investment={minimum_investment}  Invest={Invest} set_withdraw_Amount={set_withdraw_Amount}  WithdrawReward={WithdrawReward} investment={investment} totlaInvestment={totlaInvestment} totalEarning={totalEarning} address={address}/>
      <ReferralRewards Level_business={Level_business} Level_locking={Level_locking} directs_members={directs_members} refCount={refCount} levelEarning={levelEarning} />

      <About/>
      <RoadMap/>
      <WhyLinkStorm/>
      <FAQ/>
      <Footer/>
      {loader && <Loader />}
      <ToastContainer />

    </div>
  );
};

export default Home;
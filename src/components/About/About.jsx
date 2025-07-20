import React from 'react'
import Button from '../Button'
import { FaArrowRight } from 'react-icons/fa6'
import { FaLongArrowAltRight, FaRegUser } from 'react-icons/fa';
// import EBM_Avenue from '../EBM_avenue'
const About = () => {


  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/YouSamaritan White Paper v2.pdf");
    window.open(pdfUrl, "_blank");
  };


  return (
    <div  id='aboutSection'  className='  tw-relative   tw-w-full tw-h-auto'>
          
      <div className='container'>
        <div className='row  sm:tw-text-start  tw-text-center g-5 tw-items-center'>
            <div className='col-lg-7 col-md-12'>
            <h1 className=" tw-text-white  tw-font-grotesk   md:tw-text-[45px] tw-text-[28px]">
            
            How to Stake?
          
            </h1>

           <ul className='  p-0 flex tw-flex-col tw-gap-3 tw-mt-5'>
            <li>
               <h2 className="   tw-text-primary  tw-font-grotesk   md:tw-text-[30px] tw-text-[20px]">
            
           Add USDT Tokens
          
            </h2>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8">
            You will need tokens in your wallet to stake. Once you purchase CIP tokens, make sure that you add the CIP token to your MetaMask/TrustWallet Wallet so you can view your CIP balance.</p>
            </li>
           </ul>
             <li>
               <h2 className="   tw-text-primary  tw-font-grotesk   md:tw-text-[30px] tw-text-[20px]">
            
        Connect & Verify Wallet
          
            </h2>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8">
            Click the "Connect Wallet" button at the upper right corner of the site and make sure you have the Arbitrum network selected in your MetaMask wallet.</p>
            </li>
             <li>
               <h2 className="   tw-text-primary  tw-font-grotesk   md:tw-text-[30px] tw-text-[20px]">
    Stake Wallet
          
            </h2>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8">
           You'll need to click the 'Stake USDT' and scroll to the top of the page to bring up the staking interface on the site.</p>
            </li>
           
        
        
           <div className='  tw-pt-4 tw-flex tw-items-center tw-gap-8'>
           <Button
                rIcons={<FaLongArrowAltRight color="white" />}
                label={"More Details"}
                className={'  tw-bg-transparent tw-rounded-md tw-text-white  tw-border tw-border-white tw-font-medium tw-py-3'}
              />


           </div>




            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='row'>
                <div className="col-md-12 tw-mx-auto">
                   <div className=' tw-relative '> 
                    <img src={require('../../assets/images/about.png')}   className=' tw-mx-auto tw-w-full' alt='' />
                    
                   
                   </div>
                </div>
              </div>
            </div>

          
           



        </div>

         
      </div>
     
 
     
    </div>
  )
}

export default About
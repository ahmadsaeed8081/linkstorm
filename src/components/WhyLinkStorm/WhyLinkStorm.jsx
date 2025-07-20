import React from 'react';

const WhyLinkStorm = () => {
  return (
    <div className='container mx-auto  '>
      <div className=' tw-flex sm:tw-flex-row tw-bg-lightBlue  tw-px-4  tw-py-1  tw-rounded-3xl tw-flex-col tw-justify-between tw-items-center'>
          <div className=' sm:tw-w-6/12 tw-w-full'>
           <img src={require('../../assets/images/Black and Red Retro Pizza Promotion Poster 2.png')} alt='' />
          </div>
          <div className=' sm:tw-w-6/12 tw-w-full tw-pb-4'>
           <h2 className=' tw-text-white tw-font-grotesk'>Why LinkStorm</h2>
           <p className=' tw-font-inter tw-py-3 tw-text-white'>We are using a decentralized blockchain for staking</p>
           <div className=' tw-grid sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-3'>
            <div className=' tw-flex tw-gap-3'>
                <div>
                 <img src={require('../../assets/images/check.png')}  className=' sm:tw-w-12 w-5' alt='' />
                </div>
                <div>
                  <h5 className=' tw-text-white tw-leading-8 sm:text-lg tw-text-base tw-font-inter'>Easy to buy and stake USDTCOIN</h5>
                </div>
            </div>
              <div className=' tw-flex tw-gap-3'>
                <div>
                 <img src={require('../../assets/images/check.png')} className=' sm:tw-w-12 w-5'  alt='' />

                </div>
               <div>
                 <h5  className=' tw-text-white tw-leading-8 sm:text-lg tw-text-base tw-font-inter'>Withdrawal in BEP20 USDT</h5>
               </div>
            </div>
            <div className=' tw-flex tw-gap-3'>
                <div>
                 <img src={require('../../assets/images/check.png')} className=' sm:tw-w-12 w-5'  alt='' />

                </div>
                <div>
                  <h5  className=' tw-text-white tw-leading-8 sm:text-lg tw-text-base tw-font-inter'>You can refer others and earn</h5>
                </div>
            </div>
           <div className=' tw-flex tw-gap-3'>
                <div>
                 <img src={require('../../assets/images/check.png')}  className=' sm:tw-w-12 w-5' alt='' />

                </div>
                <div>
                  <h5  className=' tw-text-white tw-leading-8 sm:text-lg tw-text-base tw-font-inter'>400% ROI payout</h5>
                </div>
            </div>
           </div>
          </div>
      </div>
    </div>
  );
};

export default WhyLinkStorm;
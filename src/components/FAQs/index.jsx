import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Button from '../Button';

const FAQ = () => {
  const [accordions, setAccordions] = useState([
    {
      key:1,
      id:"01",
      title: "What is Link Storm?",
      data: "Link Storm is a decentralized DeFi + MLM platform built on the Polygon blockchain. It offers daily ROI, referral income, leadership rewards, and optional 15 months staking with 200% return — all powered by secure smart contracts",
      isOpen: false,
    },
     {
      key:2,
      id:"02",
      title: "Is Link Storm safe to use?",
      data: "Yes. Link Storm runs entirely on audited smart contracts, meaning no central admin controls your funds. Earnings and withdrawals are processed automatically and transparently via the blockchain.",
      isOpen: false,
    },
    {
      key:3,
      id:"03",
      title: "What are the income opportunities?",
      data:<div>
        <p>Users can earn from multiple sources:
</p>
<ul className=' tw-p-0'>
    <li>* 5% direct referral bonus</li>
    <li>* 15-level team income</li>
    <li>* Leadership bonuses up to \$15,000</li>
    <li>* 300% ROI</li>
</ul>


      </div>,
      isOpen: false,
    },
    {
      key:4,
      id:"04",
      title: "Can I earn without referrals?",
      data: "Absolutely. You can simply stake for 15 months and receive 200% returns without referring anyone. Referrals are optional and offer extra earning potential.",
      isOpen: false,
    },
    {
      key:5,
      id:"05",
      title: "How do I get started?",
      data: "Just connect your Web3 wallet (like MetaMask or TrustWallet), choose a package or stake amount, and start earning. No KYC, no waiting — withdrawals are instant once you reach \$20.",
      isOpen: false,
    }
  ]);

  const toggleAccordion = (accordionKey) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.key === accordionKey) {
        return { ...accordion, isOpen: !accordion.isOpen };
      } else {
        return { ...accordion, isOpen: false };
      }
    });

    setAccordions(updatedAccordions);
  };

  return (
    <div id='faqs' className="tw-overflow-x-hidden  tw-relative tw-bg-no-repeat tw-w-full tw-bg-cover tw-h-auto tw-pb-20 tw-pt-10">
      <div className="tw-text-center">
        <Button label={'FAQs'} className={'tw-mx-auto tw-font-grotesk tw-text-2xl tw-bg-transparent tw-text-white'} />
        <h2 className="tw-text-white  tw-font-grotesk">
          Frequently Asked <b className=" tw-text-primary">Questions</b>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="tw-mt-12">
              {accordions.slice(0, 5).map((accordion, index) => (
                <Accordion
                  key={accordion.key}
                  id={accordion.id}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                  customKey={`0${index + 1}`} 
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img  src={require('../../assets/images/faq.png')} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
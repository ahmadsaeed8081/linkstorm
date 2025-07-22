// TeamModal.tsx
import React from "react";
import { useSwitchChain, useAccount, useDisconnect } from "wagmi";
import { ToastContainer, toast } from 'react-toastify';
import { GoCopy } from "react-icons/go";

import {
  CopyToClipboard,
  PartnerIcon,
  CycleIcon,
} from "react-copy-to-clipboard";


import 'react-toastify/dist/ReactToastify.css';
const teamData = [
  { number: 1, address: "0x093...6589", earning: "$700" },
  { number: 2, address: "0x093...6588", earning: "$800" },
  { number: 3, address: "0x093...6587", earning: "$900" },
  { number: 4, address: "0x093...6586", earning: "$750" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
  { number: 5, address: "0x093...6589", earning: "$700" },
];


  const addressCopy_notify = () => toast("address is Copied!");

const TeamMemberShipModal= ({ isOpen, onClose,directs_members }) => {
  const { address,isConnected, isConnecting ,isDisconnected} = useAccount()

  
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-40 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className=" tw-bg-lightBlue tw-text-white tw-w-[420px] tw-rounded-xl tw-shadow-lg tw-p-4">
        <div className="tw-flex tw-justify-between tw-items-center   tw-pb-2">
          <h2 className="tw-text-sm tw-font-medium">Team Members</h2>
          <button onClick={onClose} className="tw-text-white hover:tw-text-red-500">✕</button>
        </div>

        <div className="tw-mt-3">
          <div className="tw-grid tw-rounded-md  tw-py-2 tw-grid-cols-3 tw-text-center tw-text-sm tw-font-medium tw-bg-primary tw-text-white tw-rounded-t-md tw-py-1">
            <div>Number</div>
            <div>Address</div>
            <div>Investment</div>
          </div>
          <div className=" tw-bg-[#001530] tw-mt-3 tw-h-72 tw-overflow-y-auto tw-rounded-lg">
            {isConnected ? directs_members.members.map((member, index) => (
              <div
                key={index}
                className="tw-grid tw-grid-cols-4  tw-border-b tw-text-center tw-text-sm tw-py-2 border-b tw-border-gray-700 last:tw-border-b-0 hover:tw-bg-primary"
              >
                <div>{index+1}</div>
                <div>{directs_members ?directs_members.members[index].slice(0,4)+"..."+directs_members.members[index].slice(39,42):""}</div>
                  <span className=" ">
                  
                  <CopyToClipboard
                        text={directs_members ? directs_members.members[index]:""}
                        >
                    <GoCopy onClick={addressCopy_notify}  size={18}  />
                    </CopyToClipboard>
                  </span>


                <div>{directs_members ?Number(directs_members.income[index])/10**6+" USDT":""}</div>
              </div>
             
            )):""}
          </div>
        </div>

        <div className="tw-flex tw-justify-center tw-mt-4">
          <button
            onClick={onClose}
            className=" tw-bg-primary tw-text-white tw-px-4 tw-py-1.5 tw-rounded-md tw-text-sm "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberShipModal;

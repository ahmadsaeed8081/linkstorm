// TeamModal.tsx
import React from "react";

const teamData = [
  { number: 1,amount:"45k" ,bonus: "$500"},
  { number: 2, amount:"90k" ,bonus: "$1.5k",},
  { number: 3, amount:"180k" ,bonus: "$3k", },
  { number: 4, amount:"300k" ,bonus: "$5k",},
  { number: 5, amount:"3M" ,bonus: "$15k",  },
];



const LeaderShipModal= ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-40 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className=" tw-bg-lightBlue tw-text-white tw-w-[320px] tw-rounded-xl tw-shadow-lg tw-p-4">
        <div className="tw-flex tw-justify-between tw-items-center   tw-pb-2">
          <h2 className="tw-text-sm tw-font-medium">Leadership Bouns</h2>
          <button onClick={onClose} className="tw-text-white hover:tw-text-red-500">✕</button>
        </div>

        <div className="tw-mt-3">
          <div className="tw-grid tw-rounded-md  tw-py-2 tw-grid-cols-3 tw-text-center tw-text-sm tw-font-medium tw-bg-primary tw-text-white tw-rounded-t-md tw-py-1">
            <div>Rank</div>
            <div>Amount</div>
            <div>Bonus</div>
            
          </div>
          <div className=" tw-bg-[#001530] tw-mt-3 tw-rounded-lg">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="tw-grid tw-grid-cols-3  tw-border-b tw-text-center tw-text-sm tw-py-2 border-b tw-border-gray-700 last:tw-border-b-0 hover:tw-bg-primary"
              >
                <div>{member.number}</div>
                <div>{member.amount}</div>

                <div>{member.bonus}</div>
              </div>
            ))}
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

export default LeaderShipModal;

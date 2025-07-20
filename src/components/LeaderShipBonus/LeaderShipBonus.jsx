// TeamModal.tsx
import React from "react";

const teamData = [
  { number: 1, bonus: "$45k"},
  { number: 2, bonus: "$90k",},
  { number: 3, bonus: "$180k", },
  { number: 4, bonus: "$300k",},
  { number: 5, bonus: "$3M",  },
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
          <div className="tw-grid tw-rounded-md  tw-py-2 tw-grid-cols-2 tw-text-center tw-text-sm tw-font-medium tw-bg-primary tw-text-white tw-rounded-t-md tw-py-1">
            <div>Rank</div>
            <div>Bonus</div>
            
          </div>
          <div className=" tw-bg-[#001530] tw-mt-3 tw-rounded-lg">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="tw-grid tw-grid-cols-2  tw-border-b tw-text-center tw-text-sm tw-py-2 border-b tw-border-gray-700 last:tw-border-b-0 hover:tw-bg-primary"
              >
                <div>{member.number}</div>
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

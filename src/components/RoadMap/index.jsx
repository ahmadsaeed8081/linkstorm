import React from "react";

const phases = [
  {
    title: "Phase 1",
    items: [
      "Smart contracts live on Polygon",
      "Staking + 15-level MLM system",
      "Staking + 15-level MLM system",
      "Referral onboarding begins",
    ],
  },
  {
    title: "Phase 2",
    items: [
      "Launch $LST token on DEX",
      "Use $LST for fees & bonuses",
      "Add ROI boosters + reinvest option",
      "Begin global marketing push",
    ],
  },
  {
    title: "Phase 3",
    items: [
      "Launch $LST-powered casino games",
      "Game-based burn + reward pool",
      "Team quests & leaderboard missions",
      "Mobile DApp optimization",
    ],
  },
  {
    title: "Phase 4",
    items: [
      "Enable DAO voting via $LST",
      "NFT boosters for staking & rank",
      "Launch Link Storm Academy",
      "Expand to zkEVM & other chains",
    ],
  },
];

const RoadMap = () => {
  return (
    <div id="roadmap" className=" tw-pb-16 tw-mx-auto container tw-text-white tw-relative">
      <h2 className="tw-text-center tw-font-grotesk tw-pb-10 tw-text-2xl sm:tw-text-3xl tw-font-bold tw-mb-12">
        Roadmap
      </h2>

      {/* Horizontal Line Behind Cards */}
      <div className="tw-absolute tw-top-[270px] tw-left-0 tw-w-full tw-h-1 tw-bg-white/10 tw-z-0"></div>

      <div className="tw-container tw-mx-auto tw-grid sm:tw-grid-cols-4 tw-grid-cols-1 tw-gap-6 tw-relative tw-z-10">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`tw-relative sm:tw-h-96 tw-h-auto   tw-bg-button-gradient tw-rounded-lg tw-shadow-lg tw-p-6 tw-border tw-border-white ${
              index % 2 === 1 ? "sm:tw-mt-10 mt-0" : "sm:-tw-mt-10 -tw-mt-0"
            }`}
          >
            <h3 className="tw-text-xl tw-font-semibold tw-mb-4">
              {phase.title}
            </h3>
            <ul className="tw-list-disc tw-ml-5 tw-space-y-3  tw-text-xl tw-p-0 tw-leading-6">
              {phase.items.map((item, idx) => (
                <li className=" tw-font-light" key={idx}>{item}</li>
              ))}
            </ul>
            <span className="tw-absolute tw-text-7xl tw-font-grotesk tw-font-bold tw-text-white/10 tw-top-5 tw-right-4">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;

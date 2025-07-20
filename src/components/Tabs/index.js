import React, { useState } from "react";

const Tabs = ({ tabs, defaultTab, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className=" tw-bg-lightBlue xs:p-4 p-3 tw-rounded-2xl">
      <div className="tw-flex   tw-gap-3 tw-border-opacity-20  tw-scroll-container  tw-productOverflow tw-overflow-x-auto tw-whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`tw-px-4  tw-rounded-lg tw-py-4 ${className} ${
              activeTab === tab.title
                ? "tw-w-full tw-text-white   tw-bg-primary"
                : "  tw-text-white tw-bg-secondary  tw-w-full"
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tw-mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className={activeTab === tab.title ? "" : "tw-hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

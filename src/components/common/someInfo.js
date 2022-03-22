import React from "react";

const SomeInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="px-8">
        <img
          width="100%"
          className="rounded-lg"
          src="https://i.ibb.co/7SPqmYP/testing.png"
          alt=""
        />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold mb-6 mt-12 md:mt-0 lg:mt-0 pl-2 md:pl-0 lg:pl-0">
          Screenings to safeguard your health
        </h2>
        <p className="pr-6 pl-4 md:pl-0 lg:pl-0">
          If you don’t have a regular source of healthcare or you’ve never had
          your cholesterol checked, you’re not alone. According to the National
          Center for Health StatisticsTrusted Source, nearly 26 percent of men
          in the United States do not have a regular source of healthcare.
        </p>
        <p className="mt-4 pr-6 pl-4 md:pl-0 lg:pl-0">
          Read on to learn how to reverse this trend with medical tests and
          screenings to keep you healthy.
        </p>
        <div className="text-center md:text-left lg:text-left">
          <button
            className="uppercase py-3 px-6 font-semibold text-white rounded-lg mt-8 ml-4 md:ml-0 lg:ml-0"
            style={{
              background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SomeInfo;

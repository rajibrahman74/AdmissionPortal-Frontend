import React from "react";
import { useLoaderData } from "react-router-dom";
import UnearthingCollegeInfo from "./UnearthingCollegeInfo";

const UnearthingColleges = () => {
  const unearthingCollageData = useLoaderData();
  console.log(unearthingCollageData);

  return (
    <section className="px-6">
      <h1 className="text-center text-xl md:text-3xl font-semibold mb-3 md:mb-10">Unearthing Colleges</h1>
      <div className="flex md:flex-row flex-col justify-evenly items-center md:gap-0 gap-y-7">
        {unearthingCollageData.map((unearthingCollage) => (
          <UnearthingCollegeInfo unearthingCollage={unearthingCollage} />
        ))}
      </div>
    </section>
  );
};

export default UnearthingColleges;

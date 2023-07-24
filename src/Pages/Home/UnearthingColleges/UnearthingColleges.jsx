import React from "react";
import { useLoaderData } from "react-router-dom";
import UnearthingCollegeInfo from "./UnearthingCollegeInfo";

const UnearthingColleges = () => {
  const unearthingCollageData = useLoaderData();
  console.log(unearthingCollageData);

  const sliceData = unearthingCollageData.slice(0, 3)

  return (
    <section className="container px-6 mx-auto">
      <h1 className="text-center text-xl md:text-3xl font-semibold mb-3 md:mb-10">Unearthing Colleges</h1>
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-y-7">
        {sliceData.map((unearthingCollage) => (
          <UnearthingCollegeInfo unearthingCollage={unearthingCollage} />
        ))}
      </div>
    </section>
  );
};

export default UnearthingColleges;

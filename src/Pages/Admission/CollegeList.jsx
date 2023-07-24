import { Link, useLoaderData } from "react-router-dom";

const CollegeList = () => {
  const collegeData = useLoaderData();
  console.log(collegeData);
  return (
    <div className="container mx-auto px-6 text-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl md:text-3xl font-semibold mb-3 md:mb-10">
        College List
      </h2>
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          {collegeData.map((college) => (
            <li key={college._id} className="flex items-center justify-between">
              <Link
                to={`/admission/${college._id}`}
                className="text-black hover:underline"
              >
                {college.college_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeList;

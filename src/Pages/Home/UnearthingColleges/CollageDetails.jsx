import React from "react";
import { useLoaderData } from "react-router-dom";

const CollageDetails = () => {
  const collageInfo = useLoaderData();

  return (
    <section className="container mx-auto mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8">
        {/* Left Side - Image */}
        <div>
          <img
            src={collageInfo.college_image}
            alt={collageInfo.college_name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">{collageInfo.college_name}</h1>
            <p className="text-gray-600 text-lg mt-2">
              Admission Dates: {collageInfo.admission_dates}
            </p>
            <p className="text-gray-700 text-lg mt-3">
              {collageInfo.admission_process}
            </p>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <ul className="list-disc pl-6 space-y-2">
              {collageInfo.events.map((event, index) => (
                <li key={index}>
                  <strong>{event.event_name}</strong> - {event.date} (
                  {event.location})
                </li>
              ))}
            </ul>
          </div>

          {/* Research History */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Research History</h2>
            <ul className="list-disc pl-6 space-y-2">
              {collageInfo.research_history.map((research, index) => (
                <li key={index}>
                  <strong>{research.research_title}</strong> by{" "}
                  {research.faculty_lead} ({research.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Sports Categories */}
        <div className="md:col-span-2 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Sports Categories</h2>
          <ul className="list-disc pl-6 space-y-2">
            {collageInfo.sports_categories.map((category, index) => (
              <li key={index}>
                <strong>{category.category_name}</strong> -{" "}
                {category.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CollageDetails;
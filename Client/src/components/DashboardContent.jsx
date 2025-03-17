import React from "react";

import { IoMdAdd } from "react-icons/io";

const DashboardContent = () => {
  return (
    <section className="pt-30 pb-20 px-4 min-w-full">
      <h1 className="md:text-8xl lg:text-[60px] pb-6 font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div className="p-6 h-42 w-full border border-gray-200 shadow-md hover:shadow-lg rounded-md flex items-center justify-center">
              <div className="space-y-2  flex flex-col items-center">
                <IoMdAdd size={50} color="grey" />
                <p className="text-gray-600">Add New Account</p>
              </div>
            </div>

            {/* {featuresData.map((feature, index) => (
              <div
                className="p-6 h-64 w-full border border-gray-200 shadow-md rounded-md flex items-center justify-center"
                key={index}
              >
                <div className="space-y-4 w-3/4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardContent;

import React from "react";
import { Link } from "react-router-dom";
import farmData from "../services/CardData";

const Collection = () => {
  const groupedData = farmData.reduce((acc, current) => {
    (acc[current.tag] = acc[current.tag] || []).push(current);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        แหล่งท่องเที่ยวเชิงเกษตรในญี่ปุ่น
      </h1>
      {Object.keys(groupedData).map((tag) => (
        <div key={tag} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-300 pb-2 mb-6">
            {tag}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedData[tag].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <Link
                    to={`/card-detail/${item.id}`} 
                    className="inline-block bg-[#ff759e] hover:bg-[#d87995] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
import React, { useState } from 'react';
import Graph from 'Components/Graph';
import FollowIcons from 'Components/FollowIcons';
import data from './data';

export default function Layout() {
  const [category, setCategory] = useState(data.categories[0].key);
  return (
    <>
      <FollowIcons />
      <div className="layout-container container mx-auto px-4 ">
        <div className="layout py-4 rounded-lg shadow-2xl">
          <div className="flex items-center justify-between px-4">
            <div className="text-white text-2xl">Statistics</div>
          </div>
          <div className="flex tab-border mt-3 px-4">
            {data.categories.map(({ key, name }) => (
              <button
                className={`mr-4 md:mr-6 py-2 focus:outline-none ${
                  category === key && 'tab-selected'
                }`}
                key={key}
                type="button"
                onClick={() => setCategory(key)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="p-4">
            <Graph category={category} />
          </div>
        </div>
      </div>
    </>
  );
}

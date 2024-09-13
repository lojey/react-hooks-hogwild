import React, { useState } from "react";

const Filter = ({ setHogs, hogs}) => {
  const [isGreased, setIsGreased] = useState(false);
  const [sortOption, setSortOption] = useState("name");

  const handleFilterChange = (e) => {
    const isGreasedChecked = e.target.checked;
    setIsGreased(isGreasedChecked);
    updateHogs(isGreasedChecked, sortOption);
  };

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    setSortOption(sortBy);
    updateHogs(isGreased, sortBy);
  };

  const updateHogs = (isGreased, sortOption) => {
    let filteredHogs = hogs;


    if (isGreased) {
      filteredHogs = filteredHogs.filter(hog => hog.greased);
    }

    filteredHogs = filteredHogs.sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });

    setHogs(filteredHogs);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isGreased}
          onChange={handleFilterChange}
        />
        Greased
      </label>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default Filter;

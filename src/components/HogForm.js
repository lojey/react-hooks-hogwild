import React, { useState } from "react";

const HogForm = ({ setHogs }) => {
  const [newHog, setNewHog] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    highestMedalAchieved: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog({
      ...newHog,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHogs(prevHogs => [...prevHogs, newHog]);
    setNewHog({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedalAchieved: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newHog.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="image"
        value={newHog.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        name="specialty"
        value={newHog.specialty}
        onChange={handleChange}
        placeholder="Specialty"
      />
      <input
        type="number"
        name="weight"
        value={newHog.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <label>
        Greased:
        <input
          type="checkbox"
          name="greased"
          checked={newHog.greased}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="highestMedalAchieved"
        value={newHog.highestMedalAchieved}
        onChange={handleChange}
        placeholder="Highest Medal Achieved"
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;

import React, { useState } from "react";

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => setShowDetails(!showDetails);

  return (
    <div className="ui eight wide column" onClick={handleClick}>
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
          {showDetails && (
            <div className="description">
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight}</p>
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>
              <p>Highest Medal Achieved: {hog.highestMedalAchieved}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HogTile;

import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people] = useState([
    {
      id: 1,
      name: "Elon Musk",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    },
    {
      id: 2,
      name: "Jeff Bezos",
      url: "https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            key={person.id}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{
                background: `url(${person.url})`,
              }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

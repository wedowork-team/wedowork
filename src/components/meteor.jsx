import React, { useEffect, useState } from "react";
import "./meteor.css";

const MeteorBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {

    // STARS
    const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));

    setStars(generatedStars);

    // METEORS
    const generatedMeteors = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: Math.random() * 50,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 3 + 3,
    }));

    setMeteors(generatedMeteors);

  }, []);

  return (
    <div className="space-background">

      {/* STARS */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* METEORS */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}

    </div>
  );
};

export default MeteorBackground;
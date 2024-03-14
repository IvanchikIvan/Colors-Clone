import React, { useEffect, useState } from "react";

const App = () => {
  const [colors, setColors] = useState([]);

  const generateColorCode = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let randomPosition = Math.floor(Math.random() * 16);
      color += letters[randomPosition];
    }
    return color;
  };
  const getNewColor = () => {
    let local_colors = [];
    for (let i = 0; i < 6; i++) {
      local_colors[i] = generateColorCode();
    }
    setColors(local_colors);
  };

  const hadleSpaceBarClick = (e) => {
    if (e.code === "Space") {
      getNewColor();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", hadleSpaceBarClick);

    return () => {
      document.removeEventListener("keydown", hadleSpaceBarClick);
    };
  }, []);

  useEffect(() => {
    getNewColor();
  }, []);

  return (
    <div className="App">
      {colors.map((color) => (
        <div
          className="color"
          style={{
            backgroundColor: color,
          }}
        >
          <h1>{color}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;

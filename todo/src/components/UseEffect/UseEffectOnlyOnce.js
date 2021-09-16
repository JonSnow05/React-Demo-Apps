import React, { useEffect, useState } from "react";

function UseEffectOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Mouse component unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    }; //this is part of using UseEffect with unmount facilites
  }, []);
  return (
    <div>
      X- {x}, Y- {y}
    </div>
  );
}

export default UseEffectOnlyOnce;

import React, { useState } from "react";
import UseEffectOnlyOnce from "./UseEffectOnlyOnce";

function UseEffectWithCleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Unmount Component</button>
      {display && <UseEffectOnlyOnce />}
    </div>
  );
}

export default UseEffectWithCleanUp;

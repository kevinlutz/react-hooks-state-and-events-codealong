import React from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "orange" : "blue";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "On" : "Off"}
    </button>
  );
}

export default Toggle;

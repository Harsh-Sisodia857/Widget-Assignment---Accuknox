import React, { useState } from "react";
import { FaCheckSquare, FaSquare } from "react-icons/fa";

function ToggleCheckbox({ onClick }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onClick();
  };

  return (
    <div onClick={handleToggle} className="cursor-pointer mr-2">
      {isChecked ? <FaCheckSquare className="text-blue-500" /> : <FaSquare className="text-gray-500" />}
    </div>
  );
}

export default ToggleCheckbox;

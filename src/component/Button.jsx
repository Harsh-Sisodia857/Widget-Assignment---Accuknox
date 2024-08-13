import React from "react";

function Button({text, handleClick, selectedTab}) {
  const active = selectedTab == text
  console.log(selectedTab, text)
  return (
    <button
      className={`w-[40%] h-[50px] rounded-sm border-[0.5px] px-4 text-[12px] font-medium text-[#6B6B6B] hover:border-[#FFFFFF] hover:bg-[#FFFFFF]  ${
        active ? "border-[#FFFFFF]] bg-[#FFFFFF] text-green-600" : ""
      } hover:text-black font-semibold text-[14px]`}
      onClick={() => handleClick(text)}
    >
      {text}
    </button>
  );
}

export default Button;

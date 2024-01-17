import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="fixed z-50 text-thirdTheme top-[25px] left-[25px] text-2xl">
        LF
      </div>
      <div className="fixed z-50 top-[25px] right-[25px] text-thirdTheme cursor-pointer text-right font-bold">
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </>
  );
}

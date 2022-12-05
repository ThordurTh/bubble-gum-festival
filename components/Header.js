import React from "react";
import Anchor from "./Anchor";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  //   const closeMenu = () => {
  //     setNavbarOpen(false);
  //   };

  return (
    <nav>
      <Anchor className="logo" href="/">
        <Image src={logo} alt="logo"></Image>
      </Anchor>
      <div
        className={`menu-btn ${navbarOpen ? " close" : " "}`}
        onClick={handleToggle}
      >
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>
      <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <ul>
          <li onClick={handleToggle}>
            <Anchor href="/schedule" onClick={() => closeMenu()}>
              Schedule
            </Anchor>
          </li>
          <li onClick={handleToggle}>
            <Anchor href="/lineup">Lineup</Anchor>
          </li>
          <li onClick={handleToggle}>
            <Anchor href="/info" onClick={() => closeMenu()}>
              Info
            </Anchor>
          </li>
        </ul>
        <div className="book-now">
          <Anchor href="/ticketFlow">Book Now</Anchor>
        </div>
      </div>
    </nav>

    // <div className="nav-wrapper">
    //   <Anchor className="logo" href="/">
    //     <Image src={logo} alt="logo"></Image>
    //   </Anchor>

    //   <nav className="links">
    //     <div>
    //       <div>
    //         {navbarOpen ? "Close" : "Open"}
    //         <svg
    //
    //           width="32"
    //           height="32"
    //           viewBox="0 0 10 7"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <g clipPath="url(#clip0_122_495)">
    //             <rect width="10" height="7" fill="none" />
    //             <line
    //               x1="0.5"
    //               y1="0.5"
    //               x2="9.5"
    //               y2="0.5"
    //               stroke="white"
    //               strokeLinecap="round"
    //             />
    //             <line
    //               x1="0.5"
    //               y1="3.5"
    //               x2="9.5"
    //               y2="3.5"
    //               stroke="white"
    //               strokeLinecap="round"
    //             />
    //             <line
    //               x1="0.5"
    //               y1="6.5"
    //               x2="9.5"
    //               y2="6.5"
    //               stroke="white"
    //               strokeLinecap="round"
    //             />
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_122_495">
    //               <rect width="10" height="7" fill="white" />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </div>
    //       <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
    //         <li>
    //           <Anchor href="schedule.js">Schedule</Anchor>
    //         </li>
    //         <li>
    //           <Anchor href="lineup.js">Lineup</Anchor>
    //         </li>
    //         <li>
    //           <Anchor href="info.js">Info</Anchor>
    //         </li>
    //       </ul>
    //       <div className="book-now">
    //         <Anchor href="/ticketFlow">Book Now</Anchor>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

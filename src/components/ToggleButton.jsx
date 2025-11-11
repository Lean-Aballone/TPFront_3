import React from "react";

export default function ToggleButton({ isOpen, onToggle }) {
  return (<>

    <button id="toggle-button" onClick={onToggle} className="Button box_1">
    <div className={`nav2 ${isOpen ? "nav2_opened" : ""}`}>
        <div className={`close_extra ${isOpen ? "nav2_opened" : ""}`} id="one"></div>
        <div className={`close_one cross ${isOpen ? "cross_one" : ""}`}></div>
        <div className={`close_two cross ${isOpen ? "cross_two" : ""}`}></div>
        <div className={`close_extra ${isOpen ? "nav2_opened" : ""}`} id="three"></div>
    </div>
    </button>
    <style>
        {`
            .nav-ul.hidden {
                display: none;
            }

            .nav-ul.nav_open {
            display: block;
            animation: fadeIn 0.5s ease-in-out;
            }

            .nav2 {
                box-sizing: content-box;
                border: 0.2em solid rgba(255, 255, 255, 0.5);
                border-radius: 20%;
                padding: 0.3em;
                width: 30px;
                height: 30px;
                min-height: 30px;
                max-height: 30px;
                display: block;
            }

            .Button {
                text-align: center;
            }

            button.box_1 {
                display: block;
                border: none;
                margin: 0;
                padding: 0;
                background: transparent;
                box-shadow: none;
            }


            .nav2 div {
                height: 4px;
                margin: 5px 0;
                border-radius: 25px;
            }

            .close_extra {
                width: 100%;
                z-index: 1;
                background-color: rgba(200, 200, 200, 0.686);
                position: relative;
                transition: all 1s ease;
            }

            .close_one {
                width: 65%;
                z-index: 1;
                position: relative;
                background-color: rgba(200, 200, 200, 0.686);
                transition: all 1s ease;
            }

            .close_two {
                width: 80%;
                z-index: 10;
                background-color: rgba(200, 200, 200, 0.686);
                position: relative;
                transition: all 1s ease;
            }

            .close_extra {
                width: 100%;
                z-index: 1;
                background-color: rgba(200, 200, 200, 0.686);
                position: relative;
                transition: all 1s ease;
            }

            #three {
                top: -27px;
            }

            .nav2_opened#one, .nav2_opened#three {
                display: none;
            }

            .cross_one {
                top: 9px;
                width: 100%;
                background-color: magenta;
                transform: rotate(45deg);
            }

            .cross_two {
                width: 100%;
                background-color: magenta;
                transform: rotate(-45deg);
            }`}
    </style>
  </>
  );
}

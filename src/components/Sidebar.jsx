import React, { useState } from "react";
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";
import Ifts from "./Ifts";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <header className="ifts-header">
            <Ifts/>
            <ToggleButton isOpen={isOpen} onToggle={handleToggle} />
        </header>
        <hr style={{width: "100%"}}/>
        <Navbar isOpen={isOpen} />
    </div>
  );
}

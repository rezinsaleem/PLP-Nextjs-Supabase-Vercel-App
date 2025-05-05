import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-gray-800 text-gray-900 ">
            <div className="flex items-center justify-between" onClick={toggle}>
                <div className="flex flex-col">
                <span className="font-semibold mb-2 cursor-pointer">{title}</span>
                <p className="mb-2 cursor-pointer">All</p>
                </div>
                <span className="text-gray-600 text-xl">
                    {isOpen ? (
                        <ChevronUp />
                    ) : (
                        <ChevronDown />
                    )}
                </span>
            </div>

            {isOpen && <div className="space-y-1 text-sm py-2">{children}</div>}
        </div>
    );
};

export default Accordion;

import React from "react";
import Accordion from "../components/ui/Accordion";

const FilterSidebar = () => {
    return (
        <div className="space-y-6 text-gray-900">
            <Accordion title="IDEAL FOR">
                <span className="text-gray-600 underline "> Unselect All </span>
                <label className="flex items-center gap-2 mt-3">
                    <input type="checkbox" /> Men
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" /> Women
                </label>
                <label className="flex items-center gap-2 ">
                    <input type="checkbox" /> Baby & Kids
                </label>
            </Accordion>

            <Accordion title="OCCASION">
                <div className=" flex gap-3 mt-3 flex-col ">

                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>

            <Accordion title="WORK">
                <span className="text-gray-600 underline "> Unselect All </span>
                <div className=" flex gap-3 mt-3 flex-col ">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>

            <Accordion title="FABRIC">
                <span className="text-gray-600 underline "> Unselect All </span>
                <div className=" flex gap-3 mt-3 flex-col ">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>

            <Accordion title="SEGMENT">
                <span className="text-gray-600 underline "> Unselect All </span>
                <div className=" flex gap-3 mt-3 flex-col ">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>

            <Accordion title="SUITABLE FOR">
                <span className="text-gray-600 underline "> Unselect All </span>
                <div className=" flex gap-3 mt-3 flex-col ">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>

            <Accordion title="RAW MATERIAL">
                <span className="text-gray-600 underline "> Unselect All </span>
                <div className=" flex gap-3 mt-3 flex-col ">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>

            <Accordion title="PATTERN">
                <span className="text-gray-600 underline "> Unselect All </span>
                <div className=" flex gap-3 mt-3 flex-col ">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Cotton
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Linen
                    </label>
                </div>
            </Accordion>
        </div>
    );
};

export default FilterSidebar;

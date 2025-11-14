import React from "react";
import { Link } from "react-router-dom";

const ToolTip = () => {
  return (
    <div>
      <div className="container flex flex-row items-center justify-between text-md !my-2">
        <p>Get upto 50% off new season styles, limited time only</p>
        <div className="flex flex-row gap-4">
          <Link to={"/help-center"}>
            <p className="transition hover:text-orange-600">Help Center</p>
          </Link>
          <Link to={"order-tracking"}>
            <p className="transition hover:text-orange-600">Order Tracking</p>
          </Link>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-300"></div>
    </div>
  );
};

export default ToolTip;

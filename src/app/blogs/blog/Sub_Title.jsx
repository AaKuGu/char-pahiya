import React from "react";

const Sub_Title = ({ children }) => {
  return (
    <div>
      <h2 className={`text-xl font-semibold mb-2`}>{children}</h2>
    </div>
  );
};

export default Sub_Title;

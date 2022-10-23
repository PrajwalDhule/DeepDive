import React from "react";

import AnimatedCursor from "react-animated-cursor";

export const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={10}
      color="84, 242, 250"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};

export default Cursor;

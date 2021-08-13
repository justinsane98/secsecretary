import React, { Fragment } from "react";

const Subtitle = ({property}) => {
  const {title} = property;
  
  return (<Fragment>
   
      <h1
        style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
        className="mt-4 mb-8 375px:mt-6 text-3xl 375px:text-3xl 425px:text-3xl 768px:text-4xl 425px:max-w-sm leading-none text-white font-normal font-display absolute top-0 left-4 425px:left-8 768px:left-16 768px:top-8 z-10"
      >
        {title}
      </h1>


  </Fragment>
  )
  
  };

export default Subtitle;

import React, { Fragment } from "react";

const Title = ({property}) => {
  const {title} = property;
  
  return (<Fragment>
   
      <h1
        style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
        className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-90 via-white-75 to-blue-75 mb-4 text-7xl 375px:text-8xl 425px:text-9xl 768px:text-10xl 425px:max-w-md inline-block leading-none text-white font-display z-10"
      >
        {title}
      </h1>

  </Fragment>
  )
  
  };

export default Title;

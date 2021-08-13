import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";

const InlineLink = ({to, content, className, primary}) => {
        const duration = 0.5

        return (
    // <TransitionLink 
    //     to={to}
    //     enter={{ length: duration }}
    //     exit={{ length: duration }}
    //     className={classNames}
    //     style={{textShadow: "none"}}>
    //   {content}
    //   </TransitionLink>
    <a className="bg-pink-50 hover:bg-pink color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block hover:animate-none"
     href={to} target="_blank">{content}</a>
  );
}

export default InlineLink;

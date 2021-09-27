import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag"

const InlineLink = ({to, content, className, primary}) => {
        return (
    <OutboundLink className="bg-pink-50 hover:bg-pink color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block hover:animate-none"
     href={to} target="_blank">{content}</OutboundLink>
  );
}

export default InlineLink;

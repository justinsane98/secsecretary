import React from "react";

const Highlight = ({content, className}) => {
    return (
    <span className="bg-pink-25 color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block">
        {content}
        </span>
    );
}

export default Highlight;

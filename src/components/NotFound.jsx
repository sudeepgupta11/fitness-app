import React from "react";
import background from "./../assets/images/notFound.png";

function NotFound() {
  return (
    <div className="centerElement notFoundDiv">
      <img src={background} alt="Page Not Found" className="notFoundImage" />
    </div>
  );
}

export default NotFound;

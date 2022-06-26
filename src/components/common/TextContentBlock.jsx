import React from "react";
import { Link } from "react-router-dom";

export default function TextContentBlock({ children, title }) {
  return (
    <div className="text-content">
      <div className="top">
        <h4 className="title">{title}</h4>
        <p className="description">{children}</p>
      </div>

      <div className="bottom">
        <Link className="go-back" to="/">
          back
        </Link>
      </div>
    </div>
  );
}

import React from "react";

export default function Card({ url, children }) {
  return (
    <div className="card">
      {url && (
        <div className="card-imgbox">
          <img className="card-img" src={url} alt="" />
        </div>
      )}
      {children}
    </div>
  );
}

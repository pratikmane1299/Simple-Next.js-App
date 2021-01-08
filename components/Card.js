import React from "react";

const Card = ({ children, width }) => {
  return (
    <>
      <div className="card" style={{width: width ? width : '100%'}}>{children}</div>
      <style jsx>{`
        .card {
          margin: 1rem;
          // width: 75%;
          // max-width: 75%;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          background-color: #f1f1f1;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
      `}</style>
    </>
  );
};

export default Card;

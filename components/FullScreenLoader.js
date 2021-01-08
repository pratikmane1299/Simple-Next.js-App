import React from "react";

function FullScreenLoader() {
  return (
    <div className="full-screen-loader-wrapper">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>{`
        .full-screen-loader-wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loader {
          display: inline-block;
          position: relative;
          width: 90px;
          height: 90px;
        }
        .loader div {
          display: inline-block;
          position: absolute;
          width: 20px;
          background: #B6B6B6;
          animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .loader div:nth-child(1) {
          left: 10px;
          animation-delay: -0.24s;
        }
        .loader div:nth-child(2) {
          left: 40px;
          animation-delay: -0.12s;
        }
        .loader div:nth-child(3) {
          left: 70px;
          animation-delay: 0;
        }
        @keyframes loader {
          0% {
            top: 8px;
            height: 84px;
          }
          50%,
          100% {
            top: 24px;
            height: 42px;
          }
        }
      `}</style>
    </div>
  );
}

export default FullScreenLoader;

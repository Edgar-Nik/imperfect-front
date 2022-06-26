import React from "react";

export default function SpinnerLoader({ size }) {
  return (
    <div className="spinner-loader">
      <span
        className="spinner"
        style={{
          width: size ? size : 79,
          height: size ? size : 79,
        }}
      >
        <svg
          width={size ? size.toString() : "79"}
          height={size ? size.toString() : "79"}
          viewBox="0 0 79 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.9062 7.40625C46.9062 11.4967 43.5904 14.8125 39.5 14.8125C35.4096 14.8125 32.0938 11.4967 32.0938 7.40625C32.0938 3.31584 35.4096 0 39.5 0C43.5904 0 46.9062 3.31584 46.9062 7.40625ZM39.5 64.1875C35.4096 64.1875 32.0938 67.5033 32.0938 71.5938C32.0938 75.6842 35.4096 79 39.5 79C43.5904 79 46.9062 75.6842 46.9062 71.5938C46.9062 67.5033 43.5904 64.1875 39.5 64.1875ZM71.5938 32.0938C67.5033 32.0938 64.1875 35.4096 64.1875 39.5C64.1875 43.5904 67.5033 46.9062 71.5938 46.9062C75.6842 46.9062 79 43.5904 79 39.5C79 35.4096 75.6842 32.0938 71.5938 32.0938ZM14.8125 39.5C14.8125 35.4096 11.4967 32.0938 7.40625 32.0938C3.31584 32.0938 0 35.4096 0 39.5C0 43.5904 3.31584 46.9062 7.40625 46.9062C11.4967 46.9062 14.8125 43.5904 14.8125 39.5ZM16.8063 54.7874C12.7159 54.7874 9.40007 58.1033 9.40007 62.1937C9.40007 66.2841 12.7159 69.5999 16.8063 69.5999C20.8967 69.5999 24.2126 66.2841 24.2126 62.1937C24.2126 58.1034 20.8966 54.7874 16.8063 54.7874ZM62.1937 54.7874C58.1033 54.7874 54.7874 58.1033 54.7874 62.1937C54.7874 66.2841 58.1033 69.5999 62.1937 69.5999C66.2841 69.5999 69.5999 66.2841 69.5999 62.1937C69.5999 58.1034 66.2841 54.7874 62.1937 54.7874ZM16.8063 9.40007C12.7159 9.40007 9.40007 12.7159 9.40007 16.8063C9.40007 20.8967 12.7159 24.2126 16.8063 24.2126C20.8967 24.2126 24.2126 20.8967 24.2126 16.8063C24.2126 12.7159 20.8966 9.40007 16.8063 9.40007Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  );
}

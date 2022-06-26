import React from "react";

export default function PlayIcon({ color }) {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 1.1875C17.6641 1.1875 1.1875 17.6641 1.1875 38C1.1875 58.3359 17.6641 74.8125 38 74.8125C58.3359 74.8125 74.8125 58.3359 74.8125 38C74.8125 17.6641 58.3359 1.1875 38 1.1875ZM55.1742 41.5625L29.0492 56.5547C26.7039 57.8609 23.75 56.1836 23.75 53.4375V22.5625C23.75 19.8313 26.6891 18.1391 29.0492 19.4453L55.1742 35.3281C57.6086 36.6937 57.6086 40.2117 55.1742 41.5625Z"
        fill={color || "#C40707"}
      />
    </svg>
  );
}

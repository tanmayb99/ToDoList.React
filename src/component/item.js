import React from "react";

export default function Item({ number, title, date, status }) {
  return (
    <div>
      <span>{number}</span>
      <span>{title}</span>
      <span>{date}</span>
      <span>{status}</span>
    </div>
  );
}

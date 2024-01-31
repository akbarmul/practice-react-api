import React from "react";

export default function Card({ title, desc, price }) {
  return (
    <div className="bg-slate-200 py-3 px-4">
      <h5 className="text-2xl text-2xl font-bold">{title}</h5>
      <p className="text-md">{desc}</p>
      <p className="text-2xl font-bold">
        <span className="text-xl">$</span> {price}
      </p>
    </div>
  );
}

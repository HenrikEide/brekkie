"use client";
import React, { useEffect, useState } from "react";

export default function Home() {

  type Breakfast = {
    id: string;
    name: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    lastModifiedDateTime: string;
    savory: string[];
    sweet: string[];
  };

  const [breakfasts, setBreakfasts] = useState<Breakfast[]>([]);
  
  useEffect(() => {
    fetch("http://localhost:5286/breakfasts")
      .then((response) => response.json())
      .then((data) => {
        setBreakfasts(data);
      }
    );
  }
  , []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl font-bold text-center mb-24 p-4 border-b-2">
          Good Morning Bekfast bois
        </h1>
        {breakfasts.length === 0 && (
          <p className="text-center">No breakfasts :(</p>
        )}
        {breakfasts.map((breakfast) => (
          <div key={breakfast.id} className="p-4 shadow rounded mb-8 bg-gray-900">
            <h2 className="text-lg font-bold mb-4">{breakfast.name}</h2>
            <p>{breakfast.description}</p>
            <p>Savory: {breakfast.savory.join(", ")}</p>
            <p>Sweet: {breakfast.sweet.join(", ")}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

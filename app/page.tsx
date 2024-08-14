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
      <h1 className="text-4xl font-bold text-center">
        Hello myes
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {breakfasts.map((breakfast) => (
          <div key={breakfast.id} className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">{breakfast.name}</h2>
            <p>{breakfast.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

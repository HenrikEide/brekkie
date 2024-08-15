"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
      <>
        {breakfasts.length === 0 && (
          <p className="text-center">No breakfasts :(</p>
        )}
        <Accordion type="single" collapsible>
          {breakfasts.map((breakfast) => (
            <AccordionItem key={breakfast.id} value={breakfast.id} className="p-4 shadow rounded mb-8 bg-slate-800">
              <AccordionTrigger>
                <div >
                  <h2>{breakfast.name}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>{breakfast.description}</p> <br/>
                  <p>Savory: {breakfast.savory.join(", ")}</p>
                  <p>Sweet: {breakfast.sweet.join(", ")}</p> <br/>
                  <p>Start Time: {breakfast.startDateTime}</p>
                  <p>End Time: {breakfast.endDateTime}</p>
                  <p>Last Modified: {breakfast.lastModifiedDateTime}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </>
  );
}

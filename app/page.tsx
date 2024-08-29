"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

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
      })
      .catch((error) => {
        console.error("Failed to fetch breakfasts:", error);
        fetch("beekfast.json")
          .then((response) => response.json())
          .then((data) => {
            setBreakfasts(data);
          });
      });
  }, []);

  const deleteBreakfast = (id: string) => {
    fetch(`http://localhost:5286/breakfasts/${id}`, {
      method: "DELETE",
    });
    setBreakfasts(breakfasts.filter((b) => b.id !== id));
  };

  return (
    <>
      {breakfasts.length === 0 && (
        <p className="text-center">No breakfasts :(</p>
      )}
      <Accordion type="single" collapsible>
        {breakfasts.map((breakfast) => (
          <AccordionItem
            key={breakfast.id}
            value={breakfast.id}
            className="p-4 shadow rounded mb-8 bg-slate-800"
          >
            <AccordionTrigger>
              <div>
                <h2>{breakfast.name}</h2>
              </div>
              <div className="ml-auto mr-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DeleteIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-black">
                        Delete Breakfast
                      </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="my-6">
                      Are you sure you want to delete &quot;{breakfast.name}
                      &quot;?
                    </DialogDescription>
                    <DialogFooter>
                      <div className="flex justify-end space-x-4">
                        <DialogClose asChild>
                          <Button
                            onClick={(e) => {
                              deleteBreakfast(breakfast.id);
                              e.stopPropagation();
                            }}
                          >
                            Delete
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button
                            variant="secondary"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Cancel
                          </Button>
                        </DialogClose>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <p>{breakfast.description}</p> <br />
                <p>Savory: {breakfast.savory.join(", ")}</p>
                <p>Sweet: {breakfast.sweet.join(", ")}</p> <br />
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

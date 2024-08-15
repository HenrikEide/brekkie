"use client";
import React from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { start } from 'repl';

type NewBreakfast = {
    name: string;
    description: string;
    savory: string;
    sweet: string;
};

const schema = z.object({
    name: z.string(),
    description: z.string(),
    savory: z.string(),
    sweet: z.string(),
});

export default function BreakfastForm() {
    const form = useForm<NewBreakfast>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: NewBreakfast) => {
        const fixedData = {
            ...data,
            savory: data.savory.split(","),
            sweet: data.sweet.split(","),
            startDateTime: new Date().toISOString(),
            endDateTime: new Date().toISOString(),
        };
        fetch("http://localhost:5286/breakfasts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fixedData),
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Breakfast Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Ultra English'{...field} className='text-black' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder='Beyond full english' {...field} className='text-black' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.description?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="savory"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Savory</FormLabel>
                            <FormControl>
                                <Input placeholder='Bacon, eggs, sausage' {...field} className='text-black' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.savory?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="sweet"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sweet</FormLabel>
                            <FormControl>
                                <Input placeholder='Pancakes, waffles, syrup' {...field} className='text-black' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.sweet?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <div className="flex w-full">
                    <Button type="submit" className='ml-auto bg-slate-700'>Submit</Button>
                </div>
            </form>
        </Form>
    );
}
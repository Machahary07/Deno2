import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const name: string = "Deno";
const age: number = 3;
const isAwesome: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Is Awesome: ${isAwesome}`);

function greet(name: string, age: number): string {
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet("Deno", 3));

function intro(name: string, age: number): string {
    return `Hello, my name is ${name}, and i am ${age} years old.`;
}

console.log(intro('Jeu',18));
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

// ------------------- Dec 1 leetcode

function checkIfExist(arr: number[]): boolean {
    const seen = new Set<number>();

    for (const num of arr) {
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        seen.add(num);
    }

    return false;
}

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([7, 1, 14, 11]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([0, 0]));
console.log(checkIfExist([-2, 4, -8, -1]));

// ------------- Leetcode Dec 2

function isPrefixOfWord(sentence: string, searchWord: string): number {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) return i + 1;
    }
    return -1;
}

console.log(isPrefixOfWord('I love typescript with deno2','typescript'));
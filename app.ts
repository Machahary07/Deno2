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

// -------------leetcode dec 3

function addSpaces(s: string, spaces: number[]): string {
    const result: string[] = [];
    let spaceIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
        result.push(" ");
        spaceIndex++;
        }
        result.push(s[i]);
    }

    return result.join("");
}

console.log("Hello", addSpaces('ILoveDeno2', [1, 5, 9]))

// ---------------leetcode dec 4
// cyclic increment

function canMakeSubsequence(str1: string, str2: string): boolean {
    let targetIndex = 0;
    const targetLen = str2.length;

    for (const currChar of str1) {
        if (targetIndex < targetLen &&
            (str2.charCodeAt(targetIndex) - currChar.charCodeAt(0) + 26) % 26 <= 1) {
                targetIndex++;
        }
    }
    return targetIndex === targetLen;
};

console.log(canMakeSubsequence('ab','d')) //gives false
console.log(canMakeSubsequence('ab','c')) //gives true

// ----------------Leetcode dec 5
//You are given two strings start and target, both of length n. 
//Each string consists only of the characters 'L', 'R', and '_' where:
//The characters 'L' and 'R' represent pieces, where a piece 'L' can move
// to the left only if there is a blank space directly to its left, and a piece 'R' 
//can move to the right only if there is a blank space directly to its right.
//The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
//Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. 
//Otherwise, return false.
function canChange(start: string, target: string): boolean {
    if (start === target) return true;
    let waitL = 0, waitR = 0;
    
    for (let i = 0; i < start.length; i++) {
        const curr = start[i];
        const goal = target[i];
        
        if (curr === 'R') {
            if (waitL > 0) return false;
            waitR++;
        }
        if (goal === 'L') {
            if (waitR > 0) return false;
            waitL++;
        }
        if (goal === 'R') {
            if (waitR === 0) return false;
            waitR--;
        }
        if (curr === 'L') {
            if (waitL === 0) return false;
            waitL--;
        }
    }
    return waitL === 0 && waitR === 0;
}

// ----------------Leetcode dec 6
function maxCount(banned: number[], n:number, maxSum: number): number { 
    const bannedSet = new Set([...banned])
    let sum = 0, count = 0

    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) {
            continue
        }
        if (i + sum>maxSum) {
            break
        }
        count++
        sum += i
    }
    return count
};

console.log("maxCount of ([3,5,7,9],4,100): ",maxCount([3,5,7,9],4,100))
console.log("maxCount of ([1,6,5],5,6): ",maxCount([1,6,5],5,6))

//-----------------------Leetcode dec 7

function minimumSize(nums: number[], maxOperations: number): number {
    let left = 1, right = Math.max(...nums);

    while (left < right) {
        const mid = (left + right) >> 1;
        let operations = 0;

        for (const balls of nums) {
            operations += Math.floor((balls - 1) / mid);
            if (operations > maxOperations) break;
        }

        if (operations <= maxOperations) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

console.log("minimumSize of ([9],2): ",minimumSize([9],2))

//-----------------------dec 8 leetcode (kinda hard)
function maxTwoEvents(events: number[][]): number {

    events.sort((a, b) => a[1] - b[1]);
    let n = events.length;
    let max = events[0][2];

    for (let i = 1; i < n; i++) {
        max = Math.max(max, events[i][2] + getMaxEventBefore(events[i][0], i - 1));
        events[i][2] = Math.max(events[i][2], events[i - 1][2]);
    }

    return max;

    function getMaxEventBefore(start: number, right: number) {
        let left = 0;
        let ans = 0;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (events[mid][1] >= start) {
                right = mid - 1;
            } else {
                ans = Math.max(ans, events[mid][2]);
                left = mid + 1;
            }
        }
        return ans;
    }

};

console.log("getMaxEventBefore [[1,3,2],[4,5,2],[2,4,3]]: ",maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]]))
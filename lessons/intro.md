---
sidebar_position: 1
---

# Introduction

This course is aimed towards people **none to little prior coding experience**. It covers the foundations of programming by focusing on problem setting and problem solving. **JavaScript** is the chosen language: the standard language for frontend, a solid choice for backend.

Most of the topic are language agnostic though, and valid across various different choices, syntax and grammar apart of course.

Even if becoming a professional developer is not on your checklist, don't turn around! You will still benefit a lot by getting **a sense of computability** - read: what machinese can and cannot do - especially in a world where machinese and networks systems are playing an always more prominent role.

## What is code?

That's a good question! In a computer environment, code is a set of instructions that can be interpretated and executed by a machine, leading to **print some output on screen** or to generate some other consequence (writing something to the machine's disk, sending or retrieving some information over the network or interacting with the operating system).

In this course we'll focus mainly on the first. It may sound uninteresting at first, but think for a moment: everything you see online is some printed output! Ok there are images and videos, too many for my taste if you ask. But every webpage is a list of words and symbols under the hood.

What do we mean by producing an output? Let's consider the following example:

```js live showConsole showLines
function getTallest(list) {
    let tallest = list[0];
    for (let person of list) {
        if (person.height > tallest.height) {
            tallest = person;
        }
    }
    return tallest;
}

const ducklings = [
    { name: "Huey", height: 50 },
    { name: "Dewey", height: 60 },
    { name: "Louie", height: 40 },
];

console.log(getTallest(ducklings));
```

Heyhey, what's this mess of symbols and colors? You are right, I threw you into the cold water. But focus for one second on the list that goes from line 11 to 15 (`const ducklings = [...]`), then on the results below. Nevermind all the commas and curly braces and just consider the following three points:

-   we have a list with some **information** - name and supposed height of some amusing fictional characters
-   below we have the **output** of some operation
-   the **output matches our expectation** that Dewey is the tallest of the three, given the information in the list.

Now you could have found the same result by just looking at the list yourself. For such a small set I would have done the same too! But check the following:

```js live showConsole showLines
function getTallest(list) {
    let tallest = list[0];
    for (let person of list) {
        if (person.height > tallest.height) {
            tallest = person;
        }
    }
    return tallest;
}

const people = [
    { name: "Mr. A", height: 168 },
    { name: "Mrs. B", height: 171 },
    { name: "Mr. C", height: 158 },
    { name: "Mrs. D", height: 188 },
    { name: "Mr. E", height: 162 },
    { name: "Mrs. F", height: 193 },
    { name: "Mr. G", height: 158 },
    { name: "Mrs. H", height: 160 },
    { name: "Mr. I", height: 176 },
    { name: "Mrs. J", height: 187 },
    { name: "Mr. K", height: 189 },
    { name: "Mrs. L", height: 190 },
];

console.log(getTallest(people));
```

I bet you had to scan the whole list before finding out Mrs. F! Observe how the first four lines of the program are left untouched. Even if we don't understand what's going on yet, we have the intuition that the program has a flexible strategy to digest a list of **any possible length**. Now imagine having a list of thousands of entries and doing such search manually...let me know when you have chosen your new pair of glasses, I'll entertain myself with the gentle output of the program if you don't mind.

Input / operations / output. Avocado, onion, tomato... / chopping and mixing / guacamole. For each process we'll learn to determine the desired input and output and the instructions that will lead from the former to the latter. We'll also learn how to split broader operations in ones that are smallest and easier to understand.

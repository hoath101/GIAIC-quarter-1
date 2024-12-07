"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task = {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
    complete: function () {
        this.completed = true;
    }
};
const task2 = {
    id: 2,
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
    complete: function () {
        this.completed = true;
    }
};
console.log(task2);
task2.complete();
console.log(task2);

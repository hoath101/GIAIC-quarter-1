"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    id; // property or attribute
    title;
    description;
    completed;
    constructor(id, title, description, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    iscomplete() {
        this.completed = true;
    }
    incomplete() {
        this.completed = false;
    }
}
const taskOne = new Task(1, "Walk", "Walking to school");
console.log(taskOne);
taskOne.iscomplete();
console.log(taskOne);
const taskTwo = new Task(2, "Eat lunch", "Eat lunch with friends", true);
console.log(taskTwo);

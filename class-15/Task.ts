class Task {
  id: number; // property or attribute
  title: string;
  description: string;
  completed: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    completed: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  iscomplete(){
    this.completed = true;
  }
  incomplete(){
    this.completed = false;
  }
}
const taskOne = new Task (1,"Walk","Walking to school")
console.log(taskOne);
taskOne.iscomplete();
console.log(taskOne);

const taskTwo = new Task (2,"Eat lunch","Eat lunch with friends")
console.log(taskTwo);
taskTwo.iscomplete();
console.log(taskTwo);


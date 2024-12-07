let car = "Mehran";

const mycar = {
    name:"Mehran",
    color:"White",
    brand:"Suzuki",
    year:2023,
    availableColors: ["white","black","red"],
    instock: true
};
console.log(mycar["brand"]);
console.log(mycar.name);
console.log("--------------------");

const person = {
    firstName:"john",
    lastName:"doe",
    age:50,
    country:"USA",
    skinColor:"brown",
    isMarried: true,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    sayHello: function(){
       return `Hello, my name is ${this.fullName()}`
    }
};
console.log(person.fullName());
console.log(person.sayHello());
console.log("---------------------------");

// Object in Typescript

const pet:{type:string,name:string,age:number,color:string,sayMeow:()=>string} = { 
     type:"cat",
     name:"Tom",
     age:5,
     color:"gray",
     sayMeow: function(){
        return "Meow Meow"
     }
}
console.log(pet.sayMeow());
console.log("------------------");
 
// Making a custom type
type Person= {
    firstName:string,
    lastName:string,
    age:number
}
// Interface in Typescript
 
interface superHero extends Person {
      heroName:string,
      superPower:string
      sayHello:()=>string
};
const ironMan:superHero={
    firstName:"Tony",
    lastName:"Stark",
    age:28,
    heroName:"Iron_Man",
    superPower:"Iron_Suit",
    sayHello:function(){
        return `I am ${this.heroName}`
    }
};
console.log(ironMan.sayHello());


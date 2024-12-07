var car = "Mehran";
var mycar = {
    name: "Mehran",
    color: "White",
    brand: "Suzuki",
    year: 2023,
    availableColors: ["white", "black", "red"],
    instock: true
};
console.log(mycar["brand"]);
console.log(mycar.name);
console.log("--------------------");
var person = {
    firstName: "john",
    lastName: "doe",
    age: 50,
    country: "USA",
    skinColor: "brown",
    isMarried: true,
    fullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    sayHello: function () {
        return "Hello, my name is ".concat(this.fullName());
    }
};
console.log(person.fullName());
console.log(person.sayHello());
console.log("---------------------------");
// Object in Typescript
var pet = {
    type: "cat",
    name: "Tom",
    age: 5,
    color: "gray",
    sayMeow: function () {
        return "Meow Meow";
    }
};
console.log(pet.sayMeow());
console.log("------------------");
;
var ironMan = {
    firstName: "Tony",
    lastName: "Stark",
    age: 28,
    heroName: "Iron_Man",
    superPower: "Iron_Suit",
    sayHello: function () {
        return "I am ".concat(this.heroName);
    }
};
console.log(ironMan.sayHello());

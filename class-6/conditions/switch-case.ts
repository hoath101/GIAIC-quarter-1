const myNumber:number = 1;
switch(myNumber){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
}
type myAnswer = "yes" | "no" | "No" | "Yes" | "haan" | "nahi";
const isClassOnMonday = "nahi";

switch(isClassOnMonday){
    case "yes" as myAnswer:
    case "Yes" as myAnswer:
    case "haan" as myAnswer:
        console.log("There is class");
        break;
    case "No" as myAnswer:
    case "no" as myAnswer:
    case "nahi" as myAnswer:
        console.log("There is no class");
        break;
}
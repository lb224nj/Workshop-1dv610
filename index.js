console.log("Hello World!");

// kort basic function
function divideNumbers(a, b) {
  return a / b;
}

console.log(divideNumbers(12, 4));


function multiplyNumbers(a, b) {
  return a * b;
}

console.log(multiplyNumbers(12,4));


// Let och const variabler
let x = 16;
x = 20;

const y = 45

console.log(x)
console.log(y)

// Kort basic class
class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showStudentInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const student1 = new student('Love', 28)
student1.showStudentInfo();
//Part 1:
const dayOfWeek = "Wednesday";
switch (dayOfWeek) {
  case "Monday":
    console.log("What a good day");
    break;
  case "Saturday":
    console.log("I like Saturday");
  case "Wednesday":
    console.log("Studing day,Wednesday");
  default:
    break;
}

//Part 2:
const numbers = [10, 20, 30, 40, 50];
sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
  sum = sum + element;
}
console.log(sum);

// Part 3

const friut = ["Banana", "Cherry", "Pineapple", "Apple", "Pear"];

for (let i = 0; i < friut.length; i++) {
  const elementsOfFriut = friut[i];
  console.log(`${i}=>${elementsOfFriut}`); // this is with index number
  //console.log(`${i + 1}=>${elementsOfFriut}`); this is with ordinary number
}

const student = {
  name: "Murad",
  grade: 60,
};
const { grade } = student;

if (grade >= 60) {
  console.log("Murad is passed the exam");
} else {
  console.log("Murad is failed the exam");
}

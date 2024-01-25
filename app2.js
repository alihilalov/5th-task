//Part1
const color = "yellow";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;

  default:
    console.log("Can not define the color");
    break;
}
//Part2
const matrix = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
for (let i = 0; i < matrix.length; i++) {
  const element = matrix[i];
  console.log(element);
}
//Part3
const product = {
  name: "Coke",
  price: 9,
  inStock: true,
};

for (i in product) {
  console.log(`${i} : ${product[i]}`);
}

//Part4
const { price, inStock } = product;
if (price < 50 && inStock === true) {
  console.log("Available");
} else {
  console.log("Unavailable");
}

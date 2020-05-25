const numbers = [];
let total = 0;
do {
  let input = prompt("enter a number");
  console.log(input);

  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
  console.log(numbers);
} while (true);
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

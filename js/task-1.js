const logItems = function (array) {
  for (let item of array) {
    let index = array.indexOf(item) + 1;
    console.log(`${index} - ${item}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

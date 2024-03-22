"use strict";

/// Level 1 ///

function showInfo(currency) {
  console.log(
    `${this.fullName} in the position of ${this.position} he earns ${this.salary}${currency}`
  );
}

const employee1 = {
  fullName: "Peter Parker",
  position: "Superhero",
  salary: 4500,
};
const employee2 = {
  fullName: "Tony Stark",
  position: "Businessman",
  salary: 5500,
};

showInfo.apply(employee1, ["$"]);
showInfo.apply(employee2, ["$"]);

/// ---------------------------bind---------------------------- ///

// const showInfoOfEmployee1 = showInfo.bind(employee1, "$");
// const showInfoOfEmployee2 = showInfo.bind(employee2, "UAH");
const showInfoOfEmployee1 = showInfo.bind(employee1);
const showInfoOfEmployee2 = showInfo.bind(employee2);

showInfoOfEmployee1("$");
showInfoOfEmployee2("UAH");

/// Level 2 ///

const calculator = {
  num1: 0,
  num2: 0,
  read: function () {
    this.num1 = parseFloat(prompt("Enter first number:"));
    this.num2 = parseFloat(prompt("Enter second number:"));
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  mul: function () {
    return this.num1 * this.num2;
  },
};
calculator.read();
console.log("Sum:", calculator.sum());
console.log("Multiplication:", calculator.mul());

/// Level 2 ///

const shoppingCart = {
  items: [],
  sumOfItems: 0,

  addItem: function (title, price) {
    this.items.push({ title, price });
    this.sumOfItems += price;
  },
  removeItem: function (title) {
    for (const [index, item] of this.items.entries()) {
      if (item.title === title) {
        this.sumOfItems -= item.price;
        this.items.splice(index);
        return;
      }
    }
  },
  calculateTotalPrice: function () {
    console.log(`Sum of all items: ${this.sumOfItems}`);
  },
};

shoppingCart.addItem("Laptop", 1500);
shoppingCart.addItem("Iphone", 900);

shoppingCart.removeItem("Laptop");

shoppingCart.calculateTotalPrice();

shoppingCart.addItem("Iphone", 900);

shoppingCart.calculateTotalPrice();

shoppingCart.addItem("Laptop", 1500);

shoppingCart.calculateTotalPrice();

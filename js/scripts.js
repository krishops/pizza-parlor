//Business Logic for Parlor
function NewParlor() {
  this.pizza = {}
  this.currentId = 0
  this.pizzaPrice = 0
}

NewParlor.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizza[pizza.id] = pizza;
}

NewParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

NewParlor.prototype.findPizza = function(id) {
  if (this.pizza[id] != undefined) {
    return this.pizza[id];
  }
  return false;
};

// NewParlor.prototype.totalPrice = function() {
//   this.pizzaPrice = 0
// }
// NewParlor.prototype.calculatePrice = function() {
//   switch (this.findPizza())  {
//         case (this.size === "small"):
//           this.pizzaPrice += 5;
//           break;
//         case ("medium"):
//           this.pizzaPrice += 7;
//           break;
//         case ("large"):
//           this.pizzaPrice += 9;
//           break;
      
// }
// return pizzaPrice;

// }

NewParlor.prototype.pizzaPrice = function(id, pizzaSize, toppingOne, toppingTwo, toppingThree, toppingFour) {
  this.pizza[id].pizzaPrice = parseInt(pizzaSize) + parseInt(toppingOne) + parseInt(toppingTwo) + parseInt(toppingThree) + parseInt(toppingFour)
}
console.log(this.pizzaPrice)

// NewParlor.prototype.itemPrices = function() {

// function pizzaPrice() {
//   if (inputtedSize === "small")
// }

// Business Logic for Pizza
function NewPizza(pizzaSize, toppingOne, toppingTwo, toppingThree, toppingFour) {
  this.pizzaSize = pizzaSize;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.toppingFour = toppingFour;  //Possibly refactor this into nested objects
}

// NewPizza.prototype.findPrice = function() {
//   this.pizzaPrice = 0
//   if (this.size === "small")  {
//     this.pizzaPrice += 5;
//   }
//   console.log("HUZZAH", this.pizzaPrice)
// }

//UI Logic
let newParlor = new NewParlor();

$(document).ready(function () {
  $("form#pizza-parlor").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=select-size]:checked").val();
    const inputtedToppingOne = $("#topping-one").val();
    const inputtedToppingTwo = $("#topping-two").val();
    const inputtedToppingThree = $("#topping-three").val();
    const inputtedToppingFour = $("#topping-four").val();
    let newPizza = new NewPizza(inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedToppingFour)
    newParlor.addPizza(newPizza);
    console.log(newPizza);
    newParlor.pizzaPrice(newParlor["id"], inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedToppingFour);
    // newParlor.calculatePrice(inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedToppingFour)
    // $(".pizza-size").html(inputtedSize);
    // $(".first-topping").html(inputtedToppingOne);
    // $(".second-topping").html(inputtedToppingTwo);
    // $(".third-topping").html(inputtedToppingThree);
    // $(".fourth-topping").html(inputtedToppingFour);

    
      // if (inputtedSize === "small") {
      //   return 5;
      // } else if (inputtedSize === "medium") {
      //   return 7;
      // } else if (inputtedSize === "large") {
      //   return 9;}     
      //   newParlor.calculatePrice(inputtedSize, 0, 0, 0, 0) 
    });
  });



// Pizza constructor with this.s for toppings (embed them?) drop down menus for different options. Drop-down select forms for different toppings - insert into constructor for pizza? Radio button for size (select one). constructor for new pizza, constructor for pizza toppings/size, method for pizza price.
//maybe assign prices to each key/key value ~ if topping One $2, if toppingTwo $4, can only select second topping if select first topping, etc. although I'm not sure if that would be in UI or HTML. Assign value in HTML? Similar to language selector project



// NewParlor.prototype.itemPrices = function() {
//   switch (this.pizzaPrice())  {
//     case ("small"):
//       this.pizzaPrice += 5;
//       break;
//     case ("medium"):
//       this.pizzaPrice += 7;
//       break;
//     case ("large"):
//       this.pizzaPrice += 9;
//       break;
//   }
// }


// function showPizza(pizzaId) {
//   const pizza = newParlor.findPizza(pizzaId);
//   // $("#show-pizza").show();
//   $(".pizza-size").html(pizza.size);
//   $(".first-topping").html(pizza.toppingOne);
//   $(".second-topping").html(pizza.toppingTwo);
//   $(".third-topping").html(pizza.toppingThree);
//   $(".fourth-topping").html(pizza.toppingFour);

  // let buttons = $("#buttons");
  // buttons.empty();
  // buttons.append("<button class ='deleteButton' id=" + + contact.id + ">Delete</button>");
// 
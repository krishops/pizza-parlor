// Pizza constructor with this.s for toppings (embed them?) drop down menus for different options. Drop-down select forms for different toppings - insert into constructor for pizza? Radio button for size (select one). constructor for new pizza, constructor for pizza toppings/size, method for pizza price.
//maybe assign prices to each key/key value ~ if topping One $2, if toppingTwo $4, can only select second topping if select first topping, etc. although I'm not sure if that would be in UI or HTML. Assign value in HTML? Similar to language selector project

//Business Logic for Parlor
function NewParlor() {
  this.pizza = {}
  this.currentId = 0
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

// Business Logic for Pizza
function NewPizza(Size, toppingOne, toppingTwo, toppingThree, toppingFour) {
  this.size = Size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.toppingFour = toppingFour;  //Possibly refactor this into nested objects
}

NewParlor.prototype.pizzaPrice = function() {
  this.pizzaPrice = (this.pizzaSize) + parseInt(this.pizza[id].toppingOne) + parseInt(this.pizza[id].toppingTwo) + parseInt(this.pizza[id].toppingThree) + parseInt(this.pizza[id].toppingFour)
}

NewParlor.prototype.itemPrices = function() {
  switch (this.size)  {
    case ("small"):
    this.pizzaSize === 5
  }
}

//UI Logic
let newParlor = new NewParlor();

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
// }


$(document).ready(function()  {
  $("form#pizza-parlor").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=select-size]:checked").val();
    const inputtedToppingOne = $("#topping-one").val();
    const inputtedToppingTwo = $("#topping-two").val();
    const inputtedToppingThree = $("#topping-three").val();
    const inputtedToppingFour = $("#topping-four").val();
    let newPizza = new NewPizza(inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedToppingFour)
    newParlor.addPizza(newPizza);
    console.log(newPizza)
    $(".pizza-size").html(inputtedSize);
    $(".first-topping").html(inputtedToppingOne);
    $(".second-topping").html(inputtedToppingTwo);
    $(".third-topping").html(inputtedToppingThree);
    $(".fourth-topping").html(inputtedToppingFour);
  })
})


const color = "red";
switch (color) {
  case ("red"):
    console.log("Red!");
  case ("green"):
    console.log("Green!");
    break;
  case ("blue"):
    console.log("Blue!");
    break;
  default:
    console.log("It's not red, blue, or green.");
}
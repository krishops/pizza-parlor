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

// Business Logic for Pizza
function NewPizza(Size, toppingOne, toppingTwo, toppingThree, toppingFour) {
  this.size = Size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.toppingFour = toppingFour;  //Possibly refactor this into nested objects
}

NewParlor.prototype.pizzaPrice = function() {
  this.pizzaPrice = parseInt(this.pizza[id].size) + parseInt(this.pizza[id].toppingOne) + parseInt(this.pizza[id].toppingTwo) + parseInt(this.pizza[id].toppingThree) + parseInt(this.pizza[id].toppingFour)
}

//UI Logic
let newParlor = new NewParlor();

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
  })
})
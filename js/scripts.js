// Pizza constructor with this.s for toppings (embed them?) drop down menus for different options. Radio buttons (select multiple) for different toppings - insert into constructor for pizza. Radio button for size (select one). constructor for new pizza, constructor for pizza toppings/size, method for pizza price.

//Business Logic for Parlor
function NewParlor() {
  this.pizza = {}
  this.currentId = 0
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





//UI Logic
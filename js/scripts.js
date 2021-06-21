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

NewParlor.prototype.pizzaPrice = function(id, pizzaSize, toppingOne, toppingTwo, toppingThree, toppingFour) {
  this.pizza[id].pizzaPrice += parseInt(pizzaSize) + parseInt(toppingOne) + parseInt(toppingTwo) + parseInt(toppingThree) + parseInt(toppingFour);
  return this.pizza[id].pizzaPrice;
}


function NewPizza(pizzaSize, toppingOne, toppingTwo, toppingThree, toppingFour) {
  this.pizzaSize = pizzaSize;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.toppingFour = toppingFour;
}

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
    newParlor.pizzaPrice(newPizza["id"], inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedToppingFour);
    $("#pizza-price").html(newParlor.id.pizzaPrice)
  });
})

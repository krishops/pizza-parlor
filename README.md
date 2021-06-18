# Pizza Parlor

#### A JavaScript project for demonstrating the use of objects

#### By Kristen Hopper

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQUery_

## Description

This project accepts user responses for pizza toppings to output a total price of the pizza.

## Setup/Installation Requirements

1. Create an empty directory with no local repository. 
2. Within the new directory, run `git clone https://github.com/krishops/pizza-parlor.git` in the terminal to clone the project files to a local repository.
3. Within the top level of the cloned directory, open pizza-parlor/index.html to run the program in the browser.

## Known Bugs

* Project does not output the total to the user.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) Kristen Hopper

## Contact Information

hopperdavis@gmail.com

---

Describe: function NewPizza()

Test: It will create a new object "newParlor" with no id.
Code: let newParlor = new NewParlor()
Expected Result: newPizza; undefined currentId: 0, pizza: {}

Describe: prototype.assignId()

Test: It will assign an id to object newParlor".
Code: newParlor.assignId()
Expected Result: newParlor; undefined currentId: 1, pizza {}

Describe: function NewPizza()

Test: It will create a Pizza object "newPizza"
Code: let newPizza = new NewPizza()
Expected Result: newPizza {size: undefined toppingOne: undefined toppingTwo: undefined toppingThree: undefined toppingFour: undefined}

Describe: NewParlor.prototype.addPizza(newPizza)

Test: It will add a new pizza to the "newParlor" object.
Code: newParlor.addPizza(newPizza)
Expected Result: newParlor {currentId: 1 pizza:{1, NewPizza}}

Describe: NewParlor.prototype.pizzaPrice()

Test: It will add the price of size and toppings and output the total price for the pizza.
Code: HTML form input 
Result: pizzaPrice: (17) 

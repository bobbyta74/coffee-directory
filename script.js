const inventory = [
    {
        "Category": "Wanker",
        "Beverage": "Caffe Americano",
        "Customization": "None",
        "Size": "Grande",
        "Calories": 15
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Americano",
      "Customization": "None",
      "Size": "Grande",
      "Calories": 15
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Americano",
      "Customization": "None",
      "Size": "Short",
      "Calories": 5
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Americano",
      "Customization": "None",
      "Size": "Tall",
      "Calories": 10
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Americano",
      "Customization": "None",
      "Size": "Venti",
      "Calories": 25
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 100
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 150
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 190
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 240
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 130
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 70
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 70
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 110
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 150
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 190
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 100
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Latte",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 170
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 130
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 200
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 260
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 340
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 220
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 110
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 110
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 180
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 230
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 290
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 170
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Caffe Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 280
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 80
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 90
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 120
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 150
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 80
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 50
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 50
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 70
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 100
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 120
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 60
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Cappuccino",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 110
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Espresso",
      "Customization": "Doppio",
      "Size": "",
      "Calories": 10
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Espresso",
      "Customization": "Solo",
      "Size": "",
      "Calories": 5
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Skinny Latte (Any Flavour)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 120
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Skinny Latte (Any Flavour)",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 60
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Skinny Latte (Any Flavour)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 100
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Skinny Latte (Any Flavour)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 160
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 130
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 200
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 250
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 320
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 200
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 100
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 110
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 160
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 210
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 270
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 150
    },
    {
      "Category": "Classic Espresso Drinks",
      "Beverage": "Vanilla Latte (Or Other Flavoured Latte)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 250
    },
    {
      "Category": "Coffee",
      "Beverage": "Brewed Coffee",
      "Customization": "None",
      "Size": "Grande",
      "Calories": 5
    },
    {
      "Category": "Coffee",
      "Beverage": "Brewed Coffee",
      "Customization": "None",
      "Size": "Short",
      "Calories": 3
    },
    {
      "Category": "Coffee",
      "Beverage": "Brewed Coffee",
      "Customization": "None",
      "Size": "Tall",
      "Calories": 4
    },
    {
      "Category": "Coffee",
      "Beverage": "Brewed Coffee",
      "Customization": "None",
      "Size": "Venti",
      "Calories": 5
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 280
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 180
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 260
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 340
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 180
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 330
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Short",
      "Calories": 200
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Tall",
      "Calories": 280
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Caramel (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Grande",
      "Calories": 370
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 220
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 160
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 220
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 310
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 160
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 310
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Whole Milk",
      "Size": "Short",
      "Calories": 180
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Whole Milk",
      "Size": "Tall",
      "Calories": 240
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Whole Milk",
      "Size": "Grande",
      "Calories": 350
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 310
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 220
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 310
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 430
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 220
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 420
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Short",
      "Calories": 240
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Tall",
      "Calories": 340
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Java Chip (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Grande",
      "Calories": 460
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 260
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 180
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 260
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 350
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 180
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 340
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Short",
      "Calories": 200
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Tall",
      "Calories": 290
    },
    {
      "Category": "Frappuccino Blended Coffee",
      "Beverage": "Mocha (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Grande",
      "Calories": 390
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 230
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 170
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 240
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 320
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 170
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 310
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Short",
      "Calories": 190
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Tall",
      "Calories": 260
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Strawberries & Creme (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "Grande",
      "Calories": 350
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Vanilla Bean (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 240
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Vanilla Bean (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "",
      "Calories": 180
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Vanilla Bean (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 170
    },
    {
      "Category": "Frappuccino Blended Crème",
      "Beverage": "Vanilla Bean (Without Whipped Cream)",
      "Customization": "Whole Milk",
      "Size": "",
      "Calories": 200
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Caramel",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 150
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Caramel",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 100
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Caramel",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 200
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 120
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 90
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Coffee",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 160
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Java Chip",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 220
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Java Chip",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 150
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Java Chip",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 290
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Mocha",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 150
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Mocha",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 110
    },
    {
      "Category": "Frappuccino Light Blended Coffee",
      "Beverage": "Mocha",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 210
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Classic Syrup)",
      "Customization": "Grande",
      "Size": "Grande",
      "Calories": 90
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Classic Syrup)",
      "Customization": "Tall",
      "Size": "Tall",
      "Calories": 60
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Classic Syrup)",
      "Customization": "Venti",
      "Size": "Venti",
      "Calories": 130
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 90
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 120
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 180
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 110
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 80
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 110
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 170
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 80
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Iced Brewed Coffee (With Milk & Classic Syrup)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 160
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Shaken Iced Tazo Tea (With Classic Syrup)",
      "Customization": "Grande",
      "Size": "Grande",
      "Calories": 80
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Shaken Iced Tazo Tea (With Classic Syrup)",
      "Customization": "Tall",
      "Size": "Tall",
      "Calories": 60
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Shaken Iced Tazo Tea (With Classic Syrup)",
      "Customization": "Venti",
      "Size": "Venti",
      "Calories": 120
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Shaken Iced Tazo Tea Lemonade (With Classic Syrup)",
      "Customization": "Grande",
      "Size": "Grande",
      "Calories": 130
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Shaken Iced Tazo Tea Lemonade (With Classic Syrup)",
      "Customization": "Tall",
      "Size": "Tall",
      "Calories": 100
    },
    {
      "Category": "Shaken Iced Beverages",
      "Beverage": "Shaken Iced Tazo Tea Lemonade (With Classic Syrup)",
      "Customization": "Venti",
      "Size": "Venti",
      "Calories": 190
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Apple Spice (Without Whipped Cream)",
      "Customization": "Grande",
      "Size": "Grande",
      "Calories": 280
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Apple Spice (Without Whipped Cream)",
      "Customization": "Short",
      "Size": "Short",
      "Calories": 140
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Apple Spice (Without Whipped Cream)",
      "Customization": "Tall",
      "Size": "Tall",
      "Calories": 210
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Apple Spice (Without Whipped Cream)",
      "Customization": "Venti",
      "Size": "Venti",
      "Calories": 360
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 120
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 180
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 240
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 300
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 190
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 100
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 100
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 150
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 200
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 250
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 140
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Caramel Macchiato",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 240
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 150
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 230
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 290
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 380
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 240
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 130
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 130
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 200
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 250
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 330
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 190
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "Hot Chocolate (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 320
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 200
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 310
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 400
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 510
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 350
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 180
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 180
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 280
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 370
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 460
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 270
    },
    {
      "Category": "Signature Espresso Drinks",
      "Beverage": "White Chocolate Mocha (Without Whipped Cream)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 450
    },
    {
      "Category": "Smoothies",
      "Beverage": "Banana Chocolate Smoothie",
      "Customization": "2% Milk",
      "Size": "",
      "Calories": 300
    },
    {
      "Category": "Smoothies",
      "Beverage": "Banana Chocolate Smoothie",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 280
    },
    {
      "Category": "Smoothies",
      "Beverage": "Banana Chocolate Smoothie",
      "Customization": "Soymilk",
      "Size": "",
      "Calories": 290
    },
    {
      "Category": "Smoothies",
      "Beverage": "Orange Mango Banana Smoothie",
      "Customization": "2% Milk",
      "Size": "",
      "Calories": 270
    },
    {
      "Category": "Smoothies",
      "Beverage": "Orange Mango Banana Smoothie",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 260
    },
    {
      "Category": "Smoothies",
      "Beverage": "Orange Mango Banana Smoothie",
      "Customization": "Soymilk",
      "Size": "",
      "Calories": 270
    },
    {
      "Category": "Smoothies",
      "Beverage": "Strawberry Banana Smoothie",
      "Customization": "2% Milk",
      "Size": "",
      "Calories": 290
    },
    {
      "Category": "Smoothies",
      "Beverage": "Strawberry Banana Smoothie",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 290
    },
    {
      "Category": "Smoothies",
      "Beverage": "Strawberry Banana Smoothie",
      "Customization": "Soymilk",
      "Size": "",
      "Calories": 290
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 120
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 190
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 240
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 310
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 210
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 100
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 110
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 160
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 220
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 280
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 160
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Chai Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 260
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 90
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 140
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 190
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 230
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 150
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 80
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 80
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 130
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 170
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 210
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 120
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Red Tea Latte (Vanilla Rooibos)",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 190
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 90
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 140
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 190
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 230
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 150
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 80
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 80
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 130
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 170
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 210
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 120
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Full-Leaf Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 190
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "2% Milk",
      "Size": "Short",
      "Calories": 170
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "2% Milk",
      "Size": "Tall",
      "Calories": 260
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "2% Milk",
      "Size": "Grande",
      "Calories": 350
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "2% Milk",
      "Size": "Venti",
      "Calories": 450
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Grande",
      "Calories": 290
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Short",
      "Calories": 130
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Soymilk",
      "Size": "Short",
      "Calories": 140
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Soymilk",
      "Size": "Tall",
      "Calories": 230
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Soymilk",
      "Size": "Grande",
      "Calories": 310
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Soymilk",
      "Size": "Venti",
      "Calories": 390
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Tall",
      "Calories": 210
    },
    {
      "Category": "Tazo Tea Drinks",
      "Beverage": "Tazo Green Tea Latte",
      "Customization": "Nonfat Milk",
      "Size": "Venti",
      "Calories": 370
    }
  ];
const cat = document.querySelector("#catselect");
const drink = document.querySelector("#drinkselect");
const custom = document.querySelector("#customselect");
const size = document.querySelector("#sizeselect");

function updatedropdowns (array) {
    for (let i of [cat, drink, custom, size]) {
        i.textContent = "";
    }
    let setuparray = [];
    for (let i of array) {
        if (!(setuparray.indexOf(i.Category) > -1)) {
            setuparray.push(i.Category);
            let myoption = document.createElement("option");
            myoption.value = i.Category;
            myoption.textContent = i.Category;
            cat.appendChild(myoption);
        }
    }

    setuparray = [];
    for (let i of array) {
        if (!(setuparray.indexOf(i.Beverage) > -1)) {
            setuparray.push(i.Beverage);
            let myoption = document.createElement("option");
            myoption.value = i.Beverage;
            myoption.textContent = i.Beverage;
            drink.appendChild(myoption);
        }
    }

    setuparray = [];
    for (let i of array) {
        if (!(setuparray.indexOf(i.Customization) > -1)) {
            setuparray.push(i.Customization);
            let myoption = document.createElement("option");
            myoption.value = i.Customization;
            myoption.textContent = i.Customization;
            custom.appendChild(myoption);
        }
    }

    setuparray = [];
    for (let i of array) {
        if (!(setuparray.indexOf(i.Size) > -1)) {
            setuparray.push(i.Size);
            let myoption = document.createElement("option");
            myoption.value = i.Size;
            myoption.textContent = i.Size;
            size.appendChild(myoption);
        }
    }
}

updatedropdowns(inventory);

let eligibledrinks = [];


cat.addEventListener("input", function () {
    eligibledrinks = [];
    for (let i of inventory) {
        if (i.Category == cat.value) {
            eligibledrinks.push(i);
        }
    }
    console.log(eligibledrinks);
    updatedropdowns(eligibledrinks);
})
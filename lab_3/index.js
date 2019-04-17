// 1) Сеть фастфудов предлагает несколько видов гамбургеров:

// - маленький (50 тугриков, 20 калорий)
// - большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// - сыром (+ 10 тугриков, + 20 калорий)
// - салатом (+ 20 тугриков, + 5 калорий)
// - картофелем (+ 15 тугриков, + 10 калорий)

// Можно добавить добавки:

// - посыпать приправой (+ 15 тугриков, 0 калорий)
// - полить майонезом (+ 20 тугриков, + 5 калорий).

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

// Пример работы кода:

// // маленький гамбургер с начинкой из сыра

// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка из майонеза

// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // спросим сколько там калорий

// console.log(“Calories: “ + hamburger.calculateCalories());

// // сколько стоит

// console.log("Price: “ + hamburger.calculatePrice());

// // я тут передумал и решил добавить еще приправу

// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А сколько теперь стоит?

// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger {
  constructor(size, fill) {
    this.size = size;
    this.fill = fill;
    this.price = size.tugriks + fill.tugriks;
    this.calories = size.calories + fill.calories;
  }

  static get BIG_SIZE() {
    return { tugriks: 100, calories: 40 };
  }

  static get SMALL_SIZE() {
    return { tugriks: 50, calories: 20 };
  }

  static get STUFFING_CHEESE() {
    return { tugriks: 10, calories: 20 };
  }

  static get STUFFING_SALAD() {
    return { tugriks: 20, calories: 5 };
  }

  static get STUFFING_FRIES() {
    return { tugriks: 15, calories: 10 };
  }

  static get TOPPING_SAUCE() {
    return { tugriks: 15, calories: 0 };
  }

  static get TOPPING_MAYO() {
    return { tugriks: 20, calories: 5 };
  }

  calculateCalories() {
    return this.calories;
  }

  calculatePrice() {
    return this.price;
  }

  addTopping(dop) {
    this.price += dop.tugriks;
    this.calories += dop.calories;
  }
}

let hamburger = new Hamburger(Hamburger.BIG_SIZE, Hamburger.STUFFING_CHEESE);
console.log(`Price = ${hamburger.calculatePrice()}`);
console.log(`Calories = ${hamburger.calculateCalories()}`);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(`Price = ${hamburger.calculatePrice()}`);
console.log(`Calories = ${hamburger.calculateCalories()}`);

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

// let hamburger = new Hamburger(Hamburger.BIG_SIZE, Hamburger.STUFFING_CHEESE);
// console.log(`Price = ${hamburger.calculatePrice()}`);
// console.log(`Calories = ${hamburger.calculateCalories()}`);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// console.log(`Price = ${hamburger.calculatePrice()}`);
// console.log(`Calories = ${hamburger.calculateCalories()}`);

//=======================================================================

// 2) Вам нужно сделать конструктор сущности Студент.

// У Студента есть имя, фамилия, год рождения — это свойства.
// Есть массив с оценками, это тоже свойство.
// И есть возможность получить возраст студента и его средний бал — это методы.

// Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов,
// изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость,
// каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true,
// когда вызываем .absent() — записывается false. Предусмотрите какую нибудь защиту от того чтоб в массиве
// посещаемости не могло быть более 25 записей. Массив это свойство, present и absent — методы.

// Ну и последний метод: .summary(), он проверяет среднюю оценку,
// и среднее посещение(количествоПосещений/количествоЗанятий), и если средняя оценка больше 90 а
// среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!",
// если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".

// Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров
// (конкретных студентов) и подергать методы.

class Student {
  constructor(name, lastname, year, marks) {
    this.name = name;
    this.lastname = lastname;
    this.year = year;
    this.marks = marks;
    this.attendance = [];
  }

  present() {
    if (this.attendance.length <= 25) {
      this.attendance.push(true);
    } else {
      console.log("больше 25");
    }
  }

  absent() {
    if (this.attendance.length <= 25) {
      this.attendance.push(false);
    } else {
      console.log("больше 25");
    }
  }

  summary() {
    let sum = 0;
    let present = 0;
    this.marks.forEach(item => {
      sum += item;
    });

    this.attendance.forEach(item => {
      if (item == true) {
        present++;
      }
    });

    if (
      sum / this.marks.length >= 90 &&
      present / this.attendance.length >= 0.9
    ) {
      return "Ути какой молодчинка!";
    } else if (
      (sum / this.marks.length <= 90 &&
        present / this.attendance.length > 0.9) ||
      (sum / this.marks.length >= 90 && present / this.attendance.length < 0.9)
    ) {
      return "Норм, но можно лучше";
    } else {
      return "Давай по новой!";
    }
  }
}

let student = new Student("Dima", "MEdima", "1999", [90, 90, 90, 90, 30]);
student.absent();
student.present();
student.absent();
student.absent();
student.absent();
student.absent();
student.absent();
console.log(student.summary());

let student1 = new Student("Nick", "MEdima", "1999", [90, 10, 90, 90, 30]);
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
console.log(student1.summary());

let student2 = new Student("Kostya", "MEdima", "1999", [90, 90, 90, 90, 90]);
student2.absent();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
console.log(student2.summary());

// Создать конструктор массива, который будет содержать [объекты] из прошлого задания на прототипы.

// Массивы созданные с помощью этого конструктора должны содержать следующие методы:

// .attendance — если вызывается без аргумента, то возвращает среднюю посещаемость группы за одно занятие;
// если с аргументом — строкой содержащей фамилию одного из студентов, то возвращает его место в рейтинге
// посещаемости

// .performance — то же самое, но с оценками

class Arr {
  constructor(mass) {
    this.mass = mass;
  }

  attendance(name) {
    let rating = {};
    let mass = [];
    if (name) {
      this.mass.forEach(item => {
        rating["name"] = item.name;
        rating["attend"] = eval(item.attendance.join("+"));
        mass.push(rating);
        rating = {};
      });
      mass.sort((a, b) => b.attend - a.attend);
      let position = 0;
      mass.forEach((item, i) => {
        if (item.name === name) {
          position = i;
        }
      });
      return position;
    } else {
      let attend = [];
      let tmp = this.mass[0].attendance.length;
      let tmp_mass = [];
      let total = [];
      for (let i = 0; i < tmp; i++) {
        this.mass.forEach(item => {
          tmp_mass.push(item.attendance[i]);
        });
        attend.push(tmp_mass);
        tmp_mass = [];
      }
      attend.forEach(item => {
        let sum = item.reduce((sum, cur) => {
          return sum + cur;
        });
        total.push(sum / item.length);
      });
      return total;
    }
  }

  performance(name) {
    let rating = {};
    let mass = [];
    if (name) {
      this.mass.forEach(item => {
        rating["name"] = item.name;
        rating["mark"] = eval(item.marks.join("+")) / item.marks.length;
        mass.push(rating);
        rating = {};
      });
      mass.sort((a, b) => b.mark - a.mark);
      let position = 0;
      mass.forEach((item, i) => {
        if (item.name === name) {
          position = i;
        }
      });
      return position;
    } else {
      let marks = [];
      let tmp = this.mass[0].marks.length;
      let tmp_mass = [];
      let total = [];
      for (let i = 0; i < tmp; i++) {
        this.mass.forEach(item => {
          tmp_mass.push(item.marks[i]);
        });
        marks.push(tmp_mass);
        tmp_mass = [];
      }
      marks.forEach(item => {
        let sum = item.reduce((sum, cur) => {
          return sum + cur;
        });
        total.push(sum / item.length);
      });
      return total;
    }
  }
}

let arr = new Arr([student, student1, student2]);
console.log(arr.attendance("Nick"));
console.log(arr.attendance());
console.log(arr.performance("Nick"));
console.log(arr.performance());

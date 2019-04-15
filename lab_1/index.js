// Надо написать функцию которая принимет массив произвольных обектов,
//и фильтрует поля этого обьекта по следующему признаку:
// Если во всех елементах масива поле равно null (пример 2) то в исходный обект не попадает это поле,
//если хотябы в одном елементе это поле не равно "null" (пример 1) то оно остается неизменным
// [{a: null, b: 5}, {a: null, b: 5}, {a: 1, b: 5}] => [{a: null, b: 5}, {a: null, b: 5}, {a: 1, b: 5}]
// [{a: null, b: 5}, {a: null, b: 5}, {a: null, b: 5}] => [{b: 5}, {b: 5}, {b: 5}]

let Func = function(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Object.values(arr[i]).indexOf(null) != -1) {
      count++;
    }
  }

  if (arr.length > count) {
    console.log(arr);
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j in arr[i]) {
        if (arr[i][j] === null) {
          delete arr[i][j];
        }
      }
    }
    console.log(arr);
  }
};

Func([{ a: null, b: 5 }, { a: null, b: 5 }, { a: null, b: 5 }]);
Func([{ a: null, b: 5 }, { a: null, b: 5 }, { a: 1, b: 5 }]);

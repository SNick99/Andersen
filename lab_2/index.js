//1) Реадизовать функцию groupBy (из Lodash)
var array = [6.1, 4.2, 6.3];
var array2 = ["one", "two", "three"];

let groupBy = (arr, iter) => {
  let obj = {};
  arr.map((item, i, arr) => {
    if (iter === Math.floor || typeof item === "number") {
      obj[Math.floor(item)] = arr.filter(
        tmp => Math.floor(item) === Math.floor(tmp)
      );
    } else if (iter === "length" || typeof item === "string") {
      obj[item.length] = arr.filter(tmp => item.length === tmp.length);
    }
  });

  return obj;
};

console.log(groupBy(array, Math.floor));
console.log(groupBy(array2, "length"));

// 2) Есть дерево, оно разширяеться по полю children,
//    необходимо написать функцию forEach(arr, callBackFunc)
//    которая будет проходить по всем узлам дерева arr и на каждой итерации вызывать функцию  callBackFunc
//    в которую будет передаваться текущий обект

function forEach(arr, func) {
  arr.map(item => {
    func(item);
    if (item.hasOwnProperty("children")) {
      forEach(item.children, func);
    }
  });
}

let myArr = [1, 2, 3];
let myArr2 = [
  {
    a: 1,
    children: [
      {
        b: 3,
      },
      {
        b: 4,
      },
      {
        c: 5,
        children: [
          {
            b: 7,
          },
          {
            b: 8,
          },
        ],
      },
    ],
  },
  {
    c: 4,
  },
];

forEach(myArr2, (item, index) => {
  console.log(item);
});

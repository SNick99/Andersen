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

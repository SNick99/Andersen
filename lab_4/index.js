//1) Написать PromiseAll(arrOfPromise)
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const PromiseAll = arr => {
  let ArrayResult = [];
  let arrPromises = arr.map(element => {
    if (!(element instanceof Promise)) {
      return Promise.resolve(element);
    } else {
      return element;
    }
  });

  arrPromises.forEach(element => {
    element.then(
      res => {
        ArrayResult.push(res);
        if (ArrayResult.length === arr.length) {
          console.log(ArrayResult);
          return ArrayResult;
        }
      },
      error => {
        console.log(error.message);
      }
    );
  });
};

// PromiseAll([p1, p2, p3]);

//1) Написать PromiseAll(arrOfPromise)
var p1 = Promise.resolve(3);
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "nefoo");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo1");
});

const PromiseAll = arr => {
  return new Promise((resolve, reject) => {
    let ArrayResult = [arr.length];
    let arrPromises = arr.map(element => {
      if (!(element instanceof Promise)) {
        return Promise.resolve(element);
      } else {
        return element;
      }
    });

    arrPromises.forEach((element, i) => {
      element.then(
        res => {
          ArrayResult[i] = res;

          if (Object.keys(ArrayResult).length === arr.length) {
            resolve(ArrayResult);
          }
        },
        error => {
          reject(error);
        }
      );
    });
  });
};

// PromiseAll([p1, p2, p3]).then(val => {
//   console.log(val);
// });

//========================================================================
// 2) Написать PromiseRase(arrOfPromise)
//1) Написать PromiseAll(arrOfPromise)

const PromiseRase = arr => {
  return new Promise((resolve, reject) => {
    let arrPromises = arr.map(element => {
      if (!(element instanceof Promise)) {
        return Promise.resolve(element);
      } else {
        return element;
      }
    });

    arrPromises.forEach((element, i) => {
      element.then(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};

// PromiseRase([p2, p3]).then(val => {
//   console.log(val);
// });

//==========================================================================
//3) Написать myFetch(url, params, time) надстройка над
function myFetch(url, conf, time) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(conf.metod, url, true);
    xhr.send();
    xhr.timeout = time;
    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.ontimeout = () => {
      reject("timeout");
    };
  });
}

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  myFetch("/test", { metod: "GET" }, 2000).then(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    }
  );
});

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
    if (conf.metod === "POST") {
      xhr.setRequestHeader("Content-Type", conf.header);
      xhr.send(JSON.stringify(conf.body));
    } else if (conf.metod === "GET") {
      xhr.send();
    }
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

// document.getElementById("submit").addEventListener("click", function(e) {
//   e.preventDefault();
//   myFetch("/test", { metod: "GET" }, 2000).then(
//     res => {
//       console.log(res);
//     },
//     err => {
//       console.log(err);
//     }
//   );
// });

//==========================================================================
//Написать функцию для отображения картинок после загрузки

let arrayFile = [];
document.getElementById("i_file").addEventListener("change", function(e) {
  e.preventDefault();
  let file = document.querySelector("input[type=file]").files[0];
  if (file) arrayFile.push(file);
});

document.getElementById("submit1").addEventListener("click", e => {
  e.preventDefault();

  PromiseAll(arrayFile).then(res => {
    console.log(res);

    res.forEach(item => {
      let reader = new FileReader();
      reader.onloadend = function() {
        let oImg = document.createElement("img");
        oImg.src = reader.result;
        oImg.alt = "not found image";
        oImg.height = 300;
        oImg.width = 300;
        document.getElementById("gal").appendChild(oImg);
      };
      console.log(item);
      reader.readAsDataURL(item);
    });
    arrayFile = [];
  });
});

//==========================================================================
// *Написать обертку для промиса со способностью отменить его
// MyPromise(promis, cancel)

function MyPromise(prom, cancel) {
  let time = setTimeout(() => {
    return prom.then(res => {
      console.log(res);
    });
  }, 0);
  if (cancel) {
    clearTimeout(time);
    console.log("cancel");
  }
}

// MyPromise(p1, false);

//==========================================================================
// Написать new MyPromise(resolve, reject);

// function MyPromise2(func) {
//   let resolve = function(res) {
//     return res;
//   };
// }

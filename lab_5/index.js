// Observable
function Observable() {
  var observers = [];
  this.sendMessage = function(name, msg) {
    observers.forEach(item => {
      item.notify(name, msg);
    });
  };
  this.addObserver = function(observer) {
    observers.push(observer);
  };
}

// [Observer]
function Observer(behavior) {
  this.notify = function(name, msg) {
    behavior(name, msg);
  };
}

var observable = new Observable();

var UserObs = new Observer(function(name, msg) {
  $(".messages").append(
    $(` <div class="Message">
    <div>
      <span class="NameUser">
        ${name}:
      </span>
    </div>
    <div>
      <span class="MessageUser">
        ${msg}
      </span>
    </div>
  </div>`)
  );
});

observable.addObserver(UserObs);

$(".btn-send").click(function() {
  var name = $(".name").val();
  var msg = $(".msg").val();
  observable.sendMessage(name, msg);
  $(".msg").val("");
});

//функция с мемоизацией
const memoizedAdd = () => {
  let cache = {};
  return (a, b, c) => {
    if (`${a}${b}${c}` in cache) {
      console.log("Fetching from cache");
      return cache[`${a}${b}${c}`];
    } else {
      console.log("Calculating result");
      let result = a + b + c;
      cache[`${a}${b}${c}`] = result;
      return result;
    }
  };
};
// эту функцию возвратит memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(1, 2, 3));
console.log(newAdd(5, 6, 7));
console.log(newAdd(1, 2, 3));

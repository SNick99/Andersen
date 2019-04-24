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

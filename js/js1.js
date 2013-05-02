var x = 10;

function foo() {
  console.log(x);
}

(function() {
  var x = 20;
  foo();
})();

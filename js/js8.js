var add = function() {
  var i = 1;
  return function (e) {
    i = i + e;
    return i;
  };
}();

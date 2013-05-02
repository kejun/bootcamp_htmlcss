function List(data) {
  var _data = data || [];
  return  {
    add: function(n) {
      _data.push(n);
    },
    get: function() {
      return _data;
    }
  }
}

var list1 = List();
list1.add(1);

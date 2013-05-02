function List(data) {
  this.data = data || [];
  this.add = function(n) {
    this.data.push(n);
  };
  this.get = function() {
    return this.data;
  };
}

var list1 = new List();
list1.add(1);
console.log(list1.get());

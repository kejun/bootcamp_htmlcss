function List(data) {
  if (!(this instanceof List)) {
    return new List(data);
  }
  this.data = data || [];
  this.add = function(n) {
    this.data.push(n);
  };
  this.get = function() {
    return this.data;
  };
}

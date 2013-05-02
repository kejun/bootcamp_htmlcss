function SuperType() {
  this.colors = ["red","blue"];
}
function SubType() {
}

SubType.prototype = new SuperType();

var o1 = new SubType();
o1.colors.push("black");

var o2 = new SubType();
console.log(o2.colors);  //red,blue,black

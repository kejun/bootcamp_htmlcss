var color = 'blue';
var o = {
  color: 'red',
  sayColor: sayColor
};

function sayColor() {
  console.log(this.color);
}

sayColor();
o.sayColor();

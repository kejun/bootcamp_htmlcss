function SuperType(config) {
  this.colors = ['red', 'blue'];
}


function SubType(config) {
  SuperType.call(this, config);
}

var o = new SubType();

for(var i = 0; i<5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 100);
  })(i);
}

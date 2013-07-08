;(function() {

var language = {
  css:   'css',
  js:    'javascript',
  html:  'markup',
  svg:   'markup'
}; 

var htmlEncode = function(str) {
  return str.replace(/\&/g, '&amp;')
            .replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;');
};

$.each($('pre[data-src]'), function() {
  var pre = $(this);
  $.ajax({
    url: pre.data('src'),
    success: function(e) {
      if (!e) {
        return;
      }
      var code = $('<code class="language-' + language[pre.data('src').split('.').pop()] + '">' + htmlEncode(e) + '</code>').appendTo(pre);
     Prism.highlightElement(code[0]);
    }
  });
});

})();


var current_num = location.href.split('?')[1]|0 || 0;

var doc = $(document);
var slides = $('.page'); 

slides.bind('webkitAnimationEnd', function() {
  var slide = $(this);
  $(this).removeClass('next-slide-in')
         .removeClass('next-slide-out')
         .removeClass('prev-slide-in')
         .removeClass('prev-slide-out');
});

show(current_num);

function next() {
  var copy_num = current_num;
  current_num = current_num + 1 >= slides.length ? slides.length - 1 : current_num + 1;
  if (copy_num === current_num) {
    return;
  }
  doc.trigger('pagechange', [current_num, 'next']);
}

function prev() {
  var copy_num = current_num;
  current_num = current_num - 1 < 0 ? 0 : current_num - 1;
  if (copy_num === current_num) {
    return;
  }
  doc.trigger('pagechange', [current_num, 'prev']);
}

function show(num, direction) {
  if (!direction) {
    slides.eq(num).addClass('current-slide');
     return;
  }

  slides.removeClass('current-slide');
  var node = slides.eq(num).addClass('current-slide');
  var relateNode;

  if (direction === 'next') {
    relateNode = slides.eq(num - 1 < 0? 0 : num - 1);
  } else if (direction === 'prev') {
    relateNode = slides.eq(num + 1 >= slides.length ? slides.lenght - 1 : num + 1);
  }

  node.addClass(direction + '-slide-in');
  relateNode.addClass(direction + '-slide-out');
}

function makeURL(num) {
  var url = location.href;
  url = url.indexOf('?') ? url.split('?')[0] : url;
  return url + '?' + num;
}


doc.on('keyup', function(e) {
  e.preventDefault();
  if (('39,40,32,74,').indexOf(e.keyCode + ',') + 1) {
    next();
  }
  else if (('37,38,75,').indexOf(e.keyCode + ',') + 1) {
    prev();
  }
})
//.on('mousedown', function(e) {
//  if (e.target.tagName === 'A') {
//    return;
//  }
//  if (e.button === 0) {
//    next();
//  }
//  else if (e.button === 1) {
//    prev();
//  }
//})
.swipeLeft(function() {
      next();
})
.swipeRight(function() {
      prev();
})
.on('pagechange', function(e, num, direction) {
  show(num, direction);
  history.pushState(null, '第' + current_num + '页', makeURL(current_num));
});

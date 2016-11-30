function calcArea(width, height) {
  var area = width * height;
  for (var i = 0; i < arguments.length; i++) {
    console.log('arguments[' + i + '] = ' + arguments[i]);
  }
  if (typeof arguments[2] === 'string') {
    var html = '<h1>' + arguments[2] + '</h1>';
    var target = document.getElementsByTagName('body') [0];
    target.insertAdjacentHTML('beforeend', html);
  }
  return area;
}

document.addEventListener('mousemove', function(event) {
    var x = event.pageX;
    var y = event.pageY;
    
    document.getElementById('meu-elemento').style.transform = 'translate(' + x+ 'px, ' + y + 'px)';
    document.getElementById('meu-elemento').querySelector('after').style.transform = 'translate(-50%, -50%)';
  });
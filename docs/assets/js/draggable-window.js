document.addEventListener('DOMContentLoaded', function() {
    var draggableWindow = document.getElementById('draggable-window');
    var header = draggableWindow.querySelector('.drag-window-header');
  
    header.addEventListener('mousedown', function(e) {
      e.preventDefault();
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      var offsetX = e.clientX - draggableWindow.offsetLeft;
      var offsetY = e.clientY - draggableWindow.offsetTop;
  
      function onMouseMove(e) {
        draggableWindow.style.top = e.clientY - offsetY + 'px';
        draggableWindow.style.left = e.clientX - offsetX + 'px';
  
        draggableWindow.classList.add('dragging');
      }
  
      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        draggableWindow.classList.remove('dragging');
      }
  
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });
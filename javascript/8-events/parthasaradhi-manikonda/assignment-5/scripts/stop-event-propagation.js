const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', function() {
    alert('Parent div clicked');
});

child.addEventListener('click', function(event) {
    alert('Child div clicked');
    event.stopPropagation(); // Stops event from bubbling to parent
});
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');

level1.addEventListener('click', function(e) {
alert('Level1 - Capture phase');
}, true);  

level2.addEventListener('click', function(e) {
alert('Level2 - Bubble phase');
}, false); 

level3.addEventListener('click', function(e) {
alert('Level3 - Target phase');
}, false); 
1.
var items = ['gold', 'silver', 'bronze'];
console.log(items[0]);

2.
var statue = { head: 'gold', chest: 'silver', legs: 'bronze'};
console.log(statue.head);

3.
var statue = {
    items: ['gold', 'silver', 'bronze']
};
console.log(statue.items[0]);

4.
var items = [
    {metal: 'gold'},
    {metal: 'silver'},
    {metal: 'bronze'}
];
console.log(items[0]);

5.
var data;

var statue = {
    body: {
        items: ['gold', 'silver', 'bronze']
    }
};
console.log(data = statue.body);

6.
var arr = [{name: 'Al'}, {name: 'Bob'}, {name: 'Char'}];
arr.forEach(function (arr) {
    console.log(arr)
});

7.
var arr = ['<li>Al</li>', '<li>Bob</li>', '<li>Char</li>'];
console.log(arr.join(''));

// 8.
<ul id="main"></ul>
  var main =  document.getElementById('main');


// // 9.
<ul id="main"></ul>

var string = '<li>Al</li><li>Bob</li><li>Char</li>';
var main = document.querySelector('#main');
var x = document.getElementById('string').innerHTML;
document.getElementById('main').innerHTML = x;
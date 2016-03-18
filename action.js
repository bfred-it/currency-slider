var rate = 25;
var precalcValues = [5, 10, 20, 50, 100, 150, 200, 500, 700, 1000];
var baseCur = 'k ₫';
var myCur = ' €';

var slider = document.getElementById('slider');
var base = document.getElementById('base');
var mine = document.getElementById('mine');
var precalc = document.getElementById('precalc');

function baseToMine (base) {
	return Math.round(base / rate * 10) / 10;
}
function printBase (base) {
	return base + baseCur;
}
function printMine (mine, decimals) {
	return mine.toFixed(decimals || 2) + myCur;
}

function updateValues (val) {
	base.textContent = printBase(val);
	mine.textContent = printMine(baseToMine(val));
}
function precalculate () {
	precalcValues.reduce(function (table, val) {
		var row = document.createElement('tr');
		var base = document.createElement('td');
		var mine = document.createElement('td');
		base.textContent = printBase(val);
		mine.textContent = printMine(baseToMine(val), 2);
		row.appendChild(base);
		row.appendChild(mine);
		table.appendChild(row);
		return table;
	}, precalc);
}

function onChange (e) {
	updateValues(e.currentTarget.value);
}
slider.addEventListener('input', onChange);

updateValues(slider.value);
precalculate();

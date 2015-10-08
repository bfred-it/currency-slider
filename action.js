var rate = 36;
var slider = document.getElementById('slider');
var baht = document.getElementById('baht');
var usd = document.getElementById('usd');
var precalc = document.getElementById('precalc');
var precalcValues = [10, 20, 50, 100, 150, 200, 500, 700, 1000];

function bahtToUsd (baht) {
	return Math.round(baht / rate * 10) / 10;
}
function printBaht (baht) {
	return baht + ' ฿';
}
function printUsd (usd, decimals) {
	return usd.toFixed(decimals || 2) + ' $';
}

function updateValues (val) {
	baht.textContent = printBaht(val);
	usd.textContent = printUsd(bahtToUsd(val));
}
function precalculate () {
	precalcValues.reduce(function (table, val) {
		var row = document.createElement('tr');
		var baht = document.createElement('td');
		var usd = document.createElement('td');
		baht.textContent = printBaht(val);
		usd.textContent = printUsd(bahtToUsd(val), 2);
		row.appendChild(baht);
		row.appendChild(usd);
		table.appendChild(row);
		return table;
	}, precalc);
}

function onChange (e) {
	updateValues(e.currentTarget.value);
}
slider.addEventListener('input', onChange);

updateValues(slider.value);
precalculate()

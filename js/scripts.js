jQuery(document).ready(function	(){
/////////////
	$('.for-result').hide();

	$('#number-form').submit(function(e){

var numbers = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5:"five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "fourty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
	100: "one hundred",
	200: "two hundred",
	300: "three hundred",
	400: "four hundred",
	500: "five hundred",
	600: "six hundred",
	700: "seven hundred",
	800: "eight hundred",
	900: "nine hundred"

};

//number это число вводимое пользователем
//надо исправить для 11 - 19

function quantity(number){
	var counter = 0;
	while (number>1){
		number = number/10;
		counter++
	}return counter;
}

function threeDigit(number){
	var q = quantity(number);
	var delta;
	if (q > 3){
		if(q % 3 == 0){
			delta = 3;
		} else {
			delta = q % 3;
		}
		var currentNumber = Math.floor(number / Math.pow(10,(q- delta)));
		threeDigit(currentNumber);

		ourString = ourString + addWords(Math.floor((q-1) / 3)) + " ";
		threeDigit(number % Math.pow(10,q - delta));
		return;
	}
	for (i = q; i > 0; i--) { //эта часть для трехзначных частей числа
		currentNumber = number - (number % Math.pow(10, i - 1));
		numbersIntoWords(currentNumber);
		number = number % Math.pow(10, i - 1);
	}
}

function addWords (rank){
	switch (rank){
		case 1:
			return "thousand" ;
		case 2:
			return "million" ;
		case 3:
			return "billion" ;
	}
}

var ourString = "";

function numbersIntoWords (n){
	for (var key in numbers){
		if (n == key){
			ourString = ourString + (numbers[key]) +" ";
		}
	}
}
		threeDigit(parseInt($("#number").val()));
		$('.for-result').show();

		$(".result").empty().append(ourString);

		e.preventDefault();

	});










//////////////
});
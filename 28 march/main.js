"use strict"


//Istifadəçinin daxil etdiyi cümlədə boşluqların (space) sayını tapan funksiya yaz.

/*
let userInput = prompt("Please input ur sentence")
function NumberofSpaces() {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] == " " ){
           count++
        }
    }
    console.log("Your Sentence: " + userInput)
    return ("Value of spaces: " + count);
}
console.log(NumberofSpaces());
*/



//Rəqəmlərdən ibarət array qəbul edib, həmin array-də olan rəqəmlərin ortalamasını qaytaran bir funksiya yaz.

/*
function AverageofNumbers() {
    let averageArray = [];
    let average = 0;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = +arguments[i];
        if(!isNaN(arguments[i])){
            averageArray.push(arguments[i]);
            sum += arguments[i] ;
            average = sum / averageArray.length;
        }
    }
    return average
}
console.log(AverageofNumbers(1, 2, "salam", 3, 0, -2, "necesen"))
*/



// Rəqəmlərdən ibarət array qəbul edib, həmin array-də olan yalnız cüt rəqəmlərdən ibarət bir array-i qaytaran bir funksiya yaz.

/*
function getEvenNumbers() {
    let evenArray = [];
    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = +arguments[i];
        if(arguments[i] % 2 == 0 && arguments[i] !== 0){
            evenArray.push(arguments[i]);
        }
    }
    return evenArray
}
console.log(getEvenNumbers(1, -2, 0, 5, 8, "salam", 7, 4, "necesen"))
*/



//Rəqəmlərdən ibarət array qəbul edib, yalnız o rəqəmlərin ortalamasından böyük olan rəqəmlərdən ibarət bir array-i qaytaran bir funksiya yaz.

/*
function getBiggestNumberfromAverage() {
    let numbers = [];
    let average = 0;
    let sum = 0;
    let biggestNumberfromAverage = 0;
    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = +arguments[i];
        if(!isNaN(arguments[i])){
            numbers.push(arguments[i]);
            sum += arguments[i] ;
            average = sum / numbers.length;
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > average)
        {
        biggestNumberfromAverage = numbers[i];
        console.log(biggestNumberfromAverage);
        }
    }
}
console.log(getBiggestNumberfromAverage(1, 2, "necesen", 3, "salam", -10, 100, -15, 50,"sfsdc"));
*/



//Sözlərdən ibarət bir arrayi qəbul edib, həmin sözləri vergül ilə birləşdirib tək söz kimi qaytaran funksiya yaz. Ən sonda vergül düşməməlidir.

/*
function convertArrayToString() {
    let str = "";
    for (let i = 0; i < arguments.length; i++) {
        str = str + arguments[i];
        if(i != arguments.length - 1){
            str = str + ","
        }
    }
    return str
}
console.log(convertArrayToString("salam", "necesen", "yaxsiyam", "ascsa"))
*/


//Sözlərdən ibarət bir arrayi qəbul edib, həmin sözlərin tərsinə düzüldüyü yeni bir arrayi qaytaran bir funksiya yaz.

/*
function getReversedWords() {
    let reversed = [];
    for (let i = arguments.length - 1; i >= 0; i--) {
        reversed.push(arguments[i]);
    }
    return reversed
}
console.log(getReversedWords("salam", "necesen", "yaxsiyam"))
*/


// Sözlərdən ibarət iki arrayi qəbul edib, hər iki array-də olan ortaq sözlərin cəmləşdiyi yeni bir arrayi qaytaran bir funksiya yaz.
/*
let words1 = ["salam", "biz", 15, "necesiniz"];
let words2 = ["yaxsiyiq", "salam","biz","siz", 65465, 15]

function getCommonWords(arr1, arr2) {
    let commonwords = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let a = 0; a < arr2.length; a++) {
            if(arr1[i] == arr2[a])
            {
                commonwords.push(arr1[i])
            }
        }
        
    }
    return commonwords;
}
console.log(getCommonWords(words1, words2))
*/



//Bir metod yaz, iki parametr qəbul edecek, birinci sozlerden ibaret array, ikinci bir dene herf. Metod hemin arrayin icerisindeki yalniz gonderilen herfle baslayan sozleri yeni bir array olaraq qaytarmalidir.
/*
let words = ["yaxsiyiq", "salam","biz","siz", "yasamal", "yasil"];

function WordsStartingWithaSentLetter(arr, letter) {
    let arrayWithaStartingLetter = [];
    for (let i = 0; i < arr.length; i++) {
        if(words[i].indexOf(letter) == 0)
        {
            arrayWithaStartingLetter.push(words[i])
        }
    }
    return arrayWithaStartingLetter;
}
console.log(WordsStartingWithaSentLetter(words, "b"))
*/



//Bir metod yaz, bir söz qebul edir ve hemin sozde hansi herfden ve neçə dənə olduğunu konsola yazdirir.

let word = "necesen"
function wordHaveHowManySelectedLetter(word) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (arr.indexOf(word[i]) == -1) {
            arr.push(word[i])
        }
    }
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let a = 0; a < word.length; a++) {
            if(arr[i] == word[a])
            {
                count++;
            }
        }
        console.log(arr[i] + " herfinin sayi: " + count)
    }
}
console.log(wordHaveHowManySelectedLetter(word))

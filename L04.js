"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {

	//skapar variabel
	var tal = 10;
	//returnerar variabeln
	return tal;
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {

	//skapar variabler
	var tal1 = 2.5;
	var tal2 = 8;
	//multiplicerar variablerna
	var res = tal1 * tal2;
	//returnerar produkten
	return res;
	
}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	//Minskar tal1 med tal2
	var res = tal1 - tal2;
	//returnerar produkten
	return res;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {

	//rundar av variabeln tal
	var rounded = Math.round (tal);
	//returnerar avrundade talet
	return rounded;

}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	
	//result blir antalet bokstäver i text stringen
	var res = text.length;
	//returnerar antalet bokstäver i text stringen
	return res;
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	
	//charat plockar ut den näst sista bokstaven
	var res = text.charAt(text.length-2);
	//returnerar näst sista bokstaven
	return res;
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	//lägger ihop surname med ett komma och firstname
	//var res = surname + ', ' + firstname;
	var res = surname.concat(", ").concat(firstname);
	//returnerar surname, firstname = Karlsson, Greta
	return res;
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	//splittar stringen vid space
	var n = words.split(" ");
	//returnerar första bokstaven till sista bokstaven i andra ordet
    return n[n.length - 1];
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	var res = number >= 100;
	//returnerar "number" om den är 100 eller högre
	return res;
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn){

	// Beroende på hur man gjort returneras någon av dessa tre
	var tom = "Du har glömt att ange namn eller e-post"
	var fel = "Ange en e-postadress"
	var sent = "Ditt meddelande skickas"

	// Kollar om epost eller namn är tom, är den det returneras tom
	if(epost == "" || namn == "") {
		return tom;
	}
	// Kollar om epost innehåller @, gör den inte det returneras fel
    if(epost.indexOf("@") == -1){
        return fel;
	}
	// Om inga av dom tidigare felmeddelandena returneras returneras sent
	return sent;
	
}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {

	//mitten värdet är index två så därför subtraherar jag ett från arrayens längd. sen delar den på två.
	var middle = arr[Math.round((arr.length - 1) / 2)];
	//returnerar middle variabeln som borde vara mittenvärdet
    return middle;
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
	//sum är den totala summan av alla tal, ant är antalet tal
	for (var ant=0,sum=0;ant<arr.length;ant++) {
    sum += arr[ant];
  }
  return sum / ant;
	
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************c
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}


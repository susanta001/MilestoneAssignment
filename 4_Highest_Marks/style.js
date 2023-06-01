var first = new Array();
var second = new Array();
var third = new Array();
var fourth = new Array();
var fifth = new Array();

let firstValue = document.getElementById("first");
let sececondValue = document.getElementById("second");
let thirdValue = document.getElementById("third");
let fourthValue = document.getElementById("fourth");
let fifthValue = document.getElementById("fifth");

let ans = document.getElementById("ans");

function insert ( ) {
    first.push( firstValue.value );
    second.push( sececondValue.value );
    third.push( thirdValue.value );
    fourth.push( fourthValue.value);
    fifth.push( fifthValue.value);
   
    clearAndShow();
   }
   function clearAndShow () {
    firstValue.value = "";
    sececondValue.value = "";
    thirdValue.value = "";
    fourthValue.value = "";
    fifthValue.value = "";
    
    let arr = [first,second,third,fourth,fifth].map(Number);
    let maxNumber = arr.reduce((element,max) => element > max ? element : max, 0);

    ans.value = maxNumber;
  }

  function clear()
  {
    ans.value = "";
  }



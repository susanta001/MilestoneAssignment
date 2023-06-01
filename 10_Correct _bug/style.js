var nums = [];

let insert = document.getElementById("insert");
let submit = document.getElementById("submit");

insert.addEventListener("click", () =>
{
    let number = document.getElementById("input").value;

    nums.push(number);
    document.getElementById("ans").textContent = nums;
    clear();

});
function clear()
{
    document.getElementById("input").value = "";
    
}
submit.addEventListener("click",()=>
{
    var submitNum = document.getElementById("ans").textContent.split(",");

    var output = "";
    for (var i = 0; i < submitNum.length; i++) {
      output += submitNum[i]*2+", ";
  }

    document.getElementById("ans").textContent = output;
    
});
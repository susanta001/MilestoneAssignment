let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let deposit = document.getElementById("deposit").value;
  let withdrawal = document.getElementById("withdrawal").value;

  let amount = calculate(deposit, withdrawal);
  document.getElementById("balance").value = amount.totalamount;
 
  
});

function calculate(deposit, withdrawal)
{
  var myObject = 
  {
    totaldeposite : 0,
    totalwithdrawal : 0,
    totalamount : 0
  }

  myObject.totaldeposite = deposit;
  myObject.totalwithdrawal = withdrawal;
  myObject.totalamount = myObject.totaldeposite - myObject.totalwithdrawal;
  return myObject;

}

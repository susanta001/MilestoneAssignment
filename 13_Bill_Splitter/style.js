let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let totalDishCost = document.getElementById("dish").value;
  let totalPeople = document.getElementById("people").value;

  let bill = calculate(totalDishCost, totalPeople);
  document.getElementById("bill").value = bill.totalPrice;
  document.getElementById("p_bill").value = bill.totalPricePerPeople;
  
});

function calculate(totalDishCost, totalPeople)
{
  var myObject = 
  {
    totalPrice : 0,
    totalPricePerPeople : 0,
  }

  myObject.totalPrice = totalDishCost;
  myObject.totalPricePerPeople = totalDishCost/totalPeople;
  return myObject;

}

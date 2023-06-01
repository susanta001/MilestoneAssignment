let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let unitPrice = document.getElementById("u_price").value;
  let quantity = document.getElementById("quantity").value;

  let bill = calculate(unitPrice, quantity);
  document.getElementById("bill").value = bill.totalPrice;
  
  
});

function calculate(unitPrice, quantity)
{
  var myObject = 
  {
    totalPrice : 0,
  }

  myObject.totalPrice = unitPrice * quantity;
  
  return myObject;

}

let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let productPrice = document.getElementById("p_price").value;
  let discount = document.getElementById("discount").value;

  let bill = calculate(productPrice, discount);
  document.getElementById("bill").value = bill;
  
  
});

function calculate(productPrice, discount)
{
  let totalPrice = productPrice-((productPrice*discount)/100);
  return totalPrice.toFixed(2);

}

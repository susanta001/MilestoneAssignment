let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let celciusTemp =  document.getElementById("c_temp").value;
  // var output = '';
  let fahrenTemp = parseFloat((celciusTemp*(9/5))+32);
  document.getElementById("f_temp").value = fahrenTemp;
});
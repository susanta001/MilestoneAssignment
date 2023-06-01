let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let days = document.getElementById("n_days").value;
  
  let car;
  if(document.getElementById("car1").checked)
  {
    var selectedValue = document.getElementById('car1').value; 
    car = selectedValue; 
  }
  else if(document.getElementById("car2").checked)
  {
    var selectedValue = document.getElementById('car2').value; 
    car = selectedValue;
  }
  else if(document.getElementById("car3").checked)
  {
    var selectedValue = document.getElementById('car3').value; 
    car = selectedValue;
  }
  let bill = calculate(days, car);
  document.getElementById("bill").value = bill;
});

function calculate(days, car)
{
    var result;
     if(car == "Economy")
     {
        result = 4000*days;
     }
     else if(car == "Midsize")
     {
        result = 10000*days;
     }
     else if(car == "Luxury")
     {
        result = 20000*days;
     }
     return result;
}

let generate = document.getElementById("generate");

generate.addEventListener("click", () => 
{
  let number = parseInt((Math.random()*100)+1);
  
  document.getElementById("y_number").value = number;
});



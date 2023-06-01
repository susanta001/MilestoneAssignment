let submit = document.getElementById("button");

submit.addEventListener("click", () => 
{
  let heading  = document.getElementById("heading");

  if(heading.innerHTML === "The most affordable learning platform")
  {
    heading.innerHTML = "PW Skills";
  }
  else
  {
    heading.innerHTML = "The most affordable learning platform";
  }
 
  
});



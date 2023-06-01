let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let gmail = document.getElementById("gmail").value;
  let password = document.getElementById("password").value;

  if(gmail.includes("@") && password.length>=8)
  {
    document.getElementById("ans").textContent = "Valid email and password!";
    document.getElementById("ans").style.backgroundColor = "green";
  }
  else if(gmail.length === 0 || password.length === 0)
  {
    alert("Please fill the blank!!");
  }
  else
  {
    document.getElementById("ans").textContent = "Invalid email or password!";
    document.getElementById("ans").style.backgroundColor = "red";
  }

  
  
});


let caps = document.getElementById("insert");

caps.addEventListener("click", () => 
{
  let firstName = document.getElementById("f_name").value;
  let lastName = document.getElementById("l_name").value;

  let firstCaps = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let lastCaps = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  document.getElementById("f_name").value = firstCaps;
  document.getElementById("l_name").value = lastCaps;
})
let submit = document.getElementById("submit");

submit.addEventListener("click", () => 
{
  let takeNum =  document.getElementById("num").value;
  var output = '';
  for(var i=takeNum;i>0;i--)
  {
    for(var j=0;j<i;j++)
    {
      output += '*';
    }
    
    output += '\n';
  }
  document.getElementById("ans").textContent = output;
});
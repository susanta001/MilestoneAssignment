let finalsubmit = document.getElementById("submit");


finalsubmit.addEventListener("click",() =>
{
  
  var fullname = document.getElementById("name").value;
  var volwelcount = 0;

  for(let i=0;i<fullname.length;i++)
  {
    if(/[aeiou]/i.test(fullname.charAt(i)))
    {
      volwelcount++;
    }
  }
  document.getElementById("count").value = volwelcount;
});
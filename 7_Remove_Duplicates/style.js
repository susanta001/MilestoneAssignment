var allItems = [];
let caps = document.getElementById("insert");


caps.addEventListener("click", () => 
{
  let newItem = document.getElementById("item").value;
  if(allItems.includes(newItem))
  {
    alert("Already in your cart.");
    return;
  }

  allItems.push(newItem);
  // document.getElementById("ans").textContent = allItems;
  
  
  
})



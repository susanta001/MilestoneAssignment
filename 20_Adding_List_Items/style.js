let submit = document.getElementById("button");
var arr = ["HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Advance JavaScript","Working with DOM","Making Projects using HTML, CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Understanding the Database","Starting with NodeJS and Express","Understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"];
var nextItemIndex = 0;
  
submit.addEventListener("click", () => 
{
  var list = document.getElementById("o_list");
  
  
  if(nextItemIndex < arr.length)
  {
    var li = document.createElement("li");
    li.textContent = arr[nextItemIndex];
    list.appendChild(li);
    nextItemIndex++;
  }
  else 
  {
    alert('All items have been added.');
  }
  
  
});




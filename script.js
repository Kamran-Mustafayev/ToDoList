var textArea = document.getElementById("textarea");
var addText = document.getElementById("addtext");
var deleteText = document.getElementById("deletetext");
var projectDesk = document.getElementById("projectdesk");

addText.addEventListener('click', function(){
   var dailyPlan=document.createElement('h1');
   dailyPlan.classList.add("dailyplanclass");
   projectDesk.appendChild(dailyPlan);
   dailyPlan.innerHTML=textArea.value;
   textArea.value="";

   dailyPlan.addEventListener('click', function(){
    dailyPlan.classList.remove("dailyplanclass");
    dailyPlan.style.textTransform="capitalize";
    dailyPlan.style.textDecoration = "line-through";
   });

   dailyPlan.addEventListener('dblclick', function(){
    projectDesk.removeChild(dailyPlan);
   });

   deleteText.addEventListener('click', function(){
    dailyPlan.remove();
   });
});

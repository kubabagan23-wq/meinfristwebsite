let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
   count-=1;
   document.getElementsById("countLabel").innerHTML = count;
}

document.getElementById("restBtn").onclick = function(){
     count=0;
     document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
     count+=1;
     document.getElementById("countLabel").innerHTML = count;
}
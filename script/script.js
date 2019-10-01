alert('I am here');

window.onload =function(){
    let container = document.getElementById('root');

   var newList = document.createElement('ul');

   var arr = ['This','Is','a','List','Created','in','Javascript','and','Imported','to' ,'HTML'];

   for(let i=0; i<arr.length; i++){

        var listItem = document.createElement('li');
        listItem.innerHTML =  arr[i];
         newList.appendChild(listItem);
   }
  

   container.appendChild(newList);


//    container.innerHTML = " Hello from javascript";
}
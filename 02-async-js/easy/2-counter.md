## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function promisecounter(){
  return new Promise(function (resolve){
    setTimeout(resolve,1000);
  })
}

promisecounter().then(function(){
  console.clear();
  console.log(counter);
  
  counter=counter+1;                      
})








































































(Hint: setTimeout)

Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

var second_counter=0;
var min_counter=0;
var hour_counter=0;
time='AM';
function printcounter(){
  console.clear();
  if(hour_counter<10 && min_counter<10 && second_counter<10){
    console.log('0'+hour_counter+':0'+min_counter+'::0'+second_counter+' '+time);
  }
  else if(hour_counter<10 && min_counter<10 && second_counter>=10){
    console.log('0'+hour_counter+':0'+min_counter+'::'+second_counter+' '+time);
  }
  else if(hour_counter<10 && min_counter>=10 && second_counter<10){
    console.log('0'+hour_counter+':'+min_counter+'::0'+second_counter+' '+time);
  }
  else if(hour_counter>=10 && min_counter<10 && second_counter<10){
    console.log(hour_counter+':0'+min_counter+'::0'+second_counter+' '+time);
  }
  else if(hour_counter<10 && min_counter>=10 && second_counter>=10){
    console.log('0'+hour_counter+':'+min_counter+'::'+second_counter+' '+time);
  }
  else if(hour_counter>=10 && min_counter<10 && second_counter>=10){
    console.log(hour_counter+':0'+min_counter+'::'+second_counter+' '+time);
  }
  else if(hour_counter>=10 && min_counter>=10 && second_counter<10){
    console.log(hour_counter+':'+min_counter+'::0'+second_counter+' '+time);
  }
  else{
    console.log(hour_counter+':'+min_counter+'::'+second_counter+' '+time);
  }
  second_counter+=1;
  if(second_counter==60){
    second_counter=0;
    min_counter+=1;
  }
  if(min_counter==60){
    min_counter=0;
    hour_counter+=1;
    }
  if(hour_counter==23){
    hour_counter=0;
  }
  if(hour_counter>12){
  time='PM';
  }
  
}
setInterval(printcounter,1000);

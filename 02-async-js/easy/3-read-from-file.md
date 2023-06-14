## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

function fileisread(content){
  console.log(content);
}

fs.read('a.txt',fileisread);

for( var i=0; i<10000; i++){
  console.log(i);
}

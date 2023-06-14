## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
function fileisread(content){
  var array=content.split(' ');
  //console.log(array);
  
  for(var i=0;i<array.length;i++){
    if (array[i]!=''){
       var out=out+' '+array[i];
    }
  }
  return out.substring(10,out.length)
}
fs.read('a.txt',fileisread);

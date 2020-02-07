
function size (minSize, maxSize){
    let a = prompt("what size del")
    let arr = []
 for(i=minSize; i<=maxSize ; i+=2){
     
     if (i == a){
         continue
     }
     arr.push(i)
 }
 
 return arr
 }
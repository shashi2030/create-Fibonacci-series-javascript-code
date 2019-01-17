var abc = [0,1];
var result=[];
for(var i = abc.length;i <= 10;i++){
  abc.push(abc[i-1] + abc[i-2]);
  
}
console.log(abc);
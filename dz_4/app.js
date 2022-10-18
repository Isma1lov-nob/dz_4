//1
function checkMax(a,b){
  if(a<b){
      return a
  } else if (b<a){
      return b
  }
}

// console.log(checkMax(11, 10 ));
//2
function findLetter(arg,b){
  var result = 0
      for(let a of arg){
      if(a.toLowerCase() === b){
          result+=1
      }
  }
  return result
}

// console.log(findLetter('aaaaaaaaa','a'))

//3
function middle(a , b){
  return ( a + b ) /2;
}
// console.log(middle(5,8));

//4
var massive = [1,2,3,4,5,6,7]
function bigger(arr){
  return arr.filter(function(n){
    if(n>5){
     return n
    }
 })
}

// console.log(bigger(massive))

//5
function  checkInn(i){
  var inn = i.toString().split('')

   if(inn.length===14 && (inn[0]==='1' || inn[0]==='2'||inn[0]==='1')){
       return console.log('true')
   }else {
       console.log('false  ')
   }
}


//  checkInn(21010199578143)

//6
function reverse(arg){
  var newArr = [];
  for(var i = arg.length -1 ; i >= 0; i--){
      newArr.push(arg[i]);
  }
  return newArr.join('');
}

// console.log(reverse('Hello'))
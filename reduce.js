// const arr=[134,245,21,341,414];
// const out=arr.reduce(function maxi(max,curr){
//     if(curr>max){
//         max=curr;

//     }
//     return max;
// },0)
// console.log(out);
// console.log("sathwik shetty");
// setTimeout(function cb(){
//     console.log("Hi how are you");

// // },5000)
// // console.log('THATS it for the day boys');
// const cart=["shoes","pants","kurtas"];
// createorder(cart,function(orderid){
//     proceedtopayment(orderid);
// })
// // const promise=createorder(cart)
// // promise.then(function(orderid){
// //     proceedtopayment(orderid);});
// const promise=createorder(cart);
// promise.then(function(orderid){
//     proceedtopayment(orderid);
// } )

const cart=["pant","shoe","shirt"];
 const promise=createorder(cart);
 promise.then(function (){
   console.log(orderid);
 });

 function createorder(cart){
    const pr= new Promise(function(resolve,reject){
        if(!validorder(cart)){
            const err=new Error("there was an error");
            reject(err);
        }
        const orderid="3r423";
        if(orderid){
            resolve(orderid);
        }
    });
    return pr;
 }
 function validorder(){
    return true;
 }
// const promiseone = new Promise(function(resolve, reject){
//     //do async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },5000)
// })
// promiseone.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolve"); 
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"shreyas lande",
//             useremail:"shreyaslande@chaigpt.com"
//         })
//     }, 100);
// })
// promisethree.then(function(user){
//     console.log(user);
    
// })


// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const error = false;
//         if(!error){
//             resolve({user:"shreyass",password:"shr1234@"})
//         }else{
//             reject("error has been detected")
//         }
//     },1000)
// })

// promisefour.then(function(obj){
//     console.log(obj)
//     return obj.user
// }).then(function(name){
//     console.log(name)
// }).catch(function(err){
//     console.log(err)
// }).finally(function(){
//     console.log("the promise completed")
// })


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username:"shreyas patil_lande",
//                 userpassword:"shrm123@"
//             })
//         }
//         else{
//             reject('js went wrong')
//         }
//     }, 1000);
// })
// async function consumefive() {
//     try{
//         const resopnse = await promisefive
//         console.log(resopnse)
//     }catch(error){
//         console.log(error)
//     }
// }
// consumefive()

async function dummy() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        
        const data = await response.json()
        console.log(data);
                
    }catch(error){
        console.log("E: ",error)
    }
}
dummy()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    const json = response.json()
    return json
}).then((json)=>{
    console.log(json);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("we have did the procedurre");
    
})
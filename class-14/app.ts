let sirZiaPromise = new Promise( function (resolve,reject){
    reject("Passed with Mehmood sweets!")
})
// sirZiaPromise.then( function(response){
//     console.log(response,"Responce");
// }).catch(function(err){
//     console.log(err,"Reject"); 
// })
async function promiseStatus(){
    try{
    let responce = await sirZiaPromise
    console.log(responce);
    } catch(err){console.log(err,"Error");
}
}
promiseStatus()
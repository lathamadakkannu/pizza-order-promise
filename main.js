const result=new Promise((resolve,reject)=>{
    let deliver=true;
    //let deliver=false;
    if(deliver){
        
((name,callback)=> {
    document.write('Pizza ordered. <br><br>');
   
    document.write('Pizza for preparation.<br><br>');
   
   setTimeout(()=> {
       let inform = `Your ${name} is ready.<br><br> The total bill amount is $140.<br><br>`;
       callback(inform);

        document.write(`On the Way Pizzahub server.`);
       
   }, 3000);
   setTimeout(()=>{
        alert(`Succesfully Deliverd. Thanks for your order.`);
       
   },6000)
})

("Pizza",(message)=>{
   document.write(message);
   
});
    resolve()
    }
    else{
        reject()
    }
})
result.then(success).catch(failure)
function success(){
    document.write("Delivered");
}
function failure(){
    document.write("Pizza Not delivered");
}
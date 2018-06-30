const os=require('os')
function checkSystem()
{
    const memoryAllowed=4;
    const corsAllowed=2;
    console.log("Checking your system");
    const mem=os.totalmem/1024/1024/1024;
    const numberOfCor=os.cpus().length;
   
     if(mem>memoryAllowed && numberOfCor>corsAllowed)
     {
        console.log("System is checked successfully")
     }
     else{
        if(mem<memoryAllowed)
        {
            console.log("The app needs at least 4 GB of RAM")
        }
         
         if(numberOfCor<corsAllowed)
         {
             console.log("Processor is not supportted")
         }
     }
    // console.log(mem);
    // console.log(os.cpus().length)
}
checkSystem();
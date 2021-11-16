const Formatter = function(){
    
    const capitalizeFirst = function (string){
        
       string =string[0].toUpperCase() + string.slice(1)
       console.log(string);
    }
   const skewerCase = function (string){
        string=string.replace(/-/gi, " ");
        console.log(string);

    }
    
    return{
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const formatter = Formatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box*/



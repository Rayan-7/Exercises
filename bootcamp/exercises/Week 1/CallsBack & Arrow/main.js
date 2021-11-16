/*let users = []

const getData = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000);
}

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}

getData()
displayData()*/

//////////////////
/*const first = function () {
    setTimeout(function () {
        console.log("should be first")
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first()
second()*/


////////////////
/*const first = function (callback) { //receive the function as a parameter
    setTimeout(function () {
        console.log("should be first")
        callback() //this is the `second` function being invoked
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first(second) //pass the second function to the first, as an argument*/



/*let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}
getData(displayData)*/


//עוד צורה

/*const doSomething = function(){
    console.log("something")
  }
  
  setTimeout(doSomething, 3000) 3 sec*/

  /*const timer = function(){
    console.log(new Date())
  }
  
  setInterval(timer, 10000)*/


  //square arrow func
  // if we have one pram we dont need to put a parentheses around it
 /* const squareFun = num =>{
      console.log(num*num);
  }
  squareFun(4);*/

///Yesssss I did it
/*  const getFormalTitle= (name1,name2)=>name1+" "+name2;
  

  formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"*/


/*const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)*/

/*const pushPull = function (func) {
    func();
}
const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }

  
  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"*/


  /*const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }

  getTime=(param)=>{
    const time=new Date();
    returnTime(time);
  }
  
  getTime(returnTime)*/



  ///ex3 

  /*const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, console.log, "I like to party")

//ex4
  //sumOfThreeParam=(param1,param2,param3)=> {param1+param2+param3}*/


  //ex5
  /*capitalize =string=> string[0].toUpperCase()+string.slice(1).toLowerCase();

console.log(capitalize("adPd"))*/
      
  
  


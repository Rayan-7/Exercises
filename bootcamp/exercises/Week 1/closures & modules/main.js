/*const createPerson = function(name, age){
    const person = {
        personName: name, 
        personAge: age
    }

    return person
}

const person = createPerson("Elon", 42)
console.log(person)*/

///////////////////

/*const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}

const math = mathOperations()
console.log(math(1,2))*/


/*const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x!*/



  ///////////

  /*const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()*/



  /*const FamilyFunction= function (name1,name2) {
      const members=[];

      const birth= function (){
         members.push(name1);
         console.log(members);
      }
      return birth
  }


  const familyfunc=FamilyFunction("rayan1","rayan2");
  console.log(familyfunc());*/


//////////////////

 /* const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

 const m = mathOperations()
 console.log(m.add(2,1))*/



 /*const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('aaa')
usersModule.addUser('ddd')
usersModule.listUsers()

console.log(userModule.users)*/

StringFormatter = string=>{
    capitalizeFirst:{
        string[0].toUpperCase()+string.slice(1).toLowerCase()
    }
    skewerCase:{
        
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box
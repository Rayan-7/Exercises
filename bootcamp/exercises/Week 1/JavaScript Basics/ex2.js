
let password = '1111'
let confirmPassword = '1111'

console.log(IsEqual(password,confirmPassword));

function IsEqual(password,confirmPassword) {
    if(password===confirmPassword)
    {
        return true;
    }
    else
        return false;
} 
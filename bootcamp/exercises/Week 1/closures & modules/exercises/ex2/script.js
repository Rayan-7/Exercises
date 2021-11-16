const Bank=function(){
    let money=500; 
    const deposit=function(num){
        money+=num;
    }

    let showBalance=function(){
        console.log(money);
    }

    return{
        deposit:deposit,
        showBalance:showBalance
    }
}



const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()
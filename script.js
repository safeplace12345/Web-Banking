console.log(true)
const accountNumbers = [0];
 let main = document.querySelector('.main'); console.log(main)

document.querySelector('button').addEventListener('click' ,(e)=> {
    e.preventDefault();
    let name = document.querySelector('#name')
    let pwd = document.querySelector('#pwd')
    const newUser = new Account(name)
    if(localStorage){
        localStorage.setItem('accNumbers' , JSON.stringify(accountNumbers))
    }
    let user = JSON.parse(localStorage.getItem('accNumbers'))
    main.innerHTML += `Welcome ${user[user.length - 1]} <br>`
    console.log(user[user.length - 1])
})
function Account(name){
    this.accInit = 0;
    this.name = name;
    this.accNumber = `GR0000` + accountNumbers.length;
    accountNumbers.push(this.accNumber);
    this.getB = function(){
        return this.accInit
    }
}

Account.prototype.deposit = function(amount){
    return this.accInit += +amount;
}
Account.prototype.getBalance = function(){
    return this.accInit;
}
Account.prototype.withdraw = function(amount){
    if(amount > this.accInit ){
        return "Error Insufficient Funds"
    }
    if (!Number.isInteger(amount) || amount < 0) {
        return "Invalid amount"
    }
    return this.accInit -= +amount;
}





const accountId=12344
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="Bengaluru"

// accountId=1
accountEmail="as@as.com"
accountPassword="112322"
accountCity="Delhi"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

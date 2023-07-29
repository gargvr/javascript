const accountId = 144553;
let accountEmail = "himanshu@gmail.com"
var accountPassword = "12345"
city = "Delhi"
let accountState //undefined

//accountId = 2 //not allowed

accountEmail = "hg@gmail.com"
accountPassword = "21212121"
city = "Haryana"

console.table([accountEmail, accountPassword, city, accountState])

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
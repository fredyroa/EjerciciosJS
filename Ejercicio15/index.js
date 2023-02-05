const users = [
    {username: 'ppc90', age: 30, premium: false},   
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
    ];
const usersNoPremium = []

for(var i=0; i<users.length; i++){
    if(users[i].premium == true){
        console.log("El usuario : '" + users[i].username + "' es un Usuario Premium");
    } else{
        usersNoPremium.push(users[i]);
    }
}

console.log("Array de usuarios no premium")
console.log(usersNoPremium);
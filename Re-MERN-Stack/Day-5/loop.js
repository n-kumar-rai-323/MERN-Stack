//for (syntax)
// for(begin; step condtion; increment,decrement;){
    //code to be executed
// }

// wirte a js program for multiplication table ? 

const table = Number(prompt("Enter the number for table"));

if(isNaN(table)){
    alert("You didn't enter number");
}

for(let i=1; i<=10; i++){
    console.log(`Multiplaction Table is ${table} * ${i}=${table * i}`)
}

//do while
// do{
//     //code execution
// }while(step condition )
// const print = (data)=>{
//     console.log({data});
// };

// const parent = (fun)=>{
//     const num ="Nishan";
//     fun(num);
// };

// parent(print);
// A callback function in JavaScript is a function passed as an argument to another 
// function, which is then executed (called back) inside the outer function to complete 
// some kind of routine or action.
const outerFun=(funCall)=>{
    funCall();
}

const myFun=()=>{
    console.log("Na herni ho!");
}
outerFun(myFun);
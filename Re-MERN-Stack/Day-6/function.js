// 1. default functions 
const defaultFunn =(name="user")=>{
    console.log(`hello ${name}`)
}

defaultFunn()
// 2. parameterized functions
const paraFun =({a,b,c,d})=>{
    console.log(a+b)
};
paraFun({a:4,b:4})
// 3. arrow function
const ArowFun =(a,b)=>{ 
    return a *b
}
paraFun(2,3)
// 4. closure 
const cloFunc=()=>{
    let count =0
    return ()=>{
        count = count +1;
        return count;
    }
}
const count1 = cloFunc();
const count2 = cloFunc();
console.log(count1()) //1
console.log(count1())//2
console.log(count1())//3

console.log(count2())//1
console.log(count2())//2
// 5. IIfes (Immediately Invoked functional expression )
// ((port)=>{
//     // console.log(`hello ${port}`)
// })("2000");
// 6. recursive function



// 7. 
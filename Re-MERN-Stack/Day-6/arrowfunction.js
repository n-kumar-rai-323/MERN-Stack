// Arrow function with Parameters . 
const arowFun = (a,b)=>{
    console.log(a +b )
}
arowFun(3,5)


// Basic Usage
const funArow=(name)=>`Hello ${name} Baby`
console.log(funArow("Alisha"))

// Arrow Function Without Parameters
const hello =()=>console.log("Hello world")
hello()

// Arrow Function With Array Method 
let num =[1,2,3,4,5,6]

const arrMtd =num.map(num=>num*num)
console.log(arrMtd)
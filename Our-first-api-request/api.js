const url ="https://catfact.ninja/fact";
fetch(url)

.then((res)=>{
    console.log(res)
   return res.json()
})
.then((data)=>{
    console.log(data.fact)
})
.catch((err)=>{
    console.log(`The Error is ${err}`)
})
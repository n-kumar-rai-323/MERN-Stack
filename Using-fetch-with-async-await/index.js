const url = "https://catfact.ninja/fact";


const getdata = async()=>{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
    
}
getdata()

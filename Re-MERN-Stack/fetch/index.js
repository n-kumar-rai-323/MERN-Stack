const fetchData=()=>{
    try{
        fetch("https://dummyjson.com/user")
        .then((result)=>result.json())
        .then((data)=> console.log({data}));
    }catch(e){
        console.error;
    }
}
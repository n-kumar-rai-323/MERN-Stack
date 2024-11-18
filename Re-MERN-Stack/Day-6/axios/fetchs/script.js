let url = "https://dummyjson.com/user";

// async function getFacts(){
//     let res = await fetch(url)
//     let data = await res.json();
//     console.log(data.users)
// }
// getFacts()

const getdata=async()=>{
    try{
        let res = await fetch(url)
        let data = await res.json();
        console.log(data.users[0].firstName)
    }catch(e){
        console.log("error-", e);
    }
    console.log("bye");
    
}
getdata()
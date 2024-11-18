let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
   let userData = await axiosData();
   console.log(userData)
   let p = document.querySelector("#fact");
   p.innerText = userData;
});


const url = "https://dummyjson.com/user";
const axiosData = async () => {
    try {
        let res = await axios.get(url)
        return res.data.users;
        // console.log(res.data.users)
    } catch (e) {
        console.log("Error - ", e)
        return "No fact found";
    }
}
// axiosData()
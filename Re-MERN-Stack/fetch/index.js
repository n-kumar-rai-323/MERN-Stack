const fetchData = async() => {
    try {
        const result = await fetch("https://dummyjson.com/user")
        const data = await result.json();
        const {users=[]}= data;
        const firstNames = users.map((user)=>
        user.firstName.concat(" ", user.lastName)
        );

        let newHTML = "";
        newHTML += "<ol>";
    } catch (e) {
        console.error;
    }
}
import fetch from "node-fetch";

const fetch = (username) =>{

    fetch(`https://api.github.com/users?q=${username}`)
    .then((resolve) => resolve.json())
    .then((data) => {
        const all_data = []
        data.foreach((data)=>{

            const obj = {
                name : data.name,
                username : data.login,
                avatar: data.avatar_url,
                followers: data.followers,
                following: data.following,
                nbr_repo : data.public_repos,
                link: html_url
            }
            
            document.getElementById("table_body").innerHTML += `
            <tr>$${obj.name} <tr>
            <tr>$${obj.username} <tr>
            <tr>$${obj.followers} <tr>
            <tr>$${obj.following} <tr>
            <tr>$${obj.nbr_repo} <tr>
            <tr>$${obj.link} <tr>
            `
        })
    
}).catch((err)=> console.log(err))
}

module.exports = fetch
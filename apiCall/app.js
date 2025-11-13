// import axios from "axios"

// async function apiCall() {
//     try {
//     let response = await axios.get("https:ai.suhail.app/test")    
//     console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// apiCall()

async function fetchs() {
    try {
    let response = await fetch("https:ai.suhail.app")  
    let output = await response.json()
    console.log(output);
    } catch (error) {
        console.log(error);
    }
}
fetchs()

import axios from "axios";

const URL_GATOS= "https://api.thecatapi.com/v1/images/search?limit=10"
const getGatos = async() =>{
    const response = await axios.get(URL_GATOS);
    const gatos = response.data.map(r=>{
        return {
            id: r?.id,
            url: r?.url
        }
    });

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(gatos);
        }, 3000)
    });
}


export {getGatos};
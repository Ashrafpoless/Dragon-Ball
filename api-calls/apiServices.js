import BASE_URL from "../scr/config.js";
import state from "../scr/data/state.js";


const apiServices = async()=>{

//https://dragonball-api.com/api/characters?page=2&limit=5

const filterQueryName = `&name=${state.filter.name}`;



const sortQuery = `&sort=${state.sort.field} ${state.sort.type}`;
const pageQuery = `page=${state.pagination.currentPage}&limit=${state.pagination.pageSize}`;



const url = BASE_URL + `/characters?` + pageQuery +filterQueryName  + sortQuery ;
const encodedURI = encodeURI(url)
try {
    const res = await fetch(encodedURI);

    if (!res.ok){
        console.log(response.statusText);
        throw new Error(response.statusText);
    }
    const data = await res.json()
     return data;
} catch (error) {
    console.error(error)
}
};

export default apiServices;


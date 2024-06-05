import dom from "../dom.js";
import state from "../data/state.js";
import apiServices from "../../api-calls/apiServices.js";
import renderPage from "../components/renderPage.js";



const setData = async()=>{
    try {
        const data = await apiServices()

        dom.main.innerHTML = '';
        state.itemToDisplay = [];
        
        
        if (state.filter.name === ''){
            data.items.forEach(item => {
                state.itemToDisplay.push(item)
                state.pagination.totalItem = data.meta.totalItems;
                state.pagination.totalPage = Math.ceil(state.pagination.totalItem / state.pagination.pageSize);
            });
        }else{
            state.itemToDisplay = data;
            state.pagination.totalItem = state.itemToDisplay.length;
            state.pagination.totalPage = Math.ceil(state.pagination.totalItem / state.pagination.pageSize);
        }
            
        renderPage();

    } catch (error) {
        console.error(error);
    }
    
};

export default setData;
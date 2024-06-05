import state from "../data/state.js";
import setData from "../utils/setData.js";


const firstLastHandler = (e) => {
const type = e.target.id;
if(type === 'first'){
    if(state.pagination.currentPage === 1){
        return
    }
    state.pagination.currentPage = 1;
}else{
    if(state.pagination.currentPage === state.pagination.totalPage ) return;
    
    state.pagination.currentPage = state.pagination.totalPage
}
setData();
};

export default firstLastHandler;


import state from "../data/state.js"
import setData from "../utils/setData.js"

const nextPreviousHandler = (e) => {
    const type = e.target.id;
    if(type === 'next'){
        if(state.pagination.currentPage=== state.pagination.totalPage){
            return
        }
        state.pagination.currentPage = state.pagination.currentPage + 1
    }else{
        if(state.pagination.currentPage === 1 ) return;
        
        state.pagination.currentPage = state.pagination.currentPage -1
    }
    setData();
};

export default nextPreviousHandler;
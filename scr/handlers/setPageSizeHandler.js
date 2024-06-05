import state from "../data/state.js";
import setData from "../utils/setData.js";

const setPageSizeHandler = (event) => {
    const newValue = event.target.value;
    state.pagination.pageSize = Number(newValue);
    state.pagination.currentPage = 1;
    setData();
};

export default setPageSizeHandler;
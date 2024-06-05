import state from "../data/state.js";
import setData from "../utils/setData.js";

const filterHandler = (e)=>{
    const value = e.target.parentElement.children[0].value;
    state.filter.name = value;

    setData();
};

export default filterHandler    
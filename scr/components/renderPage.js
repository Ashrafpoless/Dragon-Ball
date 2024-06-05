import dom from "../dom.js";
import renderDisplaySection from "./renderDisplaySection.js";
import renderFilter from "./renderFilter.js";
import renderPagination from "./renderPagination.js";


const renderPage = (item)=>{

    // container
    const container = document.createElement('div');
    container.className = 'container';
    
    // filter container
    const filterContainer = renderFilter()

    container.append(filterContainer);

    // display section for dragon Ball data
    const displaySection = renderDisplaySection();
    
    // pagination
    const paginationDiv = renderPagination();
    
    
    container.append(displaySection, paginationDiv);
    dom.main.append(container)
};

export default renderPage;
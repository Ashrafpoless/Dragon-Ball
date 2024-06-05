import filterHandler from "../handlers/filterHandler.js";

const renderFilter = () =>{
     // filter container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filterContainer';

   
    // filter input
    const filterInput = document.createElement('input');
    filterInput.className = 'filter-input';
    filterInput.placeholder = '';

    //filter button
    const filterButton = document.createElement('button');
    filterButton.className = 'filter-button';
    filterButton.type = 'button';
    filterButton.innerText = 'Filter'; 
    filterButton.addEventListener('click', filterHandler)

    filterContainer.append( filterInput, filterButton)
    return filterContainer
};

export default renderFilter;
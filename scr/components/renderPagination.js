import firstLastHandler from "../handlers/firstLastHandler.js";
import nextPreviousHandler from "../handlers/nextPreviousHandler.js";
import renderPageSizeSection from "./renderPageSize.js";

const renderPagination = () => {
    // pagination
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    
    const first = document.createElement('button');
    first.type = 'button';
    first.id = 'first';
    first.innerText = 'first';
    first.addEventListener('click', firstLastHandler)

    const previous = document.createElement('button');
    previous.type = 'button';
    previous.id = 'previous';
    previous.innerText = 'previous';
    previous.addEventListener('click',nextPreviousHandler)

    const next = document.createElement('button');
    next.type = 'button';
    next.id = 'next';
    next.innerText = 'next';
    next.addEventListener('click', nextPreviousHandler)

    const last = document.createElement('button');
    last.type = 'button';
    last.id = 'last';
    last.innerText = 'last';
    last.addEventListener('click', firstLastHandler)

    const PageSizeSection = renderPageSizeSection()
    paginationDiv.append(first, previous, next, last, PageSizeSection)

    return paginationDiv
};

export default renderPagination;
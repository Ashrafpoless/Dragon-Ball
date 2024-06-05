import state from '../data/state.js';
import pageSize from '../data/pageSize.js';
import  setPageSizeHandler  from '../handlers/setPageSizeHandler.js';


 const renderPageSizeSection = () => {
    const pageSizeSection = document.createElement('div');
    pageSizeSection.id = 'page-size-section';
    pageSizeSection.classList = 'page-size-section';

    const pageSizeLabel = document.createElement('label');
    pageSizeLabel.id = 'page-size-label';
    pageSizeLabel.classList = 'page-size-label';
    pageSizeLabel.for = 'page-size-select';
    pageSizeLabel.innerHTML = 'Page Size : ';

    const pageSizeSelect = document.createElement('select');
    pageSizeSelect.id = 'page-size-select';
    pageSizeSelect.classList = 'page-size-select';
    pageSizeSelect.name = 'page-size-select';
    pageSizeSelect.addEventListener('change', setPageSizeHandler);

    pageSize.map((x, i) => {
        const pageSizeOption = document.createElement('option');
        pageSizeOption.id = `page-size-option-${i}`;
        pageSizeOption.classList = `page-size-option`;
        pageSizeOption.value = x;
        pageSizeOption.innerHTML = x;
        if (x === state.pagination.pageSize)
            pageSizeOption.selected = true;

        pageSizeSelect.append(pageSizeOption);
    });

    pageSizeSection.append(pageSizeLabel);
    pageSizeSection.append(pageSizeSelect);

    return pageSizeSection;
};

export default renderPageSizeSection;
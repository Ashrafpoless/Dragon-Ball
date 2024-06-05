const state = {
    itemToDisplay: [],
    filter:{
        name: '',
        race:'',
        gender:'',
        affiliation: '',
    },
    sort:{
        field:'',
        type:''
    },
    pagination:{
        currentPage: 1,
        pageSize: 8,
        totalPage: 0,
        totalItem: 0,
    },
};

export default state;
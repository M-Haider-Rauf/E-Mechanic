const initialState = {
    count: 0,
    items: []
};

const changeProductCount = (list, product, increment) => {
    const clone = require('rfdc')();
    const newList = clone(list);

    const idx = newList.findIndex((value => value.id === product));

    if (idx < 0) {
        newList.push({id: product, count: increment});
    }
    else {
        const product = newList[idx];

        product.count += increment;

        if (product.count <= 0) newList.splice(idx, 1);
    }
    
    return newList;
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'add':
        return {
            count: state.count + 1,
            items: changeProductCount(state.items, action.payload, 1)
        };

    case 'remove': 
        return {
            count: state.count - 1,
            items: changeProductCount(state.items, action.payload, -1)
        };

    case 'empty':
        return {
            count: 0,
            product: []
        };

    default: 
        return state;
    }
};
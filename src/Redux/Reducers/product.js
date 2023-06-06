const { ActionTypes } = require("../Constants/action-type");

const initialState = {
    products: [{
        id: 1,
        title: "Nike Shoes 01",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    }],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}
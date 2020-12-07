
export const initialState = {
    basket: [{
        id: "111111",
        title: "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker 6 Qt",
        image: "https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg",
        price: 858.99,
        rating: 4,

    },],
    user: null,
};

function reducer(state, action) {
    console.log("action", action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`CAnt remove product (id: ${action.id}) as its `);
            }
            return {
                ...state,
                basket: newBasket
            };

        default:
            return state;
    }
}
export default reducer;
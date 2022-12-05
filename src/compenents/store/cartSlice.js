// import {createSlice} from "@reduxjs/toolkit"

// const initialState = [];

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         add :(state, action) => {
//             // console.log(state, "state");
//             console.log(action.payload, "payload");
//             state.push(action.payload)
//         },
//         // remove:(state, action) => {
//         //     state.filter(item=> item.id !== action.payload)
//         // },
//     }
// }); 

// export const {add, remove } = cartSlice.actions;
// export default cartSlice.reducer;
const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            console.log(action, "action");
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
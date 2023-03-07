import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProduct(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, actions) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, actions) => {
        state.data = actions.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProduct.rejected, (state, actions) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

// thunk
export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();
  return data;
});
// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING));
//      try{
//        const res=await fetch('https://fakestoreapi.com/products?limit=5');
//        const data=await res.json();
//        dispatch(setProduct(data))
//        dispatch(setStatus(STATUSES.IDLE))
//      }catch(err){
//        dispatch(setStatus(STATUSES.ERROR))
//      }
//     }
// }

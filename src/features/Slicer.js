import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value : 1
}


const Slicer = createSlice({
    initialState,
    name: 'show', 
    reducers:{}
})

export const {} = Slicer.actions
export default Slicer.reducer
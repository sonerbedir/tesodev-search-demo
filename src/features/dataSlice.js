import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  searchData: [],
  paginateData: []
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    bindData(state, action) {
      state.data = [...action.payload];
    },
    searchByFilter(state, action) {
      if (action.payload !== null) {
        let filteredData = state.data.filter((item) =>
          item["Name Surname"].includes(action.payload.trim())
        );

        state.searchData = [...filteredData];
      } else {
        state.searchData = null;
      }
    },
    sortedFilteredData(state, action){
      state.searchData = [...action.payload];
    }
  },
});

export const { bindData, searchByFilter, sortedFilteredData } = dataSlice.actions;
export default dataSlice.reducer;

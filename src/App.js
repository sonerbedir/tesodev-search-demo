import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import Detail from "./views/DetailPage.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import { bindData } from "./features/dataSlice.js";
import AddNewPage from "./views/AddNewPage.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const [data, cols] = await axios.all([
      axios.get("http://localhost:3000/data"),
      axios.get("http://localhost:3000/cols"),
    ]);

    let dataItem = await data.data;
    let colsItem = await cols.data;

    let bindingObject = {};
    let mergedData = [];

    for (let i in dataItem) {
      let responseItem = dataItem[i];

      for (let k in colsItem) {
        bindingObject[colsItem[k]] = responseItem[k];
      }

      mergedData.push(bindingObject);
      bindingObject = {};
    }

    dispatch(bindData(mergedData));
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:search" element={<Detail />} />
      <Route path="/add-new" element = {<AddNewPage/>}/>
    </Routes>
  );
}

export default App;

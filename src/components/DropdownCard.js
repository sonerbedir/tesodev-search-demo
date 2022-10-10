import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortedFilteredData } from "../features/dataSlice";

export default function DropdownCard({ style, handleClick }) {
  const [isActive, setIsactive] = useState(null);
  const listData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const data = [
    {
      name: "Name ascending",
      id: 1,
    },
    {
      name: "Name descending",
      id: 2,
    },
    {
      name: "Year ascending",
      id: 3,
    },
    {
      name: "Year descending",
      id: 4,
    },
  ];

  function shortDataList(name, data) {
    let isSortedData = [...data.searchData];

    switch (name) {
      case "Name ascending":
        let ascendingNameData = sortByName(isSortedData, 1);

        return dispatch(sortedFilteredData(ascendingNameData));

      case "Name descending":
        let descandingNameData = sortByName(isSortedData, -1);

        return dispatch(sortedFilteredData(descandingNameData));

      case "Year ascending":
        let ascendingYearData = sortByYear(isSortedData, 1);

        return dispatch(sortedFilteredData(ascendingYearData));

      case "Year descending":
        let descandingYearData = sortByYear(isSortedData, -1);

        return dispatch(sortedFilteredData(descandingYearData));

      default:
        return null;
    }
  };

  function sortByName(data, initialValue) {
    let descendingSortData = data.sort((a, b) => {
      let sortedData = a["Name Surname"] > b["Name Surname"];

      return initialValue === 1 ? (sortedData ? 1 : -1) : (!sortedData ? 1 : -1);
    });

    return descendingSortData;
  };

  function sortByYear(data, initialValue) {
    let ascendingSortData = data.sort((a, b) => {
      let calculatedDate = convertDateStringToTime(a, b);
      let sortedData = calculatedDate.getTimeFirstDate > calculatedDate.getTimesecondDate;

      return initialValue === 1 ? (sortedData ? 1 : -1) : (!sortedData ? 1 : -1);
    });

    return ascendingSortData;
  };

  function convertDateStringToTime(firstDateIndex, lastDateIndex) {
    let firstDate = firstDateIndex.Date.split("/").reverse().join("/");
    let getTimeFirstDate = new Date(firstDate).getTime();

    let secondDate = lastDateIndex.Date.split("/").reverse().join("/");
    let getTimesecondDate = new Date(secondDate).getTime();

    return {
      getTimeFirstDate,
      getTimesecondDate,
    };
  };

  return (
    <div className="card-wrapper" style={style}>
      <ul className="card-list">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className={`card-item ${isActive === item.id ? "active" : ""}`}
              onClick={(e) => {
                setIsactive(item.id);
                shortDataList(item.name, listData);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

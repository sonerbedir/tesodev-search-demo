import React, { useEffect, useState } from "react";
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
        let ascendingNameData = sortByNameAscending(isSortedData);

        return dispatch(sortedFilteredData(ascendingNameData));

      case "Name descending":
        let descandingNameData = sortByNameDescending(isSortedData);

        return dispatch(sortedFilteredData(descandingNameData));

      case "Year ascending":
        let ascendingYearData = sortByYearAscending(isSortedData);

        return dispatch(sortedFilteredData(ascendingYearData));

      case "Year descending":
        let descandingYearData = sortByYearDescending(isSortedData);

        return dispatch(sortedFilteredData(descandingYearData));

      default:
        return null;
    }
  };

  function sortByNameAscending(data) {
    let ascendingSortData = data.sort((a, b) =>
      a["Name Surname"] > b["Name Surname"] ? 1 : -1
    );

    return ascendingSortData;
  };

  function sortByNameDescending(data) {
    let descendingSortData = data.sort((a, b) =>
      a["Name Surname"] > b["Name Surname"] ? -1 : 1
    );

    return descendingSortData;
  };

  function sortByYearAscending(data) {
    let ascendingSortData = data.sort((a, b) => {
      let calculatedDate = convertDateStringToTime(a, b);

      return calculatedDate.getTimeFirstDate > calculatedDate.getTimesecondDate
        ? 1
        : -1;
    });

    return ascendingSortData;
  };

  function sortByYearDescending(data) {
    let descendingSortData = data.sort((a, b) => {
      let calculatedDate = convertDateStringToTime(a, b);

      return calculatedDate.getTimeFirstDate > calculatedDate.getTimesecondDate
        ? -1
        : 1;
    });

    return descendingSortData;
  };

  function convertDateStringToTime(firstDateIndex, lastDateIndex) {
    let firstDate = firstDateIndex.Date.split("/");

    let getTimeFirstDate = new Date(
      firstDate[1] + " " + firstDate[0] + " " + firstDate[2]
    ).getTime();

    let secondDate = lastDateIndex.Date.split("/");

    let getTimesecondDate = new Date(
      secondDate[1] + " " + secondDate[0] + " " + secondDate[2]
    ).getTime();

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

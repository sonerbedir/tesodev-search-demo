import Logo from "../styles/img/tesodev.jpg";
import { useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { BsArrowDownUp } from "react-icons/bs";
import { Button } from "./Button";
import { Input } from "./Input";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchByFilter } from "../features/dataSlice";
import { useEffect, useMemo, useState } from "react";
import { Pagination } from "./Pagination";
import DropdownCard from "./DropdownCard";

let pageSize = 5;

export function Detail() {
  const [text, setText] = useState("");
  const [isVisible, setisVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    searchByTerm(text);
  }, [text]);

  useEffect(() => {
    searchByTerm(params.search)
  }, []);

  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    if (data.searchData !== null) {
      return data.searchData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, data.searchData]);

  function searchByTerm(term) {
    if (term && term.length > 0) {
      dispatch(searchByFilter(term.trim()));

    } else {
      dispatch(searchByFilter(null))
    }
  }

  return (
    <div className="detail-container">
      <div className="detail-header">
        <div className="logo">
          <img src={Logo} alt="tesodev"></img>
        </div>
        <div className="form">
          <Input
            value={params.search}
            onChange={(e) => {
              setText(e.target.value);
              searchByTerm(e.target.value);
            }}
          />
          <Button
            type="search"
            text="Search"
            className="search-button primary-button"
            onClick={() => {
              searchByTerm(text);
            }}
          />
        </div>
        <div className="add-list">
          <Button
            className="primary-button"
            text="Add new record"
            type="button"
            onClick={() => {
              navigate("/add-new");
            }}
          />
        </div>
      </div>
      <div className="dropdown-menu">
        <button
          className="drowdown"
          onClick={() => {
            setisVisible(!isVisible);
          }}
        >
          <BsArrowDownUp />
          Order By
        </button>
        <DropdownCard style={{ display: !isVisible ? "none" : "" }} />
      </div>
      {data.searchData !== null && data.searchData.length && (
        <div className="detail-list-wrapper">
          <ul>
            {currentListData &&
              currentListData.map((item, index) => {
                return (
                  <li key={index} className="detail-list-item">
                    <div className="detail-list-item-wrapper">
                      <div className="detail-list-item-content">
                        <FiMapPin className="icon" />
                        <div className="content">
                          <p className="address">{item.City}</p>
                          <p className="city">{item.Country}</p>
                        </div>
                      </div>
                      <div className="detail-list-item-content-item">
                        <p className="name">{item["Name Surname"]}</p>
                        <p className="date">{item.Date}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      <div>
        {data.searchData !== null && data.searchData.length && (
          <Pagination
            currentPage={currentPage}
            totalCount={data.searchData.length}
            pageSize={pageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
        )}
      </div>
    </div>
  );
}

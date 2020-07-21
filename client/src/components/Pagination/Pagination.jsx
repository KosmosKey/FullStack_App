import React from "react";
import "./Pagination.scss";

const Pagination = ({
  arrayLength,
  lastPage,
  activeItem,
  setActiveItem,
  setPage,
  pageItem,
  previousPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(arrayLength / lastPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="container pageination_container">
      <ul className="pagination">
        {pageNumber.map((item, index) => {
          return (
            <li
              className="page-item_container active"
              onClick={() => setActiveItem(index)}
              key={index}
            >
              <a
                href="!#"
                className={
                  activeItem === index
                    ? "page-link_container active"
                    : "page-link_container"
                }
                onClick={() => setPage(item)}
              >
                {item}
              </a>
            </li>
          );
        })}
        <li className="page-link_container" onClick={pageItem}>
          <a href="!#">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

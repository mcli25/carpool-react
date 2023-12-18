import { VerticalAlignBottom } from "@mui/icons-material";
import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Pgination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const goToPage = (cur) => {
    setCurrentPage(cur);
  };
  console.log(currentPage, nPages);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination>
        {currentPage !== 1 && nPages !== 0 && (
          <Pagination.Prev onClick={goToPrevPage} />
        )}
        {nPages > 1 &&
          pageNumbers.map((cur, index) => (
            <Pagination.Item key={index} onClick={() => goToPage(cur)}>
              {cur}
            </Pagination.Item>
          ))}
        {currentPage !== nPages && nPages !== 0 && (
          <Pagination.Next onClick={goToNextPage} />
        )}
      </Pagination>
    </div>
  );
};

export default Pgination;

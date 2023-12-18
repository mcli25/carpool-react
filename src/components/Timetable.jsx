import React, { useContext, useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import SortIcon from "@mui/icons-material/Sort";
import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { format } from "date-fns";
import InfoContext from "../context/Info";
import Pgination from "./Pgination";

const Timetable = ({ searchResults, ontoggleItem }) => {
  const [sort, setSort] = useState(true);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(searchResults.length / recordsPerPage);
  searchResults = searchResults.slice(indexOfFirstRecord, indexOfLastRecord);

  const searchResultsAsc = [...searchResults].sort(
    (a, b) =>
      new Date(a.date?.seconds * 1000) - new Date(b.date?.seconds * 1000)
  );
  const searchResultsDes = [...searchResults].sort(
    (a, b) =>
      new Date(b.date?.seconds * 1000) - new Date(a.date?.seconds * 1000)
  );
  if (sort) {
    searchResults = searchResultsAsc;
  } else {
    searchResults = searchResultsDes;
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Contact</th>
            <th>Phone number</th>
            <th>
              Date
              <SortIcon
                style={{ cursor: "pointer" }}
                onClick={() => setSort((s) => !s)}
              ></SortIcon>
            </th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length === 0 ? (
            <>
              <Alert key="warning" variant="warning">
                Not Found
              </Alert>
            </>
          ) : (
            searchResults.map((cur, index) => {
              return (
                <>
                  <tr>
                    <td>{cur.departure}</td>
                    <td>{cur.destination}</td>
                    <td>{cur.driver}</td>
                    <td>{cur.phone}</td>
                    <td>
                      {new Date(cur.date?.seconds * 1000).toLocaleDateString()}
                    </td>
                    <td>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <span>{cur.publisher}</span>
                        <IconButton
                          onClick={() => ontoggleItem(cur.id)}
                          sx={{
                            "--IconButton-size": "32px",
                            color: cur.selected ? "red" : "inherit",
                          }}
                        >
                          {cur.selected ? <Favorite /> : <FavoriteBorder />}
                        </IconButton>
                      </Box>
                    </td>
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </Table>
      <Pgination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Timetable;

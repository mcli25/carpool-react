import React, { useState } from "react";
import { Alert, Table } from "react-bootstrap";
import SortIcon from "@mui/icons-material/Sort";
import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Timetable = ({ searchResults, ontoggleItem }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Capcity</th>
            <th>
              Date<SortIcon></SortIcon>
            </th>
            <th>Contact</th>
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
                    <td>{index}</td>
                    <td>{cur.departure}</td>
                    <td>{cur.destination}</td>
                    <td>{cur.vacancy}</td>
                    <td>{cur.departure_time}</td>
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
    </>
  );
};

export default Timetable;

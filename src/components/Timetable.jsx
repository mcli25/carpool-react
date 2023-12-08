import React from "react";
import { Alert, Table } from "react-bootstrap";
import SortIcon from "@mui/icons-material/Sort";
const Timetable = ({ searchResults }) => {
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
                    <td>{cur.publisher}</td>
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

import React from "react";
import { Table } from "react-bootstrap";
import SortIcon from "@mui/icons-material/Sort";

const Timetable = ({ data }) => {
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
          {data.map((cur, index) => {
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
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Timetable;

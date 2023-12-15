import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const Publish = () => {
  const tomorrow = dayjs().add(1, "day");
  const [startDate, setStartDate] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Publish
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="From"
                autoFocus
                className="mb-2"
              />
              <Form.Control
                type="text"
                placeholder="To"
                autoFocus
                className="mb-2"
              />
              <Form.Control
                type="text"
                placeholder="Contact Number"
                autoFocus
                className="mb-2"
              />
            </Form.Group>
            <span>Departure Date:</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                defaultValue={tomorrow}
                disablePast
                onChange={(p) => {
                  setStartDate(`${p.$y}-${p.$M + 1}-${p.$D}`);
                  console.log(startDate);
                }}
              />
            </LocalizationProvider>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Publish;

import React from "react";
import { Spinner } from "react-bootstrap";
function Loader() {
  return (
    <div
      style={{ height: "60vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
export default Loader;

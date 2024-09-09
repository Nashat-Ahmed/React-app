import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function UserDashboard() {
  const [dataApi, setDataApi] = useState([]);
  const [filterdata, setFilterdata] = useState("");
  const [mail, setMail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("http://localhost:3030/estate");
    setDataApi(res.data);
  };

  function contact(e, i) {
    setMail(e);
    setId(i);
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          marginLeft: "35%",
          flexDirection: "column",
        }}
      >
        <input
          style={{ width: "400px" }}
          placeholder="Search with Type and City"
          className="form-control"
          type="text"
          value={filterdata}
          onChange={(e) => setFilterdata(e.target.value)}
        />
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20%",
            justifyContent: "space-evenly",
            marginTop: "60px",
          }}
        >
          {" "}
          {dataApi
            .filter(
              (d) =>
                d?.type?.toLowerCase()?.includes(filterdata?.toLowerCase()) ||
                d?.address?.city
                  ?.toLowerCase()
                  ?.includes(filterdata?.toLowerCase())
            )
            .map((value, i, a) => {
              return (
                <form
                  style={{
                    height: "47vh",
                    overflow: "hidden",
                    width: "100%",
                    border: "1px solid black",
                    margin: "30px 0px",
                    backgroundColor: "RGB(240, 255, 244, 0.5)",
                  }}
                  key={i}
                >
                  <div style={{ padding: "0px 0px 0px 0px" }}>
                    <img
                      style={{ width: "100%", height: "160px" }}
                      src={value?.Image}
                      alt="imgsrc"
                    ></img>
                    <h6
                      style={{
                        margin: "10px",
                        textAlign: "center",
                        fontWeight: "800",
                        color: "RGB(0,0,0, 0.8)",
                      }}
                    >
                      Type: {value?.type} <br />
                      City : {value?.address?.city} <br />
                      State : {value?.address?.state} <br />
                      PinCode : {value?.address?.postalnumber}
                      <br />
                      {id === value?.id && mail}
                    </h6>
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{
                      margin: "10px 0 0 38%",
                    }}
                    onClick={() => {
                      contact(value.contact, value.id);
                    }}
                  >
                    Contact
                  </button>
                </form>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

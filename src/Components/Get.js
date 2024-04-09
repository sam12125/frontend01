import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [items, setItems] = useState([]);
  let data;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://backend01-3.onrender.com/api/data")
      .then((response) => {
        setItems(response.data.data);
        data = response.data.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Data</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          style={{
            width: "40%",
            border: "1px solid lightgray",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid lightgray",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Title
              </th>
              <th
                style={{
                  border: "1px solid lightgray",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Content
              </th>
              <th
                style={{
                  border: "1px solid lightgray",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Id
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length ? (
              items.map((item) => (
                <tr key={item._id}>
                  <td style={{ border: "1px solid lightgray", padding: "8px" }}>
                    {item.title}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "8px" }}>
                    {item.content}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "8px" }}>
                    {item._id}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  style={{ border: "1px solid lightgray", padding: "8px" }}
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Get;

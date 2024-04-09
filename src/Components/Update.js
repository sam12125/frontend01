import React from "react";
import { useState } from "react";

function Update() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  const updateData = async () => {
    const user = {
      title: title,
      content: content,
    };
    console.log(user);

    await fetch(`https://backend01-3.onrender.com/api/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    window.location.reload();
  };

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <h1>Update</h1>
        <input
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
        <button onClick={updateData}>Update</button>
      </div>
    </>
  );
}

export default Update;

import React from "react";
import { useState, useEffect } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postData = async () => {
    // console.log(name,marks)
    const user = {
      title: title,
      content: content,
    };
    console.log(user);

    await fetch("https://backend01-3.onrender.com/api/add", {
      method: "POST",
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
      <div>
        <h1>Create</h1>
        <input
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={postData}>Post</button>
      </div>
    </>
  );
}

export default Create;

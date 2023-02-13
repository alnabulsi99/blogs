import React from "react";
import "./style.css";
function index({ data , isLoading}) {
  return (
    <>
      <div className="blogList">
        
        {isLoading ? <p className="loader"></p> : data.map((list) => (
          <div key={list.id}>
          
            <div className="title">{list.title}</div>
            <div className="author"> By : {list.author}</div>
            <div className="body">{list.body}</div>
            <br />
            </div>
        ))}
        <br />
      </div>
    </>
  );
}

export default index;

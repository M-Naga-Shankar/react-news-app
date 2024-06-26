import React from "react";

export default function NewsItem(props) {
  return (
    <>
      <div className="card mx-3 my-5 ">
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

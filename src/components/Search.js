import React from "react";
import Container from "./Container";
import "./Style.css";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <p>Created by <a href='https://www.instagram.com/rayhiphop_' target='_blank' className='gyanam-hover'>Gyanam Gogoi</a></p>
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

function insta(){
  window.open('https://www.instagram.com/rayhiphop_');
}

export default Search;

import React from "react";
import Book from "./Book";

//Library 컴포넌트 : 3개의 Book 컴포넌트 랜더링.
function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numofPage={300}></Book>
      <Book name="처음 만난 AWS" numofPage={400}></Book>
      <Book name="처음 만난 리액트" numofPage={500}></Book>
    </div>
  );
}

export default Library;

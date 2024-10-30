import React from "react";

//Book 컴포넌트 : props로 name, numOfPage를 받아 출력하는 컴포넌트
function Book(props) {
    return (
        <div> 
        <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
    <h2>{`이 책은 총 ${props.numofPage} 페이지로 이뤄져 있습니다.`}</h2>
        </div>
    );
}

export default Book;
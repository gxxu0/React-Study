import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "염진희",
    comment: "제가 만든 첫 컴포넌트 입니다.",
  },
  {
    name: "염초코",
    comment: "나는 염초코 입니다.",
  },
];
//Comment 컴포넌트에 Props 추가하기
/** 
const CommentList = (props) => {
    return (
      <div>
            <Comment name={"염진희"} comment={"제가 만든 첫 컴포넌트 입니다."} />
        <Comment name={"염초코"} comment={"나는 염초코 입니다."} />
      </div>
    );
};
*/

//Comment 데이터를 별도의 객체로 분리하기
const CommentList = (props) => {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
};

export default CommentList;

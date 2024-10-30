/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./CommentList.css";

//Comment 컴포넌트에 스타일 입히기
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
        border: "1px solid gray",
        borderRadius: 15,
        fontFamily: "Pretendard-Regular",
  },
  image: {
    width: 100,
    borderRadius: 100,
  },
  contentContainer: {
    margin: 10,
    display: "inline-grid",
  },
  nameText: {
      fontWeight: "bold",
      fontSize: 20,
  },
};
const Comment = (props) => {
    return (
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img
            src="https://upload.wikimedia.org./wikipedia/commons/8/89/Portrait_Placeholder.png"
            style={styles.image}
          ></img>
        </div>
        <div style={styles.contentContainer}>
          <span style={styles.nameText}>{props.name}</span>
          <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
    );
};

export default Comment;
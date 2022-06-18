import React from "react";

const Card = ({ cardObject, posts, index }) => {
  return (
    <>
      <div
        className={
          index + 1 === posts.length ? "custom_card hover" : "custom_card"
        }
      >
        <div className="custom_card_body">
          <img
            className="custom_card_img"
            src={cardObject?.thumbnail?.large}
            alt=""
          />
          <div className="custom_dots">
            <div className="dot_dodger"></div>
            <div className="dot_yellow"></div>
          </div>
          <h3 className="custom_card_title">{cardObject?.title}</h3>
          <p className="custom_card_text">{cardObject?.content}</p>
          <div className="custom_card_footer">
            <div className="author">
              {cardObject?.author?.name} - {cardObject?.author?.role}
            </div>
            <div className="date">
              {new Date().toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

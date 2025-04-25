import React, { useState } from "react";
import styles from "./answerItem.module.css";

const AnswerItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.answers__item}>
      <div className={styles.answers__item_head} onClick={toggleOpen}>
        <img
          src="src/assets/svg/answers-row.svg"
          className={`${styles.answers__row} ${isOpen ? styles.open : ""}`}
          alt=""
        />
        <h4
          className={styles.answers__item_title}
          style={{ color: isOpen ? "#00b7ec" : "#666666" }}
        >
          {title}
        </h4>
      </div>
      {isOpen && (
        <p
          className={`${styles.answers__item_description} ${
            isOpen ? styles.open : ""
          }`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default AnswerItem;

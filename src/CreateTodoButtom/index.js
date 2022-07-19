import React from "react";
import "./CreateTodoButtom.css";
export default function CreateTodoButtom(props) {
  const onclickButton = () => {
    props.setOpenModal(!props.openModal);
  };
  return (
    <button
      className={`addButton ${!!props.openModal && "activate"}`}
      onClick={onclickButton}
    >
      <i className="fa-solid fa-circle-plus"></i>
    </button>
  );
}

import {useState} from "react";
// with useState we register diferent states in the react aplication
import Modal from "./modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(){
    setModalIsOpen(true);

  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop/>}
    </div>
  );
}

export default Todo;

//Custom components NEED to start with CAPITAL letter

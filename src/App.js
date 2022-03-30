import Backdrop from "./components/Backdrop";
import Modal from "./components/modal";
import Todo from "./components/todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
{/* Los Todo son componentes separados que tiene conceptos similares pero con los props podemos cambiar diversos datos */}
      <Todo text= "React"  />
      <Todo text = "Master React" />
      <Todo text= "Master" />
      <Modal />
      <Backdrop />

    </div>
  );
}

export default App;

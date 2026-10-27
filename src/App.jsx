import "./App.css";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import Ticket from "./Temp.jsx";
import {sum} from "./helper.js";
import Form from "./form.jsx";
import CommentForm from "./CommentForm.jsx";
function App() {

  let winCondition =(ticket) =>{
    return sum(ticket)==15;
  }
  return (
    <>
   <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}
export default App;

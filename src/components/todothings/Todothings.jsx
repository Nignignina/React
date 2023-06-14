import "./index.css";
import { todoList } from "../../array/todoList";
import Cards from "../cards/Cards";
// le proprietà vengono settate nel momento dell'invocazione
const Todothings = () => {
  return (
    <>
      <div className="todos">
        {todoList.map((item) => (
          <Cards data={item} />
        ))}
      </div>
    </>
  );
};

export default Todothings;

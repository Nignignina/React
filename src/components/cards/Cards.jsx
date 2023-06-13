import "./index.css";

const Cards = ({ data }) => {
  return (
    <div className="todos">
      {data.map((todo) => (
        <div className="todo" key={todo.id}>
          <p>{todo.todo}</p>
        </div>
      ))}
    </div>
  );
};
export default Cards;

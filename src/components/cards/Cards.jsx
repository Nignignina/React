import "./index.css";

const Cards = ({ data }) => {
  return (
    <div className={` todo ${data.completed && "completed"}`} key={data.id}>
      <p>{data.todo}</p>
    </div>
  );
};
export default Cards;

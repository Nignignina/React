// importare lo stile come prima cosa
import "./index.css";

// FUNCTIONAL COMPONENT
// una funzione per renderizzare ha bisogno del return
//  bisogna fare export default
const NavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },

    {
      id: 2,
      name: "create a new todo",
      link: "/",
    },
    {
      id: 3,
      name: "freak out",
      link: "/",
    },
  ];
  return (
    <div className="NavBar">
      <ul className="NavBar_items">
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.link}> {item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
//

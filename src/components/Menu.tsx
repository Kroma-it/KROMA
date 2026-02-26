import { NavLink } from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menu">
            <ul>
                <li><NavLink to="/" className="">Home</NavLink></li>
                <li><NavLink to="/add">Add Techno</NavLink></li>
                <li><NavLink to="/techno-list">Techno List</NavLink></li>
            </ul>
        </div>
     );
}
 
export default Menu;
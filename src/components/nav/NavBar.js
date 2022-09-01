import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return <ul className="navbar">


        <li className="navbar__item active">
            <Link className="navbar__link" to="/stylists">Pick a Stylist</Link>
        </li>

        <li className="navbar__item active">
            <Link className="navbar__link" to="/colors">Pick a Color</Link>
        </li>

        <li className="navbar__item active">
            <Link className="navbar__link" to="/styles">Pick a Style</Link>
        </li>

        <li className="navbar__item active">
            <Link className="navbar__link" to="/productChooserator">Choose Products</Link>
        </li>

    </ul>
}
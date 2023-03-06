import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Careers</Link>
        </>
    )
}
export default Navbar;
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
<div className="mainflex">
    <div className="flex">
<div className="backicon">
    <img  className="navicon" src="https://img.icons8.com/fluency-systems-regular/256/shopping-bag--v1.png"/>
</div>

<div className="backicon">
    <img  className="navicon" src="https://img.icons8.com/fluency-systems-regular/256/user.png"/>
</div>


<div className="backicon">
    <img  className="navicon" src="https://img.icons8.com/fluency-systems-regular/256/hearts.png"/>
</div>


<div className="backicon">
    <img  className="navicon" src="https://img.icons8.com/fluency-systems-regular/256/search.png"/>
</div>

<div className="backicon">
    <img  className="navicon" src="https://img.icons8.com/ios/256/technical-support.png"/>
</div>
    </div>

    <div className="flex">
<div className="logo">
    <img src="https://modellaa.com/logo-black-gold.png"/>
</div>
{/* menu */}
<div>
<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
</nav>
</div>
{/* menu */}
    </div>

</div>
        </>
    )
}
export default Navbar;
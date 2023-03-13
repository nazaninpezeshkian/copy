import { Link } from "react-router-dom"
import "./SizeGuid.css"
import gift from "../assets/gift.png"
import par from "../assets/parche.png"
import size from "../assets/sc1.png"
export default function SizeGuide() {
  return (
    <>
        <div >
   <img className='sizeborder img-fluid' src={size}/>
    </div>
    <div className="sizeflex">
<div>
  <Link to="test"><img src={gift} className="sizepics img-fluid"/></Link>

</div>
<div>
<img src={par} className="sizepics img-fluid"/>
</div>
    </div>
    </>



  )
}
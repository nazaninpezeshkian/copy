import taste from "../assets/taste.png"
import style from "../assets/modstyle.png"

import text from "../assets/text.png"
import tec from "../assets/tec.png"

import tectext from "../assets/tectext.png"
import shirt from "../assets/shirt.png"
function Style(){
    return(
        <>
        <div className="marginguide">
<div className="row">
    <div className="col-md-6 col-12">
        <img className="stylepic img-fluid" src={taste}/>
    </div>
    <div className="col-md-6 col-12">
    <img className="stylepic img-fluid"  src={style}/>
    </div>

</div>
<br/>
<br/>
<br/>
{/* 2 */}
<div className="toprow">
<div className="row">

        <div className="col-md-6 col-12">
        <img className="stylepic4 toprow img-fluid"  src={text}/>
        </div>
     

    <div className="col-md-6 col-12">
    <img className="toprow img-fluid stylepic5"  src={tec}/>
    </div>

</div>
</div>

{/* 3 */}
<div className="row">

        <div className="col-md-6 col-12">
        <img className="stylepic3 img-fluid"  src={tectext}/>
        </div>
     

    <div className="col-md-6 col-12">
    <img className="stylepic2 img-fluid"  src={shirt}/>
    </div>

</div>
        </div>
        </>
    )
}
export default Style;
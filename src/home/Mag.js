import { Link } from "react-router-dom";
import "./Mag.css"
import time from "../assets/time.png"
import comments from "../assets/comments.png"
import pro from "../assets/profile.png"
function Mag(){
    return(
        <>
         <p className="guidetop"> مجله مدلا </p>
         <br/>
         <div className="marginguide">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div><img className="magpic" src="https://poshakkohestani.com/upload/upload/1656139535.jpg"/></div>
                    <div className="magdate">1401/08/29</div>
                    <div dir="rtl"><Link className="magtext"><p>چگونه یقه پیراهن را بشوییم و لکه ها را رفع کنیم؟</p></Link></div>
                    <div className="magmainflex">
                        <div className="magflex">
                            <div className="magflex3">
                                <div><img className="magicon" src={time}/></div>
                                <div className="flextext">7 دقیقه</div>
                            </div>
                            <div className="magflex2">
                            <div><img className="magicon" src={comments}/></div>
                                <div className="flextext">0</div>
                            </div>
                        </div>


                        <div className="magflex">
                            <div className="magflex4">
                            <div className="flextext2">مهران کرمی</div>
                                <div><img className="magicon2" src={pro}/></div>
                             
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                <div><img className="magpic" src="https://aradbranding.com/fa/uploads/topics/16781142173724.jpg"/></div>
                <div className="magdate">1401/08/29</div>
                    <div dir="rtl"><Link className="magtext"><p>چگونه یقه پیراهن را بشوییم و لکه ها را رفع کنیم؟</p></Link></div>
                    <div className="magmainflex">
                        <div className="magflex">
                            <div className="magflex3">
                                <div><img className="magicon" src={time}/></div>
                                <div className="flextext">7 دقیقه</div>
                            </div>
                            <div className="magflex2">
                            <div><img className="magicon" src={comments}/></div>
                                <div className="flextext">0</div>
                            </div>
                        </div>


                        <div className="magflex">
                            <div className="magflex4">
                            <div className="flextext2">مهران کرمی</div>
                                <div><img className="magicon2" src={pro}/></div>
                             
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                <div><img className="magpic" src="https://threadcurve.com/wp-content/uploads/2022/02/man-dress-shirt-feb17.jpg"/></div>
                <div className="magdate">1401/08/29</div>
                    <div dir="rtl"><Link className="magtext"><p>چگونه یقه پیراهن را بشوییم و لکه ها را رفع کنیم؟</p></Link></div>
                    <div className="magmainflex">
                        <div className="magflex">
                            <div className="magflex3">
                                <div><img className="magicon" src={time}/></div>
                                <div className="flextext">7 دقیقه</div>
                            </div>
                            <div className="magflex2">
                            <div><img className="magicon" src={comments}/></div>
                                <div className="flextext">0</div>
                            </div>
                        </div>


                        <div className="magflex">
                            <div className="magflex4">
                            <div className="flextext2">مهران کرمی</div>
                                <div><img className="magicon2" src={pro}/></div>
                             
                            </div>
                       
                        </div>
                    </div>
                </div>

            </div>

         </div>
        </>
    )
}
export default Mag;
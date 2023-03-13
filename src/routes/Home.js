import Cat from "../home/Cat";
import Comments from "../home/Comments";
import Guide from "../home/Guide";
import Norooz from "../home/Norooz";
import SizeGuide from "../home/SizeGuide";
import Video from "../home/Video";

function Home(){
    return(<>
    <Video />
    <Norooz />
    <Cat />
    <br/>
    <br />
    <Comments />
<SizeGuide />

<Guide />
<br/>
<br/>
   </>)
}
export default Home;
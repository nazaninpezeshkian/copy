import Cat from "../home/Cat";
import Comments from "../home/Comments";
import Guide from "../home/Guide";
import Norooz from "../home/Norooz";
import SizeGuide from "../home/SizeGuide";
import Style from "../home/Style";
import Video from "../home/Video";
import Mag from "../home/Mag";

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
<Style />
<Mag />
   </>)
}
export default Home;
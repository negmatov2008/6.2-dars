import Buttons from "./buttons/buttons"
import Colors from "./colors"
import Typography from "./typography/typography"


function Home (){
    return <div className="container">
        <div className="header">
            <div className="logo">skilled</div>
            <div className="about">design system</div>
        </div>
        <Colors/>
        <Typography/>
        <Buttons/>
    </div>
}

export default Home
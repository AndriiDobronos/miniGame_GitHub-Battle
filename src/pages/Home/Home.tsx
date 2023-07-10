import {Link} from "react-router-dom";
import {FC,ReactElement} from "react";
import BattleImage from "./battle_programmers.png"

const Home:FC = ():ReactElement  => {
    return (
        <div className='home-container' >
            <h1>GitHub Battle: Battle you friends ... and stuff</h1>
            <Link to='battle' className='button'>Battle</Link>
            <audio controls={false} autoPlay={false} muted={false} preload='none' loop={true}>
                <source src="https://soundimage.org/wp-content/uploads/2022/04/High-Seas-Adventures.mp3" />
                <source src ="https://soundimage.org/wp-content/uploads/2017/05/Car-Theft-101.mp3" />
                your browser not supported element <code>audio</code>
            </audio>
            <div className='home-border'>
                <img className='home-picture' src={BattleImage} alt="Battle"/>
                {/*<img className='home-picture' src="https://miro.medium.com/v2/0*mrNJa7D1vBAudxwq" alt="Battle"/>*/}
            </div>
        </div>
    )
}
export default Home;
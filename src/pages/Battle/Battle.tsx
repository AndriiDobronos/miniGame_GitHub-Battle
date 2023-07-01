import PlayerInput from "./PlayerInput";
import PlayerInput2 from "./PlayerInput2";
import PlayerPreview from "./PlayerPreview";
//import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//import {handleSubmit} from "../../state/battle/battle.action";
//import {handleReset,handleReset2} from "../../state/battle/battle.action";
import {handleReset,handleReset2} from "../../state/battle/battle.slice";
import {FC, ReactElement} from "react";
import { IPlayerData} from "../../state/types/battle.types";

const Battle:FC  = ():ReactElement  => {
    const dispatch = useDispatch()
    const playerData:IPlayerData = useSelector((state) => state.battle.playerData)
    const loading:boolean = useSelector(state => state.battle.loading)
    const error:string = useSelector(state => state.battle.error)

/*
useEffect(()=>{
    },[playerData])
    const [playerData,setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    })

    const handleSubmit = (id,userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`,
        }))
    }

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null,
        }))
    }
*/
//    console.log(loading,"loading")
//    console.log(playerData,'playerData')
/*
    if (loading) {
        return <p>Loading ...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
*/
    return (
        <div>
            <div className='row'>
                {playerData.playerOneImage ?
                    <div className='column'>
                        <PlayerPreview
                            avatar={playerData.playerOneImage}
                            username={playerData.playerOneName}
                        >
                            <button className="reset" onClick={()=>dispatch(handleReset('playerOne'))} >Reset</button>
                            {/*<button className="reset" onClick={()=>handleReset('playerOne')} >Reset</button>*/}
                        </PlayerPreview>
                    </div> :
                    <PlayerInput />}
                    {/*<PlayerInput
                        id='playerOne'
                        label='Player 1'
//                        onSubmit={handleSubmit}
                        onSubmit={()=>dispatch(handleSubmit())}  */}
                {playerData.playerTwoImage ?
                    <div className='column'>
                        <PlayerPreview
                            avatar={playerData.playerTwoImage}
                            username={playerData.playerTwoName}
                        >
                            <button className="reset" onClick={()=>dispatch(handleReset2('playerTwo'))} >Reset</button>
                            {/*<button className="reset" onClick={()=>handleReset('playerTwo')} >Reset</button>*/}
                        </PlayerPreview>
                    </div> :
                    <PlayerInput2 />}
            </div>
            {playerData.playerOneImage && playerData.playerTwoImage ?
            <Link to={{
                pathname:'results',
                search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
            }} className='button'
                  playerData={playerData}
            >
                Battle
            </Link> :
            null
            }
            <div className="animation-container">
                <div className ="lightning-container">
                    <div className ="lightning white"></div>
                    <div className ="lightning red"></div>
                </div>
                <div className ="boom-container">
                    <div className ="shape circle big white"></div>
                    <div className ="shape circle white"></div>
                    <div className="shape triangle big yellow"></div>
                    <div className="shape disc white"></div>
                    <div className ="shape triangle blue"></div>
                </div>
                <div className ="boom-container second">
                    <div className ="shape circle big white"></div>
                    <div className ="shape circle white"></div>
                    <div className ="shape disc white"></div>
                    <div className ="shape triangle blue"></div>
                </div>
            </div>
        </div>
    )
}
export default Battle;
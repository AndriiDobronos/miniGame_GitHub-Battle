import PlayerInput from "./PlayerInput";
import PlayerInput2 from "./PlayerInput2";
import PlayerPreview from "./PlayerPreview";
import PlayerPreview2 from "./PlayerPreview2";
//import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//import {handleSubmit} from "../../state/battle/battle.action";
//import {handleReset,handleReset2} from "../../state/battle/battle.action";
import {handleReset,handleReset2} from "../../state/battle/battle.slice";
import {FC, ReactElement} from "react";
import { IPlayerData} from "../../state/types/battle.types";
import ShootingLoading from "./ShootingLoading"

const Battle:FC  = ():ReactElement  => {
    const dispatch = useDispatch()
    const playerData:IPlayerData = useSelector((state) => state.battle.playerData)
    const loading:boolean = useSelector(state => state.battle.loading)
    const error:string = useSelector(state => state.battle.error)
    const battleIsFormed =useSelector((state) =>state.battle.battleIsFormed)
    const battleIsFormed2 =useSelector((state) =>state.battle.battleIsFormed2)
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
            <div className='row battle'>

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
                <div className ="boom-container">
                    <div className ="shape circle big white"></div>
                    <div className ="shape circle white"></div>
                    <div className="shape triangle big yellow"></div>
                    <div className="shape disc white"></div>
                    <div className ="shape triangle blue"></div>
                </div>

                {playerData.playerTwoImage ?
                    <div className='column'>
                        <PlayerPreview2
                            avatar={playerData.playerTwoImage}
                            username={playerData.playerTwoName}
                        >
                            <button className="reset" onClick={()=>dispatch(handleReset2('playerTwo'))} >Reset</button>
                            {/*<button className="reset" onClick={()=>handleReset('playerTwo')} >Reset</button>*/}
                        </PlayerPreview2>
                    </div> :
                    <PlayerInput2 />}
            </div>
            {playerData.playerOneImage && playerData.playerTwoImage && playerData.playerOneImage !== playerData.playerTwoImage && battleIsFormed && battleIsFormed2 ?
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
            {/*<ShootingLoading/>*/}
        </div>
    )
}
export default Battle;
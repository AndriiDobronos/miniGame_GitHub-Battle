import {useState, memo, FC, ReactElement, FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
//import {getUserName2, handleSubmit2} from "../../state/battle/battle.action";
import {getUserName2, handleSubmit2} from "../../state/battle/battle.slice";


const PlayerInput2:FC  = memo(():ReactElement => {
    const dispatch = useDispatch()
    const battleIsFormed =useSelector((state) =>state.battle.battleIsFormed)
    const [userName, setUserName] = useState<string>('')

    const handlerSubmit = (event:FormEvent):void => {
        event.preventDefault &&
        dispatch(handleSubmit2('playerTwo'));
//        console.log(event.target[0].value,"event.value")
    }

    dispatch(getUserName2(userName))
    return (
        <form  className="column move-right" onSubmit={handlerSubmit}>
            <label htmlFor='Player 2'>Player 2</label>
            <input
                id='Player 2'
                type="text"
                placeholder='GitHub UserName'
                autoComplete='off'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                disabled={!battleIsFormed}
            />
            <button
                className="button"
                type={'submit'}
                disabled={!userName.length}
            >
                Submit
            </button>
        </form>
    )
})
export default PlayerInput2


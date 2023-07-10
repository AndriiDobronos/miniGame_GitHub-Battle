import {FC, ReactElement} from "react";
import {memo} from "react";
import {ReactEventHandler} from "react";
import {useDispatch} from "react-redux";
import {getBattleIsFormed2} from "../../state/battle/battle.slice";

const PlayerPreview2:FC = memo(({avatar, username, children}):ReactElement => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="column">
                <img
                    src={avatar}
                    alt="Avatar"
                    className='avatar'
                    onError={(e:ReactEventHandler<HTMLImageElement> | undefined ) =>
                        ( dispatch(getBattleIsFormed2()),
                                e.target.parentElement.innerHTML = '<h2>' +
                                    'No user with this name was found <br/>'+
                                    'Enter another name, please</h2>'
                        )
                    }
                />
                <h3>{username}</h3>
            </div>
            {children}
        </div>
    )
})
export default PlayerPreview2
import {Children, cloneElement, FC, ReactElement} from "react";
import {memo} from "react";
import {ReactEventHandler} from "react";
import {useDispatch} from "react-redux";
import {getBattleIsFormed} from "../../state/battle/battle.slice";

const PlayerPreview:FC = memo(({avatar, username, children, render}):ReactElement => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="column">
                <img
                    src={avatar}
                    alt="Avatar"
                    className='avatar'
//                    onError={(e:{target:{src:string,className:string,alt:string,parentElement:{innerHTML:string}}})=> {
                        onError={(e:ReactEventHandler<HTMLImageElement> | undefined ) =>
                            ( dispatch(getBattleIsFormed()),
                                e.target.parentElement.innerHTML = '<h2>' +
                            'No user with this name was found <br/>'+
                                'Enter another name, please</h2>'
                            )
                    }
                />
                <h3>{username}</h3>
            </div>
            {children}
            {/*Children.map(children,child => {
                return cloneElement(child, {children: 'Reset'});// can 'Reset' or something else change
            })  */}
            {/*render*/}
        </div>
    )
})
export default PlayerPreview
import {FC, ReactElement} from "react";

const Loader:FC = ():ReactElement => {
    return (
        <div className="loader">
            {"Loading".split('').map((character:string,index:number) =>(
                <span key={index}
                      style={{animationDelay :`${index*0.1}s`}}>{character}</span>
            ))}
        </div>
    )
}
export default Loader
import {useSelector} from "react-redux";
import Loader from "./Loader";
import {FC, ReactElement} from "react";
import {ErrorT, ReposT, IRepos} from "../../state/types/popular.types";
import {RootState} from "../../state/store";

const Repos:FC  = ():ReactElement  => {
    const loading:boolean = useSelector((state: RootState):boolean => state.popular.loading)
    const repos:ReposT = useSelector((state:RootState):ReposT => state.popular.repos)
    const error: ErrorT = useSelector((state: RootState):ErrorT => state.popular.error)
    if (loading) {
        return <Loader />
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <ul className="popular-list">
            {repos.map((repo:IRepos ,index:number):ReactElement => {
                return (
                    <li key={repo.id} className='popular-item' >
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url} alt="Avatar" className="avatar"/>
                            </li>
                            <li>
                                <a href={repo.html_url} target="_blank" rel='noreferrer'>{repo.name}</a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
export default Repos
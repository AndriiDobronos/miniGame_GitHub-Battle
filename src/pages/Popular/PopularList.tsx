import {ReactElement,FC} from "react";
import {IRepos} from "../../state/types/battle.types";

const PopularList:FC<IRepos> = (props:IRepos):ReactElement  => {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index:number) => {
                return (
                    <li key={repo.id} className="popular-item">
                        <div className="popular-rank">#{index+1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url} alt="Avatar" className="avatar"/>
                            </li>
                            <li>
                                <a href={repo.html_url} target='_blank' >{repo.name}</a>
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
export default PopularList
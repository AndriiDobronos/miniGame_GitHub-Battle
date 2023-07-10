import {FC, memo, ReactElement} from "react";
import {Link} from "react-router-dom";
import PlayerPreview from "./PlayerPreview";

const Player:FC  = memo(({label, profile,score }):ReactElement => {
    const sumStars = score - profile.followers ;

    return (
        <div>
            <h1 className='header'>{label}</h1>
            <h3 style={{textAlign: 'center'}}></h3>
            <PlayerPreview avatar={profile.avatar_url} username={profile.login}>
                <ul className="space-list-items">
                    {profile.name ? <li>{profile.name}</li> : null}
                    {profile.location ? <li>{profile.location}</li> : null}
                    {profile.company ? <li>{profile.company}</li> : null}
                    <li>Followers: {profile.followers}</li>
                    <li>Following: {profile.following}</li>
                    <li>Public Repos: {profile.public_repos}</li>
                    <li>Sum Stars in Repos:{sumStars}</li>
                    <li>Score for the solution:{score + Number(Boolean(profile.public_repos))}</li>
                    {profile.blog ? <li>
                        <Link to={profile.blog} target='_blank'>{profile.blog}</Link>
                    </li> : null}
                </ul>
            </PlayerPreview>
        </div>
    )
})
export default Player
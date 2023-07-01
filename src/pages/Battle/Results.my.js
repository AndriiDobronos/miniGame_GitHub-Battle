import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {fetchPopularRepos} from "../../api.name.js";
import PlayerPreview from "./PlayerPreview";

const ResultsMy = () => {
    //    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation()
    const [repos1, setRepos1] = useState([])
    const [repos2, setRepos2] = useState([])
    const [error, setError] = useState(null)
    const [countPlayer1, setCountPlayer1] = useState(null)
    const [countPlayer2, setCountPlayer2] = useState(null)
    const [winnerPlayer1, setWinnerPlayer1] = useState("")
    const [winnerPlayer2, setWinnerPlayer2] = useState("")

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        fetchPopularRepos(`${params.get('playerOneName')}`)
            .then(data => setRepos1(data))
            .catch(error => setError(error))
        fetchPopularRepos(`${params.get('playerTwoName')}`)
            .then(data => setRepos2(data))
            .catch(error => setError(error))
    },[])

    const getScorePlayer1 = () => {
        let score = 0
        if (repos1[0]?.owner.login) {
            score += 1
        }
        if (repos1[0]?.visibility) {
            score += 1
        }
        if (repos1[0]?.owner.blog_url) {
            score += 1
        }
        if (repos1[0]?.owner.location) {
            score += 1
        }
        if (repos1[0]?.owner.organizations_url) {
            score += 1
        }
        if (repos1[0]?.owner.followers_url) {
            score += 1
        }
        if (repos1[0]?.owner.following_url) {
            score += 1
        } else {
            setCountPlayer1(null)
        }
        setCountPlayer1(score)
    }

    const getScorePlayer2 = () => {
        let score = 0
        if (repos2[0]?.owner.login) {
            score += 1
        }
        if (repos2[0]?.visibility) {
            score += 1
        }
        if (repos2[0]?.owner.blog_url) {
            score += 1
        }
        if (repos2[0]?.owner.location) {
            score += 1
        }
        if (repos2[0]?.owner.organizations_url) {
            score += 1
        }
        if (repos2[0]?.owner.followers_url) {
            score += 1
        }
        if (repos2[0]?.owner.following_url) {
            score += 1
        } else {
            setCountPlayer2(null)
        }
        setCountPlayer2(score)
    }

    const getWinner = () => {
        getScorePlayer1();
        getScorePlayer2();
        if (countPlayer1 === countPlayer2) {
            setWinnerPlayer1('Equal to each other');
            setWinnerPlayer2('Equal to each other');
        } else if (countPlayer2 > countPlayer1) {
            setWinnerPlayer1('Loser');
            setWinnerPlayer2('Winner');
        } else if (countPlayer1 > countPlayer2) {
            setWinnerPlayer2('Loser');
            setWinnerPlayer1('Winner');
        }
    }

    return (
        <div className="center">
            <h1 style={{textAlign: 'center'}} >Results</h1>
            <div className='row'>
                <div className='column'>
                    <PlayerPreview
                        avatar={repos1[0]?.owner.avatar_url}
                        username={repos1[0]?.name}
                    >
                        <li>Stars: {repos1[0]?.stargazers_count || "--"}</li>
                        <li>Login: {repos1[0]?.owner.login || "--"}</li>
                        <li>Public: {repos1[0]?.visibility || "--"}</li>
                        <li>Blog: {repos1[0]?.owner.blog_url || "--"}</li>
                        <li>Location: {repos1[0]?.owner.location || "--"}</li>
                        <li>Company: {repos1[0]?.owner.organizations_url.split('/')[4] || "--"}</li>
                        <li>Followers: {repos1[0]?.watchers || "--"}</li>
                        <li>Following: {repos1[0]?.watchers_count || "--"}</li>
                        <li>Repositories size: {repos1[0]?.size || "--"}</li>
                        <h2>Score: {countPlayer1}</h2>
                        <h2 style={{color: "#d0021b"}} >{winnerPlayer1}</h2>
                    </PlayerPreview>
                </div>

                <div className='column'>
                    <PlayerPreview
                        avatar={repos2[0]?.owner.avatar_url}
                        username={repos2[0]?.name}
                    >
                        <li>Stars: {repos2[0]?.stargazers_count || "--"}</li>
                        <li>Login: {repos2[0]?.owner.login || "--"}</li>
                        <li>Public: {repos2[0]?.visibility || "--"}</li>
                        <li>Blog: {repos2[0]?.owner.blog_url || "--"}</li>
                        <li>Location: {repos2[0]?.owner.location || "--"}</li>
                        <li>Company: {repos2[0]?.owner.organizations_url.split('/')[4] || "--"}</li>
                        <li>Followers: {repos2[0]?.watchers || "--"}</li>
                        <li>Following: {repos2[0]?.watchers_count || "--"}</li>
                        <li>Repositories size: {repos2[0]?.size || "--"}</li>
                        <h2>Score: {countPlayer2}</h2>
                        <h2 style={{color: "#d0021b"}}>{winnerPlayer2}</h2>
                    </PlayerPreview>
                </div>
            </div>
            <button className='button' onClick={getWinner}>
                Get Winner
            </button>
        </div>
    )
}
export default ResultsMy

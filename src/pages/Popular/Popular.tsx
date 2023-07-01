import {FC, ReactElement, useEffect, useState} from "react";
//import {fetchPopularRepos} from "../../requests";
//import {useSearchParams} from "react-router-dom";
//import {createBrowserHistory} from "history";
import "./popular.stile.scss"
import PopularList from "./PopularList";
import Loader from "./Loader";
import Repos from "./Repos";
//import SelectLanguage from "./SelectLanguage";
import {updateLanguage} from "../../state/popular/popular.actions";
import {useDispatch,useSelector} from "react-redux";
import {getRepos} from "../../state/popular/popular.thunk";
import SelectLanguage from "./SelectLanguage";

//const languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python'];
//const history = createBrowserHistory();

const Popular:FC = ():ReactElement => {
//    const dispatch = useDispatch()
//    const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage)
//    const loading = useSelector(state => state.popularReducer.loading)
//    const repos = useSelector(state => state.popularReducer.repos)
//    const error = useSelector(state => state.popularReducer.error)

//    const [selectedLanguage, setSelectLanguage] = useState( (history.location.search.substr(1)).split('=')[1] || "All")
//    const [loading, setLoading] = useState(true)
//    const [repos, setRepos] = useState([])
//    const [error, setError] = useState(null)
//    const [searchParams, setSearchParams] = useSearchParams();
//    const [query, setQuery] = useState(searchParams.get("query"));


//    const handleSelect = (event)=>setSelectLanguage(event.currentTarget.innerText)
//    const handleSelect = (event) => dispatch(updateLanguage( event.currentTarget.innerText))


    return (
        <>
            <div className="page">
                <SelectLanguage />
                <Repos />
            </div>
        </>
    )
}
export default Popular;

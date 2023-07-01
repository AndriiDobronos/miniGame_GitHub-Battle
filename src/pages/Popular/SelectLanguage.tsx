import {getRepos} from "../../state/popular/popular.thunk";
import {useDispatch, useSelector} from "react-redux";
import {ReactElement,FC, useEffect} from "react";
import {createBrowserHistory} from "history";
import {AppDispatch, RootState} from "../../state/store";
//import {updateLanguage} from "../../state/popular/popular.slice";

const languages:string[] = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python'];
const history = createBrowserHistory();


const SelectLanguage:FC = ():ReactElement  =>{
    const dispatch = useDispatch<AppDispatch>()
//    const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage)
    const selectedLanguage = useSelector((state:RootState):string => state.popular.selectedLanguage)
//    const repos = useSelector(state => state.popular.repos)

    useEffect (() => {
        dispatch(getRepos(selectedLanguage));
        history.push(`?query=${selectedLanguage}`)
    },[])

    return (
        <ul className='languages'>
            {languages.map((language:string, index:number):ReactElement => (
                <li key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={() => dispatch(getRepos(language))}
//                    onClick={() => dispatch(updateLanguage(language))}
                        >
                    {language}
                </li>
            ))}
        </ul>
    )
}
export default SelectLanguage
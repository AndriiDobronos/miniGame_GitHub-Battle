import './App.css';
//import ChangeProfile from "./components/ChangeProfile.jsx";
//import EditPost from "./components/EditPost";
import React from "react";
import Form from "./Form";

export default class AppCopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {posts:[]};
    }
/* *************************** for EditPost.jsx *********************************
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => this.setState({posts:[...json].map(content=> ({id:content.id}))})

            )
    }  */


    render () {
        return <div className="App">

            {/*<ChangeProfile />*/}

            {/*this.state.posts.map(content => {
                return <EditPost key={content.id} id={content.id}/>}
            )*/}

            <Form />

        </div>
    }
}



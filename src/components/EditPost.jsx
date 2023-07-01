import React from "react";

export default class EditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title:''};
        this.handleChange = this.handleChange.bind(this);
        this.onSaveHandler = this.onSaveHandler.bind(this);
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then((response) => response.json())
            .then((json) => this.setState({id:{...json}.id,title:{...json}.title,userId:{...json}.userId})
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.title !== this.state.title) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: this.state.title,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => (json));
        }
    }

    showNotifications1 = () => {
        if (this.state.toggle) {
            return (<b> Операция редактирования выполнена успешно</b>);
        }
        return null
    }

    showNotifications2 = () => {
        if (!this.state.title) {
            return (<b> Операция удаления выполнена успешно</b>);
        }
        return null
    }

    editTitle = () => {
        this.setState({title:prompt("can be corrected",this.state.title)});
        this.setState({toggle:true})
    }

    deletePost = () => {
        if (prompt("Are you sure you want to delete the post ?") !== null) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, {
                method: 'DELETE',
            });
            this.setState({title:''})
        }
    }

    onEditHandler = () => {

    }

    onSaveHandler() {
        let title = document.getElementById("editText").textContent;
        this.setState({title: title,toggle:true});
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    handleBlur = () => {
        this.setState({toggle:true})
    }

    render() {
        return <>
        <h3>{this.state.id}.post from user {this.state.userId} : Title:</h3>
            <div className="first-variant">
                <p>The first variant of editing with "modal window":</p>
                    <b>{this.state.title} </b>
                <button onClick={this.editTitle} >Edit title</button>
            </div>

            <div
                contentEditable="true"
                suppressContentEditableWarning={true}
                className="second-variant"
                onClick={this.onEditHandler}
                onBlur={ this.onSaveHandler}
                >
                <p>The second variant of editing with attribute "contentEditable":</p>
                <b  id={"editText"}>{this.state.title}</b>
            </div>

            <div className="third-variant" >
                <p>The third variant of editing with "input":</p>
                <input type="text"
                       size={70}
                       value={this.state.title}
                       onChange={this.handleChange}
                       onBlur={this.handleBlur}
                />
            </div>

            <button onClick={this.deletePost} >Delete post</button>

            <p id={"notification1"} style={{color:"blue"}} >
                {this.showNotifications1()}
            </p>

            <p id={"notification2"} style={{color:"blue"}} >
                {this.showNotifications2()}
            </p>
        </>
    }
}

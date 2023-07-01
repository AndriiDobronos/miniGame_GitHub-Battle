import React from "react";
import "./changeProfile.style.scss"

export default class ChangeProfile  extends React.Component {
    constructor(props) {
        super(props)
//        this.state = {name: 'Stepan', age: 25, visibility: false,otherName:'Mykola',otherAge:30, on:false};
        this.state = Object.assign({},{name: "Stepan", age: 25, visibility: false,otherName:'Mykola',otherAge:30,
            firstName:'Stepan', firstAge: 25,on:false})

        this.handleClick = this.handleClick.bind(this);
    }

    changeProp = () => {
        if (this.state.name === 'Stepan') {
            this.setState(state =>({name: 'Mykola',age: 30}))
        } else {
            this.setState( {name: 'Stepan',age: 25})
        }
    }
    changeVisibility = () => {
        this.setState(state => ({visibility: !state.visibility}))
    }
    handleClick() {
        this.setState(prevState => ({
            on: !prevState.on
        }));
    }

    render() {
        return <section>
            <button onClick={this.changeVisibility} >
                {this.state.visibility ? "To hide" : "To show" }
            </button>

            {this.state.visibility &&
            <>
            <div>
                <button onClick={this.changeProp} >Click on me</button>
                <p>Name: {this.state.name}, age: {this.state.age}</p>
            </div>

            <div>
                <button onClick={this.handleClick}>Change profile</button>
                <p>
                    Name: {this.state.on ? this.state.firstName : this.state.otherName},
                    age: {this.state.on ? this.state.firstAge : this.state.otherAge},
                </p>
            </div>
            </>}
        </section>
    }
}
import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            firstNameValid: false,
            lastName: "",
            lastNameValid: false,
            email: "",
            emailValid: false,
            password: "",
            passwordValid: false,
            submitted: false,
            formValid: false
        };
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.formValid) {
            this.setState({submitted: true});
        }
    }

    handleChangeFirstName = (event) => {
        const regExp = /^[a-zA-Z]+$/i
        if (event.target.value.length > 2 && regExp.test(event.target.value) ) {
            this.setState({firstNameValid: true});
        } else {
            this.setState({firstNameValid: false});
        }
        this.setState({firstName: event.target.value});
    }

    handleChangeLastName = (event) => {
        const regExp = /^[a-zA-Z]+$/i
        if (event.target.value.length > 2 && regExp.test(event.target.value) ) {
            this.setState({lastNameValid: true});
        } else {
            this.setState({lastNameValid: false});
        }
        this.setState({lastName: event.target.value});
    }

    handleChangeEmail = (event) => {
        const regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (regExp.test(event.target.value)) {
            this.setState({emailValid: true});
        } else {
            this.setState({emailValid: false})
        }
        this.setState({email: event.target.value});
    }

    handleChangePassword = (event) => {
        const regExp = /^(?=\S{6,10}$)(?=.*?[A-Z])(?=.*?[0-9])/
        if (regExp.test(event.target.value)) {
            this.setState({passwordValid: true});
        } else {
            this.setState({passwordValid: false})
        }
        this.setState({password: event.target.value});
    }

    handleClick = (event) => {
        if (!this.state.firstNameValid || !this.state.lastNameValid || !this.state.emailValid || !this.state.passwordValid) {
            event.preventDefault()
        }
        this.setState({formValid: true})
    }

    render() {
        return (
            <>
                {this.state.submitted && this.state.formValid ?
                    <div className={"success-message"}>
                        Success! Thank you for registration
                    </div> : null}

                <form onSubmit={this.handleSubmit}
                    method={"post"}
                    style={{display: this.state.submitted ? "none" : ""}}
                >

                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChangeFirstName}
                        placeholder="First Name"
                    /><br/>
                    {!this.state.firstNameValid ? <span>Please enter a First name</span> : null} <br/>

                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChangeLastName}
                        placeholder="Last Name"
                    /><br/>
                    {!this.state.lastNameValid ? <span>Please enter a Last name</span> : null} <br/>

                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                        placeholder="email"
                    /><br/>
                    {!this.state.emailValid ? <span>Please enter email</span> : null} <br/>

                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                        placeholder="password"
                    /><br/>
                    {!this.state.passwordValid ? <span>Please enter a password</span> : null} <br/>

                    <button
                        type="submit"
                        onClick={this.handleClick}
                    >
                        Send
                    </button>
                </form>
            </>
        )
    }
}
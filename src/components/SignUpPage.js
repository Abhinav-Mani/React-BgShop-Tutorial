import React from "react"
import SignUpForm from "./SignUpForm"
import api from "../api"
import PropTypes from "prop-types"

class SignUpPage extends React.Component{
    state={
    }
    submit = data => 
    api.users.create(data).then(()=> {this.props.history.push("/login")
                                    this.props.setMessage("SuceessFully Signed Up")});
    render(){
        return(
            <div className="ui segment">
                <SignUpForm submit={this.submit} setMessage={this.props.setMessage} />
            </div>
        )
    }
}
SignUpPage.propTypes={
    setMessage:PropTypes.func.isRequired
}

export default SignUpPage
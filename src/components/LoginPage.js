import React from "react"
import LoginForm from "./SiginForm"
import api from "../api"
import PropTypes from "prop-types"

class LoginPage extends React.Component{
    submit= data => api.users.login(data).then(token =>{ this.props.login(token)
                                                this.props.history.push("/games")})
    render(){
        return(

            <div className="ui segment">
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}

LoginPage.propTypes={
    login: PropTypes.func.isRequired
}

export default LoginPage
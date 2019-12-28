import React from "react";
import isEmail from "validator/lib/isEmail"
import InLineMessege from "./InlineErrorMessege";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"


class SignUpForm extends React.Component{
    state={
        data:{
            email:"",
            password:"",
            passwordConfirmation:""
        },
        err : {
        },
        loading:false
    }
    EventStringChange = e=>{
        this.setState({data:{...this.state.data,[ e.target.name ] : e.target.value}})
    }
    validate = data =>{
        var err={};
        if(!isEmail(data.email)) 
            err.email="Invalid Email";
        if(!data.password||!data.passwordConfirmation)
            err.password="Cant Be Empty!!!!!";
        else if(data.password!==data.passwordConfirmation)
            err.password="Password Missmatch!!!!!";
        return err;
    }
    Submit= e=>{
        this.setState({loading:true})
        e.preventDefault()
        console.log("Submit")
        var err=this.validate(this.state.data);
        this.setState({...this.state, err})
        if(Object.keys(err).length===0)
        {
            this.props.submit(this.state.data)
            .catch(error => this.setState({err: error.response.data.errors,loading:false}));
        }
        else
        {            
        }
        console.log(this.state)
        
    }
    render(){
        return(
            <form className={this.state.loading?"ui form loading":"ui form"} onSubmit = {this.Submit} style={{marginRight: 200,marginLeft: 200 }}  >
                <div className={!this.state.err.email?"field": "error field"}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        value={this.state.data.email}
                        onChange={this.EventStringChange}/>
                    <InLineMessege content={this.state.err.email} type="error"/>
                </div>
                <div className={!this.state.err.password?"field": "error field"}>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        value={this.state.data.password}
                        onChange={this.EventStringChange}/>
                    <InLineMessege content={this.state.err.password} type="error"/>
                </div>
                <div className={!this.state.err.password?"field": "error field"}>
                    <label htmlFor="passwordpasswordConfirmationation">Confirm-Password</label>
                    <input
                        name="passwordConfirmation"
                        id="passwordConfirmation"
                        type="password"
                        value={this.state.data.passwordConfirmation}
                        onChange={this.EventStringChange}/>
                    <InLineMessege content={this.state.err.password} type="error"/>
                </div>
                <div>
                <div className="ui fluid buttons">
                    <button type="submit" className="ui primary button"> Submit </button>
                    <div className="or"></div>
                    <Link type="submit" className="ui button" to="/games"> Cancel! </Link>
                </div>
                </div>
            </form>
        )
    }
}
SignUpForm.propTypes={
    submit:PropTypes.func.isRequired,
    setMessage:PropTypes.func.isRequired
}
export default SignUpForm
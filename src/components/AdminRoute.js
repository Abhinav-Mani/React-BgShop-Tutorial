import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route} from "react-router-dom"

const AdminRoute = ({user,render,...rest})=>
<Route {...rest} render={ props=> user.token && user.role ==="admin"?render(props):<Redirect to="/games"/>}/>


export default AdminRoute
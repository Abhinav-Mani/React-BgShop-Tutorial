import React from "react";
import PropTypes from "prop-types";

 const InLineMessege = ({content, type})=>(
 <span style={{
     color: type==="error"? "#9f3A38":"6597a7"
 }}>{content}</span>
 )

 InLineMessege.propTypes={
     content:PropTypes.string,
     type:PropTypes.oneOf(["info","error"]).isRequired
 }

 InLineMessege.defaultProps={
     content:"",
     type: "info"
 }
 export default InLineMessege 
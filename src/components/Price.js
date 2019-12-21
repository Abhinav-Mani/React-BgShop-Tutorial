import React from "react"
import PropTypes from "prop-types";

const Price =({price})=>(
    <span className="ui green ribbon label">$ &nbsp;
        {(price/100)}&nbsp;{price<200 && "!!!!"}
    </span>
)
 Price.proptype={
     price:PropTypes.number.isRequired
 }
 export default Price;
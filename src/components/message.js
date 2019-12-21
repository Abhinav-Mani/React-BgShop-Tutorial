import React from "react";
import PropTypes from "prop-types"
const Messege=({type})=>(
    <div>
        {
            type === "info" ?
            (
                <div className="ui success icon message">
                    <i className="icon info"/>
                        <div className="content">
                            <div className="header">
                                There is no Content 
                            </div>
                            <p>U should add some</p>
                        </div>
                </div>
            )
            :
            (
                <div className="ui error icon message">
                    <i className="icon upload"/>
                        <div className="content">
                            <div className="header">
                                There is no Content 
                            </div>
                            <p>U should add some</p>
                        </div>
                </div>
            )
        }

    </div>
)

Messege.propTypes={
    type: PropTypes.string.isRequired
}
Messege.defaultProps={
    type:"info"
}

export default Messege;
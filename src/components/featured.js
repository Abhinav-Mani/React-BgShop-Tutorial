import React from "react";
import PropTypes from "prop-types";

const Featured=({Featured,tog,gameid})=>(
    <span>
        {
            Featured ?
            (
                <div className="ui right yellow corner label" onClick={()=>tog(gameid)}>
                    <i className="star icon">
                    </i>
                </div>
            ):
            (
                <div className="ui right corner label" onClick={()=>tog(gameid)}>
                    <i className="star icon">
                    </i>
                </div>
            )
        }
    </span>      
    
)
Featured.propTypes={
    Featured:PropTypes.bool.isRequired
}
PropTypes.defaultProps={
    Featured:false
}

export default Featured;
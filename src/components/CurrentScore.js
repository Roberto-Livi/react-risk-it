import React from 'react'
import connect from 'react-redux'

const CurrentScore = (props) => {

    return (
        <div style={{ position: "relative", left: "200px", top: "70px" }} className="ui statistic">
            <div className="value">
                {this.state.currentScore}
            </div>
            <div className="label">
                Current Score
            </div>
        </div>
    )
}

export default CurrentScore
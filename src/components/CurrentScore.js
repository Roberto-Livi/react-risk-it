import React from 'react'
import { connect } from 'react-redux'

const CurrentScore = (props) => {

    return (
        <div style={{ position: "relative", left: "200px", top: "70px" }} className="ui statistic">
            <div className="value">
                {props.currentScore}
            </div>
            <div className="label">
                Current Score
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentScore }) => {
    return { currentScore }
}

export default connect(mapStateToProps)(CurrentScore)
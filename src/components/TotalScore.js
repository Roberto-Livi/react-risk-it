import React from 'react'
import { connect } from 'react-redux'

const TotalScore = () => {

    return (
        <div style={{ position: "relative", left: "400px", top: "30px" }} className="ui statistic">
            <div className="label">
                Bank Account
            </div>
            <div className="value">
                ${this.state.totalScore}
            </div>
        </div>
    )
}

export default TotalScore
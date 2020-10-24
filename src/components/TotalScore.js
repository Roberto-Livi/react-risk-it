import React from 'react'
import { connect } from 'react-redux'

const TotalScore = (props) => {

    return (
        <div style={{ position: "relative", left: "400px", top: "30px" }} className="ui statistic">
            <div className="label">
                Bank Account
            </div>
            <div className="value">
                ${props.totalScore}
            </div>
        </div>
    )
}

const mapStateToProps = ({ totalScore }) => {
    return { totalScore }
}

export default connect(mapStateToProps)(TotalScore)
import React from 'react'
import { connect } from 'react-redux'
import { renderGhostNumber, renderPreviousNumber } from '../actions/index'

const GhostNumber = (props) => {

        return (
            <div className="ui container" style={{
                backgroundColor: "lightblue",
                position: "absolute",
                left: "1000px",
                width: "30vw",
                top: "10px",
                border: "3px solid black",
                padding: "5px"
            }}>
                <div style={{position: "relative", left:"40px"}} className="ui statistics">
                    <div className="statistic">
                        <div className="value">
                            {props.previousNum}
                        </div>
                        <div className="label">
                            Ghost Number
                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = ({ ghostNumber, previousNum }) => {
    return { ghostNumber, previousNum }
}

export default connect(mapStateToProps, { renderPreviousNumber, renderGhostNumber })(GhostNumber)
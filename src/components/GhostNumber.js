import React from 'react'

class GhostNumber extends React.Component {

    previousGhostNumber = (num) => {
        this.setState({ previousNum: num})
    }

    render () {
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
                            {this.state.previousNum}
                        </div>
                        <div className="label">
                            Ghost Number
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GhostNumber
import React from 'react'
import Leaderboard from './Leaderboard'
import { connect } from 'react-redux'
import users from '../api/users'

class Game extends React.Component {

    state = {
        currentScore: 0,
        ghostNumber: 0,
        totalScore: 0,
        chosenAmount: 0,
        counter: 0,
        previousNum: 0
    }

    componentDidMount() {
        this.updateRandomNumber()
    }

    handleOnChange = (event) => {
        this.setState({ chosenAmount: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let { currentScore, chosenAmount, ghostNumber, totalScore, counter } = this.state
        let summedAmount = currentScore += parseInt(chosenAmount)
        let takeOut;
        if(parseInt(chosenAmount) < ghostNumber &&  summedAmount < ghostNumber) {
            this.setState({ currentScore: summedAmount })
        } else {
            takeOut = totalScore -= currentScore
            this.setState({ currentScore: 0, totalScore: takeOut, counter: counter += 1 })
            this.updateRandomNumber()
        }

        if(counter > 5){
            if(totalScore > 2200) {
                this.createUser(this.props.username, totalScore)
            }
            this.setState({ totalScore: 0, counter: 0 })
        }

    }

    onDeposit = (event) => {
        event.preventDefault()
        let { currentScore, totalScore, counter } = this.state
        let amount = (totalScore += currentScore)
        this.setState({ totalScore: amount, currentScore: 0, counter: counter += 1 })

        if(counter > 5){
            if(totalScore > 2200) {
                this.createUser(this.props.username, totalScore)
            }
            this.setState({ totalScore: 0, counter: 0 })
        }

        this.updateRandomNumber()
    }

    updateRandomNumber = () => {
        this.previousGhostNumber(this.state.ghostNumber)
        this.setState({ ghostNumber: Math.floor((Math.random() * 1000) + 1)})
    }

    previousGhostNumber = (num) => {
        this.setState({ previousNum: num})
    }

    createUser = (name, num) => {
        const newUser = {
            username: name,
            score: num
        }
        users.post('/users', newUser)
    }


    render() {
        return (
            <div>

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

                {console.log(this.state.ghostNumber)}
                <div style ={{
                    backgroundColor: "white",
                    position: "relative",
                    top: "130px",
                    left: "150px",
                    width: "80vw",
                    height: "36vw",
                    borderRadius: "15px"
                }} className="ui container">

                <h1 
                style={{padding: "10px", position: "relative", left: "370px", top: "10px"
                }}>{this.props.username}</h1>
            
                <div style={{ position: "relative", left: "200px", top: "70px" }} className="ui statistic">
                    <div className="value">
                           {this.state.currentScore}
                    </div>
                    <div className="label">
                            Current Score
                    </div>
                </div>

                <div style={{ position: "relative", left: "400px", top: "30px" }} className="ui statistic">
                    <div className="label">
                            Bank Account
                    </div>
                    <div className="value">
                            ${this.state.totalScore}
                    </div>
                </div>

            <div className="ui statistics">
            <div className="red statistic" style={{position: "absolute", left: "700px", top: "160px"}}>
                <div className="value">
                    {this.state.counter}
                </div>
                <div className="label">
                    Counter
                </div>
            </div>
            </div>

                <div style={{ position: "absolute", left: "120px", top: "250px" }} className="ui container">

                <form onSubmit={this.onSubmit}>

                <div className="ui right labeled input">
                    <label for="amount" className="ui label">$</label>
                    <input 
                        type="text"
                        value={this.state.chosenAmount}
                        onChange={(e) => this.handleOnChange(e)}
                        placeholder="Amount"
                    />
                </div>

                <button 
                style={{ backgroundColor: "lightgreen" }} type="submit" className="ui button">
                    Submit
                </button>

                <br />

                </form>

                <form onSubmit={this.onDeposit}>
                    <div style={{ position: "relative", top: "40px", left: "90px"}}>
                        <button 
                        style={{ backgroundColor: "lightblue" }} type="submit" className="ui button">
                            Deposit
                        </button>
                    </div>
                </form>

                </div>

                </div>

                <Leaderboard />
        </div>
        )
    }
}

const mapStateToProps = ({ username }) => {
    return { username }
}

export default connect(mapStateToProps)(Game)
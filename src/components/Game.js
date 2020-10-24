import React from 'react'
import Leaderboard from './Leaderboard'
import GhostNumber from './GhostNumber'
import CurrentScore from './CurrentScore'
import { connect } from 'react-redux'
import users from '../api/users'
import { renderGhostNumber, renderPreviousNumber, updateCurrentScore } from '../actions/index'


class Game extends React.Component {

    state = {
        totalScore: 0,
        chosenAmount: 0,
        counter: 0,
    }

    componentDidMount() {
        this.updateRandomNumber()
    }

    handleOnChange = (event) => {
        this.setState({ chosenAmount: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let { chosenAmount, totalScore, counter } = this.state
        let { ghostNumber, currentScore } = this.props
        let summedAmount = currentScore += parseInt(chosenAmount)
        let takeOut;
        if(parseInt(chosenAmount) < ghostNumber &&  summedAmount < ghostNumber) {
            // this.setState({ currentScore: summedAmount })
            this.props.updateCurrentScore(summedAmount)
        } else {
            takeOut = totalScore -= currentScore
            this.setState({ totalScore: takeOut, counter: counter += 1 })
            this.props.updateCurrentScore(0)
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
        let { totalScore, counter } = this.state
        let { currentScore } = this.props
        let amount = (totalScore += currentScore)
        this.setState({ totalScore: amount, counter: counter += 1 })
        this.props.updateCurrentScore(0)

        if(counter > 5){
            if(totalScore > 2200) {
                this.createUser(this.props.username, totalScore)
            }
            this.setState({ totalScore: 0, counter: 0 })
        }

        this.updateRandomNumber()
    }

    updateRandomNumber = () => {
        this.previousGhostNumber(this.props.ghostNumber)
        this.props.renderGhostNumber(Math.floor((Math.random() * 1000) + 1))
    }

    previousGhostNumber = (num) => {
        this.props.renderPreviousNumber(num)
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

           <GhostNumber />
           
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
            
            <CurrentScore />

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

const mapStateToProps = ({ username, ghostNumber, currentScore }) => {
    return { username, ghostNumber, currentScore }
}

export default connect(mapStateToProps, 
    { renderGhostNumber, renderPreviousNumber, updateCurrentScore})(Game)
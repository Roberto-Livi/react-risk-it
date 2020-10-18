import React from 'react'
import Leaderboard from './Leaderboard'

class Game extends React.Component {

    state = {
        currentScore: 0,
        randomScore: 0,
        totalScore: 0,
        chosenAmount: 0,
        counter: 0
    }

    componentDidMount() {
        this.updateRandomNumber()
    }

    handleOnChange = (event) => {
        this.setState({ chosenAmount: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let { currentScore, chosenAmount, randomScore, totalScore, counter } = this.state
        let summedAmount = currentScore += parseInt(chosenAmount)
        let takeOut;
        if(parseInt(chosenAmount) < randomScore &&  summedAmount < randomScore) {
            this.setState({ currentScore: summedAmount })
        } else {
            takeOut = totalScore -= currentScore
            this.setState({ currentScore: 0, totalScore: takeOut, counter: counter += 1 })
            this.updateRandomNumber()
        }

        if(counter > 5){
            this.props.createUser(this.props.username, totalScore)
            this.setState({ totalScore: 0, counter: 0 })
        }

    }

    onDeposit = (event) => {
        event.preventDefault()
        let { currentScore, totalScore, counter } = this.state
        let amount = (totalScore += currentScore)
        this.setState({ totalScore: amount, currentScore: 0, counter: counter += 1 })

        if(counter > 5){
            this.props.createUser(this.props.username, totalScore)
            this.setState({ totalScore: 0, counter: 0 })
        }

        this.updateRandomNumber()
    }

    updateRandomNumber = () => {
        this.setState({ randomScore: Math.floor((Math.random() * 1000) + 1)})
    }


    render() {
        return (
            <div>
                {console.log(this.state.randomScore)}
                <h1 style={{padding: "10px"}}>{this.props.username}</h1>
            
                <div style={{ position: "relative", left: "400px", top: "150px" }} className="ui statistic">
                    <div className="value">
                           {this.state.currentScore}
                    </div>
                    <div className="label">
                            Current Score
                    </div>
                </div>

                <div style={{ position: "relative", left: "600px", top: "100px" }} className="ui statistic">
                    <div className="label">
                            Bank Account
                    </div>
                    <div className="value">
                            ${this.state.totalScore}
                    </div>
                </div>

            <div className="ui statistics">
            <div className="red statistic" style={{position: "relative", left: "950px", top: "20px"}}>
                <div className="value">
                    {this.state.counter}
                </div>
                <div className="label">
                    Counter
                </div>
            </div>
            </div>

                <div style={{ position: "absolute", left: "320px", top: "320px" }} className="ui container">

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

                <Leaderboard />
        </div>
        )
    }
}

export default Game
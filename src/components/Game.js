import React from 'react'

class Game extends React.Component {

    state = {
        currentScore: 0,
        randomScore: 0,
        bankAccount: 0,
        chosenAmount: 0,
        counter: 0
    }

    componentDidMount() {
        this.setState({ randomScore: Math.floor((Math.random() * 1000) + 1)})
    }

    handleOnChange = (event) => {
        this.setState({ chosenAmount: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let { currentScore, chosenAmount, randomScore, bankAccount, counter } = this.state
        let summedAmount = currentScore += parseInt(chosenAmount)
        let takeOut;
        if(parseInt(chosenAmount) < randomScore &&  summedAmount < randomScore) {
            this.setState({ currentScore: summedAmount })
        } else {
            takeOut = bankAccount -= currentScore
            this.setState({ currentScore: 0, bankAccount: takeOut, counter: counter += 1 })
        }

    }

    onDeposit = (event) => {
        event.preventDefault()
        let { currentScore, bankAccount, counter } = this.state
        let amount = (bankAccount += currentScore)
        // let taxes = (amount * 0.3)
        // let netPay = amount - taxes
        this.setState({ bankAccount: amount, currentScore: 0, counter: counter += 1 })
    }


    render() {
        return (
            <div>

                {console.log(this.state.randomScore)}
            
                <div style={{ position: "absolute", left: "450px", top: "200px" }} className="ui statistic">
                    <div className="value">
                           {this.state.currentScore}
                    </div>
                    <div className="label">
                            Current Score
                    </div>
                </div>

                <div style={{ position: "absolute", left: "800px", top: "250px" }} className="ui statistic">
                    <div className="label">
                            Bank Account
                    </div>
                    <div className="value">
                            ${this.state.bankAccount}
                    </div>
                </div>

            <div className="ui statistics">
            <div className="red statistic" style={{position: "absolute", left: "1050px", top: "265px"}}>
                <div className="value">
                    {this.state.counter}
                </div>
                <div className="label">
                    Counter
                </div>
            </div>
            </div>

                <div style={{ position: "absolute", left: "350px", top: "330px" }} className="ui container">

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
                    <div style={{ position: "absolute", top: "70px", left: "100px"}}>
                        <button 
                        style={{ backgroundColor: "lightblue" }} type="submit" className="ui button">
                            Deposit
                        </button>
                    </div>
                </form>


                </div>
        </div>
        )
    }
}

export default Game
import React from 'react'

class Game extends React.Component {

    state = {
        currentScore: 0,
        randomScore: 0,
        totalScore: 0,
        chosenAmount: 0
    }

    componentDidMount() {
        this.setState({ randomScore: Math.floor((Math.random() * 1000) + 1)})
    }

    handleOnChange = (event) => {
        this.setState({ chosenAmount: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let { currentScore, chosenAmount, randomScore } = this.state
        let summedAmount;
        if(parseInt(chosenAmount) < randomScore &&  currentScore < randomScore) {
            summedAmount = currentScore += parseInt(chosenAmount)
            this.setState({ currentScore: summedAmount})
        } else {
            this.setState({ currentScore: 0 })
        }

    }


    render() {
        return (
            <div>
                <div className="ui container">
                {this.state.randomScore}
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

                <button style={{ backgroundColor: "lightgreen", padding: "10px" }} type="submit">Submit</button>

                </form>

        <p>{this.state.currentScore}</p>

        </div>
        </div>
        )
    }
}

export default Game
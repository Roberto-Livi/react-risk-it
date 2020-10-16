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
        console.log(this.state.chosenAmount)
    }

    onSubmit = (event) => {
        event.preventDefault()
        let { currentScore, chosenAmount, randomScore } = this.state
        if(parseInt(chosenAmount) < randomScore &&  currentScore < randomScore) {
            this.setState({ currentScore: currentScore += parseInt(chosenAmount) })
        } else {
            this.setState({ currentScore: 0 })
        }
    }

    render() {
        return (
            <div>
                {this.state.randomScore}
                <form onSubmit={this.onSubmit}>

                <input 
                    type="text"
                    value={this.state.chosenAmount}
                    onChange={(e) => this.handleOnChange(e)}
                />

                <button type="submit">Submit</button>

                </form>

        <p>{this.state.currentScore}</p>
            </div>
        )
    }
}

export default Game
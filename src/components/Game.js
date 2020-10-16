import React from 'react'

class Game extends React.Component {

    state = {
        currentScore: null,
        randomScore: 0,
        totalScore: null,
        chosenAmount: null
    }

    componentDidMount() {
        this.setState({ randomScore: Math.floor((Math.random() * 100) + 1)})
    }

    handleOnChange = (event) => {
        this.setState({ chosenAmount: event.target.value})
        console.log(this.state.chosenAmount)
    }

    onSubmit = (event) => {
        event.preventDefault()
        if(this.state.chosenAmount < this.state.randomScore) {
            
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
            </div>
        )
    }
}

export default Game
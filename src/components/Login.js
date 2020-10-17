import React from 'react'

class Login extends React.Component {

    state = {
        username: ''
    }

    handleOnChange = (event) => {
        this.setState({ username: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ username: event.target.value})
        console.log(this.state.username)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={(e) => this.handleOnChange(e)}
                    />

                    <button type="submit" className="ui button">

                    </button>
                </form>
            </div>
        )
    }
}

export default Login
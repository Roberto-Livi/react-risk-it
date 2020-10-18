import React from 'react'
import Game from './Game'
import users from '../api/users'
 

class Login extends React.Component {

    state = {
        username: '',
        loggedIn: false
    }

    handleOnChange = (event) => {
        this.setState({ username: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ loggedIn: true })
    }

    createUser = (name, s) => {
        console.log("CREATE_USER")
        const newUser = {
            username: name,
            score: s 
        }
        users.post('/users', newUser)
    }

    render() {
        return (
            <div>

                { this.state.loggedIn ? 
                <Game createUser={this.createUser} username={this.state.username}/> :
                
                <div>
                <div style={{ fontSize: "80px", 
                    color: "green", 
                    position: "absolute", 
                    left: "37vw",
                    top: "10vw"
                    }}>
                    Risk It
                </div>

                <form className="ui form" onSubmit={this.onSubmit} 
                style={{position: "relative", width: "40vw", left: "28vw", top: "20vw"}}>

                <div className="field">
                    <label>Enter Username</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={(e) => this.handleOnChange(e)}
                    />
                </div>

                    <button type="submit" className="ui button" style={{position: "relative", left: "170px"}}>
                        Submit
                    </button>
                </form>
                </div>
                }
            </div>
        )
    }
}

export default Login
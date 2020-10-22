import React from 'react'
import Game from './Game'
import { connect } from 'react-redux'
import { addUsername, logIn } from '../actions/index'
// import users from '../api/users'
import '../index.css'
 

class Login extends React.Component {

    // state = {
    //     username: '',
    //     loggedIn: false
    // }

    handleOnChange = (event) => {
        // this.setState({ username: event.target.value })
        this.props.addUsername(event.target.value)
    }

    onSubmit = (event) => {
        event.preventDefault()
        // this.setState({ loggedIn: true })
        this.props.logIn(true)
    }

    // createUser = (name, num) => {
    //     const newUser = {
    //         username: name,
    //         score: num
    //     }
    //     users.post('/users', newUser)
    // }

    render() {
        return (
            <div>

                { this.props.loggedIn ? 
                <Game /> :
                
                <div style={{backgroundColor: "white", 
                width: "65vw", 
                height: "70vh",
                position: "relative",
                top: "40px",
                borderRadius: "15px"
                }} 
                className="ui container">
                <div style={{ fontSize: "80px", 
                    color: "green",
                    position: "relative", 
                    left: "22vw",
                    top: "5vw"
                    }}>
                    Risk It
                </div>

                <form className="ui form" onSubmit={this.onSubmit} 
                style={{position: "relative", width: "40vw", left: "12vw", top: "17vw"}}>

                <div className="field">
                    <label>Enter Username</label>
                    <input 
                        type="text"
                        value={this.props.username}
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

const mapStateToProps = ({ username, loggedIn }) => {
    return { username, loggedIn }
}

export default connect(mapStateToProps, { addUsername, logIn })(Login)
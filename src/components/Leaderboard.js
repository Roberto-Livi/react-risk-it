import React from 'react'
import users from '../api/users'

class Leaderboard extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        users.get('/users')
            .then(resp => this.setState({ users: resp.data}))
    }

    renderTopTen = () => {
        return this.state.users.sort((a, b) => b.score - a.score).slice(0,10)
    }

    render() {
        return (
            <div>
                <table style={{
                        border: "3px solid black", 
                        width: "7vw", padding: "10px", 
                        backgroundColor: "mintcream",
                        position: "absolute",
                        left: "10px",
                        top: "10px"
                        }} className="ui celled table">
                    <tr>
                        <th style={{ 
                            backgroundColor: "deepskyblue",
                            padding: "10px",
                            fontSize: "20px"}} colSpan="2">Leaderboard</th>
                    </tr>

                    <tr style={{backgroundColor: "cyan"}}>
                        <th>Rank</th>
                        <th>User</th>
                        <th>Score</th>
                    </tr>

                        {this.renderTopTen().map((data, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.username}</td>
                                <td>{data.score}</td>
                            </tr>
                        )}
                    </table>
            </div>
        )
    }
}


export default Leaderboard



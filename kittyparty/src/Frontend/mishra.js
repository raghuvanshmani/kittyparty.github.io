import React, { Component } from 'react'

export default class Mishra extends Component {
    constructor(props) {
        super(props);
    }
    handel = () => {
        var a = Math.floor(100000 + Math.random() * 900000);
        console.log(a);
    }
    render() {
        return (

            <div>
                <button onClick={this.handel}>clickme</button>
            </div>

        )
    }
}

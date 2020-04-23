import React, { Component } from 'react'
import './photocss.css'

export default class Mobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileno: ''
        }
    }
    handelChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })

    }
    onSubmmit = (e) => {
        debugger;
        e.preventDefault();
        let { mobileno } = this.state;
        var otp = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem('ontime', otp);
        const url = "http://localhost:5000/post";
        let data = {
            mobileno: mobileno,
            otp: otp,
            action: 'find'
        }
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)

        }).then(res => res.json())
            .then(res2 => {
                if (res2.success) {
                    alert(res2.messages)
                    this.props.history.push('/profile1');
                }
                else {
                    this.props.history.push('/otp');
                }
            })

    }

    render() {
        let { mobileno } = this.state;
        return (
            <div class="container mobile photo">
                <div class="btn-group grp" role="group" aria-label="Basic example">
                    <a href="https://mail.google.com/" class="btn btn-warning button"><i class=" fab fa-google-plus facebook"></i></a>
                    <a href="https://www.facebook.com/" class="btn btn-primary button"><i class=" fab fa-facebook facebook"></i></a>
                    <a href="https://twitter.com/explore" class="btn btn-info button"><i class="fab fa-twitter facebook"></i></a>
                </div>


                <div class="row row1">
                    <div id="signupbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

                        <div class="panel panel-info pan">

                            <div class="panel-body" >
                                <form action="/" id="EmployeeForm" class="form-horizontal" method="post" >
                                    <div class="form-group">
                                        <div class="col-md-9">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="mobileno"
                                                placeholder="Enter Your Mobile Number"
                                                value={mobileno}
                                                onChange={(e) => { this.handelChange(e) }}
                                            />

                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-md-offset-3 col-md-9">
                                            <input
                                                type="submit"
                                                value="Sign up"
                                                class="btn btn-primary but"
                                                onClick={this.onSubmmit}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

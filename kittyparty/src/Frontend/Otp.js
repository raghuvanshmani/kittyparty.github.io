import React, { Component } from 'react'
import './photocss.css'

export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onetimepassword: ''
        }
    }
    handldeChange = (e) => {
        let { name, value } = e.target;;
        this.setState({ [name]: value });

    }
    submit = (e) => {
        debugger
        e.preventDefault();
        let { onetimepassword } = this.state;
        let matchotp = localStorage.getItem('ontime')
        if (onetimepassword == matchotp) {
            this.props.history.push('/sign')
        }
        else {
            alert('Please enter the correct otp')
        }
    }

    render() {
        let { onetimepassword } = this.state
        return (
            <div class="container mobile photo">
                <div class="row row2">
                    <div id="signupbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div class="panel panel-info pan">

                            <div class="panel-body" >
                                <form action="/" id="EmployeeForm" class="form-horizontal" method="post" >
                                    <div class="form-group">
                                        <div class="col-md-9">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="onetimepassword"
                                                value={onetimepassword}
                                                onChange={(e) => { this.handldeChange(e) }}
                                                placeholder="Enter OTP"
                                            />

                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-md-offset-3 col-md-9">
                                            <input
                                                type="submit"
                                                name="submit"
                                                value="Log in"
                                                class="btn btn-primary but"
                                                onClick={this.submit}
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

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            mobileno: '',
            dob: null


        }
    }
    handelChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })

    }
    onSubmit = (e) => {
        e.preventDefault();
        let { name, address, city, state, mobileno, dob } = this.state;
        const url = "http://localhost:5000/post";
        let data = {
            name: name,
            address: address,
            city: city,
            state: state,
            mobileno: mobileno,
            dob: dob,
            action: 'save'
        }
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)

        }).then(res => res.json())
            .then(res2 => {
                if (res2.success) {
                    alert(res2.messages);
                    this.setState({
                        name: '',
                        address: '',
                        city: '',
                        state: '',
                        mobileno: '',
                        dob: null
                    })
                }
            })
    }
    render() {
        let { name, address, city, state, mobileno, dob } = this.state;
        return (
            <div class="container reg">
                <div class="row regist">
                    <div id="signupbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div class="panel panel-info pan">
                            <div class="panel-body" >
                                <form action="/" id="EmployeeForm" class="form-horizontal" method="post" >
                                    <div class="form-group">
                                        <div class="col-md-9">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="name"
                                                placeholder="Enter Your Name"
                                                value={name}
                                                onChange={(e) => { this.handelChange(e) }}

                                            />

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-9">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="address"
                                                placeholder="Enter Your Address"
                                                value={address}
                                                onChange={(e) => { this.handelChange(e) }}

                                            />

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-9">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="city"
                                                placeholder="Enter Your City"
                                                value={city}
                                                onChange={(e) => { this.handelChange(e) }}

                                            />

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-9">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="state"
                                                placeholder="Enter Your State"
                                                value={state}
                                                onChange={(e) => { this.handelChange(e) }}

                                            />

                                        </div>
                                    </div>
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
                                        <div class="col-md-9">
                                            <input
                                                type="date"
                                                class="form-control"
                                                name="dob"
                                                value={dob}
                                                onChange={(e) => { this.handelChange(e) }}

                                            />


                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-md-offset-3 col-md-9">
                                            <input
                                                type="submit"
                                                name="submit"
                                                value="Submit"
                                                class="btn btn-primary but"
                                                onClick={this.onSubmit}
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

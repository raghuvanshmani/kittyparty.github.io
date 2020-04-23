import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handelChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(value);
    }
    render() {
        let { name } = this.state;
        return (
            <div class="container">
                <div class="row">
                    <div id="signupbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <div class="panel-title">Members Detail</div>
                            </div>
                            <div class="panel-body" >
                                <form action="/" id="EmployeeForm" class="form-horizontal" method="post" >
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Name</label>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

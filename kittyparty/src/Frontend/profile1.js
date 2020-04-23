import React, { Component } from 'react'

export default class Profile1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            < div class="container prof">
                <div class="row profilerow">
                    <div class="col-md-3 col-md-6">
                        <div class="card">
                            <div class="card-block">

                                <img src={process.env.PUBLIC_URL + '/images/raghu.jpg'} alt="raghuv" class=" card-img-top profileimg  img-circle" />
                                <h3 class="profileh3">Raghuvansh Mani</h3>
                                <h5 class="profileh5">Software Engineer</h5>
                                <div class="h-divider">
                                </div>
                                <h3 class="profilehnew3">Activity Level:85%</h3>
                                <h5 class="profileh5">In Learning new </h5>
                            </div>
                            <div class="row rowicon">
                                <div class="col-xs-3"><i class="fontaw1 fas fa-envelope"></i></div>
                                <div class="col-xs-2  v-divider"></div>
                                <div class="col-xs-2"><i class="fontaw2 fas fa-address-book"></i></div>
                                <div class="col-xs-3  v-divider"></div>
                                <div class="col-xs-2"><i class="fontaw3 fas fa-address-book"></i></div>
                            </div>
                            <div class="col-md-offset-3 col-md-9">
                                <input
                                    type="submit"
                                    value="Create Group"
                                    class="btn btn-info profilebut"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )


    }
}

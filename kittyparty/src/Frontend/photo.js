import React, { Component } from 'react';
import './photocss.css'
export default class Photo extends Component {
    constructor(props) {
        super(props)
    }
    onsubmit = (e) => {
        this.props.history.push('/mobile')

    }
    render() {
        return (
            <div class="row photo img-responsive">
                <div class="container sig">
                    <div class="row">
                        <div class="col">
                            <button
                                class="btn btn-info form-control colr "
                                onClick={this.onsubmit}
                            > <img src={process.env.PUBLIC_URL + '/images/kittyparty9.jpg'} alt="raghuv" /></button></div>
                    </div>
                </div>


            </div>

        )
    }
}

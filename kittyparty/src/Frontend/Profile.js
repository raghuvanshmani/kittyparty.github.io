import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:5000/post";
        fetch(url)
            .then(res => res.json())
            .then(res2 => {
                this.setState({
                    data: res2
                })
            })
    }
    render() {
        let { data } = this.state;
        return (
            <div class="container tablecontainer">
                <div class="groptitle">
                    <h3 class="imagh3">Motivated People</h3>

                </div>
                <table class="table table-striped  striped">
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map(e => {
                                return (
                                    <tr>
                                        <img src={process.env.PUBLIC_URL + '/images/raghu.jpg'} alt="raghuv" class=" card-img-top imgdata  img-circle" />
                                        <td className="profiledata">{e.name}</td>
                                    </tr>
                                );
                            })

                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

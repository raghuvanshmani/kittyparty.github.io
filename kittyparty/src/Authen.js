import React, { Component } from 'react';
import firebase from './firebase';

export default class Authen extends Component {
    handelclick = () => {
    
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        let number = '+917895769455';
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
            let code = prompt('enter the otp', '')
            if (code == '') return
            e.confirm(code).then(function (result) {
                console.log(result.user, 'user');
                document.querySelector('label').textContent = result.user.phoneNumber + "Nuber verified";
            }).catch(err => {
                console.log(err);
            })

        })
    }
    render() {

        return (

            <div>
                <label></label>
                <button onClick={this.handelclick}>click</button>
            </div>


        )
    }
}

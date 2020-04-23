const express = require('express');
var router = express.Router();
var client = require('twilio')('AC78992afa53b71a1c810a6f7a21e44eaf', '7b51d367a864baaea4cfcba450c726c4');
var m = require('messagebird');
var PostMessage = require('../models/Member');
let response = {};
router.get('/', (req, res) => {
    PostMessage.find({}, (err, doc) => {
        if (!err) res.send(doc);
        console.log('Error while findig the data' + err)
    });
});
router.post('/', (req, res) => {
    let { action, name, mobileno, address, city, state, dob } = req.body;
    switch (action) {
        case 'save':
            {
                var newMember = new PostMessage({
                    name: name,
                    mobileno: mobileno,
                    address: address,
                    city: city,
                    state: state,
                    dob: dob

                });
                newMember.save({}, (err, doc) => {
                    if (!err) {
                        response.success = true
                        response.messages = "All the data save into the database"
                        res.json(response);
                    }
                    else throw err;
                })
            }
            break;
        case 'find':
            PostMessage.findOne({ mobileno }, (err, data) => {
                if (err) throw err
                else {
                    if (data) {
                        response.success = true;
                        response.messages = "You are alredy exit";
                        res.json(response);

                    }
                    else {

                        let { mobile, otp } = req.body;
                        console.log(otp);
                        client.messages.create({
                            to: '+917895769455',
                            from: '+12057563640',
                            body: otp

                        }, (err, doc) => {
                            if (err)
                                console.log(err)
                            else
                                console.log(doc)
                        });
                        response.success = false;
                        res.json(response);

                    }
                }
            })
    }

});

router.post('/mani', (req, res) => {
    let { mobile, otp } = req.body;
    console.log(otp);
    client.messages.create({
        to: '+917895769455',
        from: '+12057563640',
        body: otp

    }, (err, doc) => {
        if (err)
            console.log(err)
        else
            console.log(doc)
    });

});
module.exports = router;
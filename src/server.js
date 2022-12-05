'use strict';
//Importing libraries
const {
    dialogflow,
    BasicCard,
    BrowseCarousel,
    BrowseCarouselItem,
    Button,
    Carousel,
    Image,
    LinkOutSuggestion,
    List,
    MediaObject,
    Suggestions,
    SimpleResponse,
    Table,
    Permission,
    DateTime,
    Place,
    Confirmation,
    SignIn,
} = require('actions-on-google');

console.log('starting...')


//Local hosting of server
const express = require('express')
const bodyParser = require('body-parser')

// Create a dialogflow instance
const app = dialogflow({})


/* 

****************Utilities****************

*/

function getMyAge() {
    var ageInMilliseconds = new Date() - new Date('1996-09-15');
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
 }

/*

****************Personalisation intents****************

*/


//Weight loss
app.intent('Age', conv => {



    conv.ask('As of today, Edwin is ' + getMyAge() + ' years old');


    
})


const expressApp = express().use(bodyParser.json())

const PORT = 8080;
const HOST = '0.0.0.0';

expressApp.post('/', app)

expressApp.get('/ping', function(req, res) {
    res.send('Hello World!')
    console.log(getMyAge)
});

expressApp.listen(PORT, HOST, function() {
    console.log(`App listening on ${HOST}:${PORT}`)
})
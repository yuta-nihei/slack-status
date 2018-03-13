
'use strict';
const request = require('request');

const slack_url   = "https://slack.com/api/users.profile.set"
const token = "xxx"

  
function active () {
    const emoji = ":+1::skin-tone-4:";
    const text  = "席にいます";
    
    const options = {
        url: slack_url,
        method: 'POST',
        json: true,
        form: {
            "token": token,
            "profile": JSON.stringify({
                "status_emoji": emoji,
                "status_text": text
            })
        }
    };
    
    request(options, function(error, response, body) {
        console.log(body);
    });
}

function offline () {
    const emoji = ":seat:";
    const text  = "離席中";

    const options = {
        url: slack_url,
        method: 'POST',
        json: true,
        form: {
            "token": token,
            "profile": JSON.stringify({
                "status_emoji": emoji,
                "status_text": text
            })
        }
    };

    request(options, function(error, response, body) {
        console.log(body);
    });
}

function out () {
    const emoji = ":car:";
    const text  = "外出中";
    
    const options = {
        url: slack_url,
        method: 'POST',
        json: true,
        form: {
            "token": token,
            "profile": JSON.stringify({
                "status_emoji": emoji,
                "status_text": text
            })
        }
    };
    
    request(options, function(error, response, body) {
        console.log(body);
    });
}


window.active = active;
window.offline = offline;
window.out = out;

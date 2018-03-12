'use strict';

const gulp    = require('gulp');
const request = require('request');

const token = "xxx"

//席にいる場合
gulp.task('active', function() {
    const emoji = ":+1::skin-tone-4:";
    const text  = "席にいます";
    
    const options = {
        url: 'https://slack.com/api/users.profile.set',
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
});

// 離席中の場合
gulp.task('offline', function() {
    const emoji = ":seat:";
    const text  = "離席中";
    
    const options = {
        url: 'https://slack.com/api/users.profile.set',
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
});

//　外出中の場合
gulp.task('out', function() {
    const emoji = ":car:";
    const text  = "外出中";
    
    const options = {
        url: 'https://slack.com/api/users.profile.set',
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
});



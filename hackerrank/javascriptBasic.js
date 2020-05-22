'use strict';


const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

    let res = await new Promise((resolve, reject) => findCountry(1, code, resolve))
    // console.log('RES -> ', res)
    return res
}

async function findCountry(page, code, callback) {
    const endpoint = 'https://jsonmock.hackerrank.com/api/countries'

    const req = https.get(`${endpoint}?page=${page}`, res => {
        res.on('data', data => {
            let text = []
            text.push(data)
            let json = JSON.parse(text)
            // console.log('PAGE ' + page + '-> ', json)
            let found = json.data.filter(e => e.alpha2Code === code)
            // console.log(`FOUND PAGE ${page} ->`, found)
            if (found.length > 0) {
                console.log(found[0].name)
                callback(found[0].name)
            } else {
                findCountry(page+1, code, callback)
            }
        })
        req.on('error', (e) => {
            console.error(e);
        });
        req.end();
    })

}

async function main() {

const https = require("https");

async function teamsWithMatchesByYear(year, matches, page, callback) {
    const endpoint = 'https://jsonmock.hackerrank.com/api/football_matches'

    const req = https.get(`${endpoint}?competition=UEFA%20Champions%20League&year=${year}&page=${page}`, res => {
        res.on('data', data => {
            let text = []
            text.push(data)
            let json = JSON.parse(text)
            // console.log('PAGE ' + page + '-> ', json)
            for (let match of json.data) {
                console.log('MATCHES -> ', matches)
                if (matches[match.team1] == null) {matches[match.team1] = 0 }
                matches[match.team1]++
                if (matches[match.team2] == null) {matches[match.team2] = 0 }
                matches[match.team2]++
            }

            if (json.page == json.total_pages) {
                callback(matches)
            } else {
                teamsWithMatchesByYear(year, matches, page+1, callback)
            }
        })
        req.on('error', (e) => {
            console.error(e);
        });
        req.end();
    })
}
}

// async function fun() {
//     let res = await new Promise((resolve, reject) => teamsWithMatchesByYear(2015, {}, 1, resolve))
//     console.log('RES -> ', res)
// }


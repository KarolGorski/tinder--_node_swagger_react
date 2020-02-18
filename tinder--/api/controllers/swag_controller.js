'use strict';

let model = require('../model/model.js')
const thinkagain = require('thinkagain')();

module.exports = {
    user: user,
    browse: browse,
    login: login,
    homepage: homepage
};

let r = thinkagain.r;

function user(req, res, next) {
    r.db("tinder").table("profile")
    .get(req.swagger.params.id.value)
    .run().then(
    function(result){
    res.json(result);
    }); 
}

function browse(req, res, next) {
    r.db("tinder").table("profile").run().then(
        function(result){
        res.json(result);
        }); 
}

function login(req, res, next) {
    
}

function homepage(req, res, next) {
    res.json();
}


"use strict";

const mongoose = require('mongoose');
const hapi = require('hapi');
const Promise = require('bluebird');
const teachersModel = require('./models/teachersModel')(mongoose);

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/udea', function (err) {
    if (err) {
        console.log("Error on connection", err);
    } else {
        console.log("Connected to mongodb");
    }
});

const teachInstance = new teachersModel({
    typeId: "cc",
    name: "Julian Camilo",
    idTeacher: "1234"
});

teachInstance.save(function (err, result) {
    if (err) {
        console.log("Error saving teacher to mongo", err);
    } else {
        console.log("Teacher save successfully", result);
        teachersModel.findOne({typeId: "cc"}, function (err, result) {
            if (err) {
                console.log("Error finding teacher", err);
            } else {
                console.log("Doc found", result);
                teachersModel.findOneAndUpdate({typeId: "cc"}, {email: "julian@gmail.com"}, {new: true}, function (err, result) {
                    if (err) {
                        console.log("Error updating teacher", err);
                    } else {
                        console.log("Doc updated", result);
                        teachersModel.findOneAndRemove({typeId: "cc"}, function (err, result) {
                            if (err) {
                                console.log("Error updating teacher", err);
                            } else {
                                console.log("Doc deleted", result);
                            }
                        });
                    }
                });
            }
        });
    }
});







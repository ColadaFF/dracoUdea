"use strict";

function teachersModel(mongoose) {
    const Schema = mongoose.Schema;
    const teacherSchema = new Schema({
        typeId: {
            type: String,
            required: true
        },
        idTeacher: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        linkCv: {
            type: String
        },
        phones: [
            {
                number: {
                    type: Number
                },
                typeNumber: {
                    type: String
                }
            }
        ],
        email: {
            type: String
        },
        address: {
            type: String
        }
    });
    return mongoose.model('teachers', teacherSchema);
}

module.exports = teachersModel;
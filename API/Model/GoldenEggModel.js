

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var signal = new Schema({
    name : {
        type : String
    },
    createDate : {
        type : Date,
        default : Date.now
    },
    signalType : {
        type : Boolean
        
    }
    ,
    strength : {
        type : String
    }
});

module.exports = mongoose.model('signal',signal);
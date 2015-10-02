/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * News Schema
 */

var LinkSchema = new Schema({
    chromeuserid: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    summary: {
        type: String,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    }
});
/**
 * Statics
 */

LinkSchema.statics = {
    load: function (id, cb) {
        this.findOne({ "_id": id })
            .exec(cb);
    },
    allForUser: function (id, cb) {
        this.find({ "chromeuserid": id })
            .sort('category')
            .exec(cb);
    },
    allForUserInTimeSpan: function (id, fromDate, ToDate, cb) {
        this.find({ "chromeuserid": id, created:{$gt:fromDate, $lt:ToDate} })
            .exec(cb);
    },
}

mongoose.model('Link', LinkSchema);

module.exports = LinkSchema;
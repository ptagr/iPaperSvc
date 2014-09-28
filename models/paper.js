/**
 * Created by punagrawal on 9/28/14.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var paperSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Paper', paperSchema);



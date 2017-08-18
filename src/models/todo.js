var uuid = require('node-uuid');

// Call constructor with a title as a string e.g. new TodoModel('abc'),
// or with an options object e.g. new TodoModel({ uid: '12', completed: true, title: 'abc' })
var TodoModel = function(options) {
    if (typeof options === 'string')
        options = { title: options };
    options = Object.extend({}, getDefaults(), options || {});

    this.uid = options.uid;
    this.completed = options.completed;
    this.title = options.title.trim();
};

TodoModel.prototype = {
    getDefaults: function() {
        return {
            uid: uuid.v4(),
            completed: false,
            title: ''
        };
    }
};

module.exports = TodoModel;

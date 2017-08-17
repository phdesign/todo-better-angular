var uuid = require('node-uuid');

var TodoModel = function(title) {
    this.uid = uuid.v4();
    this.completed = false;
    this.title = title.trim();
};

TodoModel.prototype = {
  setTitle: function(title) {
    this.title = title.trim();
  }
}

module.exports = TodoModel;

'use strict';

const find = require('../helpers').find;

var TodoItemDriver = function($compile) {
    this.$compile = $compile;
};

TodoItemDriver.prototype = {
    render: function(scope) {
        this.element = angular.element('\
            <todo-item \
               todo="todo" \
               on-item-title-changed="onItemTitleChanged"></todo-item>');
        this.element = this.$compile(this.element)(scope);
        scope.$digest();
    },

    isEditingEnabled: function() {
        var inputEl = find(this.element, '.edit');
        return inputEl.length > 0 && !inputEl.hasClass('ng-hide');
    },

    startEditing: function() {
        this.element.find('label').triggerHandler('dblclick');
    },

    stopEditing: function() {
        find(this.element, '.edit').triggerHandler('blur');
    },

    setTitle: function(text) {
        find(this.element, '.edit').scope().$ctrl.editedTitle = text;
    }
};

module.exports = TodoItemDriver;

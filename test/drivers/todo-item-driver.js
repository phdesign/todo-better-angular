'use strict';

var TodoItemDriver = function($compile) {
    this.$compile = $compile;
};

TodoItemDriver.prototype = {
    render: function(scope) {
        this.element = angular.element('\
            <todo-item \
               todo="todo" \
               on-item-completed="$ctrl.store.toggleCompletion" \
               on-item-removed="$ctrl.store.remove" \
               on-item-title-changed="$ctrl.store.changeTitle"></todo-item>');
        this.element = this.$compile(this.element)(scope);
        scope.$digest();
    },

    getTitle: function() {
        return this.element.find('label').text();
    }
};

export default TodoItemDriver;

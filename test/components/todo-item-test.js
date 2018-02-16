'use strict';

const sinon = require('sinon');
require('components/todo-item');

describe('todo-item component', function () {
    var scope;
    var ctrl;

    beforeEach(function() {
        angular.mock.module('todos.todo-item');
    });

    beforeEach(inject(function($rootScope, $componentController) {
        scope = $rootScope.$new();
        ctrl = $componentController('todoItem', {$scope: scope}, {
            todo: {
                uid: '102c2049-4a69-49d7-9395-24189e99a141',
                title: '  test todo ',
                completed: false
            },
            onItemTitleChanged: sinon.spy()
        });
    }));

    it('should not have an edited Todo on start', function () {
        expect(ctrl.editing).to.be.false;
    });

    it('should change Todo when saving given title has been edited', function () {
        ctrl.edit();
        ctrl.editedTitle = 'edited todo';
        ctrl.stopEditing();
        var expected = {
            uid: '102c2049-4a69-49d7-9395-24189e99a141',
            title: 'edited todo'
        };
        expect(ctrl.onItemTitleChanged).to.have.been.calledWith(expected);
    });
});

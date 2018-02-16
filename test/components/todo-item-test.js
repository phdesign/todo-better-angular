'use strict';

const sinon = require('sinon');
require('components/todo-item');
const find = require('../helpers').find;

describe('todo-item component', function () {
    var scope;
    var $compile;

    beforeEach(function() {
        angular.mock.module('todos.todo-item');
    });

    beforeEach(inject(function($rootScope, _$compile_) {
        scope = $rootScope.$new();
        scope.todo = {
            uid: '102c2049-4a69-49d7-9395-24189e99a141',
            title: '  test todo ',
            completed: false
        };
        scope.onItemTitleChanged = sinon.spy();
        $compile = _$compile_;
    }));

    it('should not have an edited Todo on start', function () {
        var element = angular.element('<todo-item todo="todo"></todo-item>');
        element = $compile(element)(scope);
        scope.$digest();

        var inputEl = find(element, '.edit');
        var isEditingEnabled = inputEl.length > 0 && !inputEl.hasClass('ng-hide');
        expect(isEditingEnabled).to.be.false;
    });

    it('should change Todo when saving given title has been edited', function () {
        var element = angular.element('<todo-item todo="todo" on-item-title-changed="onItemTitleChanged"></todo-item>');
        element = $compile(element)(scope);
        scope.$digest();

        // Start editing
        element.find('label').triggerHandler('dblclick');
        // Fake a binding update
        find(element, '.edit').scope().$ctrl.editedTitle = 'edited todo';
        // Stop editing
        find(element, '.edit').triggerHandler('blur');

        var expected = {
            uid: '102c2049-4a69-49d7-9395-24189e99a141',
            title: 'edited todo'
        };
        expect(scope.onItemTitleChanged).to.have.been.calledWith(expected);
    });
});

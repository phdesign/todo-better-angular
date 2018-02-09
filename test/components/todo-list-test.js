import { expect } from 'chai';
import TodoListDriver from '../drivers/todo-list-driver';
import 'components/todo-list';

var STORAGE_KEY = 'better-angular';

describe('todo-list component', function () {
    var component;
    var $scope;

    beforeEach(function() {
        angular.mock.module('todos.todo-list');
    });

    beforeEach(inject(function($rootScope, _$compile_) {
        $scope = $rootScope.$new();
        component = new TodoListDriver(_$compile_);
    }));

    afterEach(() => {
        localStorage.clear();
        localStorage.itemInsertionCallback = null;
    });

    it('should not display any Todos given there are no Todos saved', function () {
        component.render($scope);
        expect(component.countTodos()).to.equal(0);
    });

    it('should show all Todos completed given all saved Todos are completed', function () {
        var todos = [
            { uid: '7f3738a5-efd5-4e37-833d-d0d58cb11033', title: 'test one', completed: true },
            { uid: 'eaca9393-287d-4f0f-86c6-0d4f3077764e', title: 'test two', completed: true },
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);
        expect(component.isToggleAllChecked()).to.be.true;
    });
});

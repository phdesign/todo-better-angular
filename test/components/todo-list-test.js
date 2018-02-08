import { expect } from 'chai';
import TodoListDriver from '../drivers/todo-list-driver';
import 'components/todo-list';

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

    it.skip('should not have any Todos on start', function () {
        component.render($scope);
        expect(component.countTodos()).to.equal(0);
    });

    //it('should have all Todos completed', function () {
        //scope.$digest();
        //expect(scope.allChecked).toBeTruthy();
    //});
});

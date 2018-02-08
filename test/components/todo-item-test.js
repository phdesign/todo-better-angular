import { expect } from 'chai';
import TodoItemDriver from '../drivers/todo-item-driver';
import 'components/todo-item';

describe('todo-item component', function () {
    var component;
    var $scope;

    beforeEach(function() {
        angular.mock.module('todos.todo-item');
    });

    beforeEach(inject(function($rootScope, _$compile_) {
        $scope = $rootScope.$new();
        component = new TodoItemDriver(_$compile_);
    }));

    it('should display the trimmed item title', function () {
        $scope.todo = {
            title: '  test item '
        };
        component.render($scope);
        expect(component.getTitle()).to.equal('test item');
    });
});

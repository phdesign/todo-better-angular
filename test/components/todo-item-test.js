const sinon = require('sinon');
const TodoItemDriver = require('../drivers/todo-item-driver');
require('components/todo-item');

describe('todo-item component', function () {
    var component;
    var $scope;

    beforeEach(function() {
        angular.mock.module('todos.todo-item');
    });

    beforeEach(inject(function($rootScope, _$compile_) {
        $scope = $rootScope.$new();
        component = new TodoItemDriver(_$compile_);

        $scope.todo = {
            uid: '102c2049-4a69-49d7-9395-24189e99a141',
            title: '  test todo ',
            completed: false
        };
        $scope.onItemTitleChanged = sinon.spy();
    }));

    it('should display the trimmed Todo title', function () {
        component.render($scope);
        expect(component.getTitle()).to.equal('test todo');
    });

    it('should not have an edited Todo on start', function () {
        component.render($scope);
        expect(component.isEditingEnabled()).to.be.false;
    });

    it('should display the Todo as incomplete given its incomplete', function () {
        $scope.todo.completed = false;
        component.render($scope);
        expect(component.isCompleteTickShown()).to.be.false;
    });

    it('should display the Todo as completed given its completed', function () {
        $scope.todo.completed = true;
        component.render($scope);
        expect(component.isCompleteTickShown()).to.be.true;
    });

    it('should change Todo when saving given title has been edited', function () {
        component.render($scope);
        component.startEditing();
        component.setTitle('edited todo');
        component.stopEditing();
        var expected = {
            uid: '102c2049-4a69-49d7-9395-24189e99a141',
            title: 'edited todo'
        };
        expect($scope.onItemTitleChanged).to.have.been.calledWith(expected);
    });

    it('should not change Todo when cancelling given title has been edited', function () {
        component.render($scope);
        component.startEditing();
        component.setTitle('edited todo');
        component.cancelEditing();
        expect($scope.onItemTitleChanged).to.not.have.been.called;
    });
});

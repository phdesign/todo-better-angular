const TodoListDriver = require('../drivers/todo-list-driver');
require('components/todo-list');

var STORAGE_KEY = 'better-angular';

describe('todo-list component', function () {
    var component;
    var $scope;
    var todos;

    beforeEach(function() {
        angular.mock.module('todos.todo-list');
    });

    beforeEach(inject(function($rootScope, _$compile_) {
        $scope = $rootScope.$new();
        todos = [
            { uid: '7f3738a5-efd5-4e37-833d-d0d58cb11033', title: 'test one', completed: true },
            { uid: 'eaca9393-287d-4f0f-86c6-0d4f3077764e', title: 'test two', completed: false },
        ];
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

    it('should show toggle all as selected given all Todos are completed', function () {
        todos[0].completed = true;
        todos[1].completed = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);
        expect(component.isToggleAllChecked()).to.be.true;
    });

    it('should show toggle all as unselected given only some Todos are completed', function () {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);
        expect(component.isToggleAllChecked()).to.be.false;
    });

    it('should mark all Todos as completed when toggle all is given no Todos are completed', function () {
        todos[0].completed = false;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);

        component.clickToggleAll();

        let savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
        expect(savedTodos[0].completed).to.be.true;
        expect(savedTodos[1].completed).to.be.true;
    });

    it('should show all Todos given no filter selected', function () {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);
        expect(component.countTodos()).to.equal(2);
    });

    it('should show only active Todos given active filter selected', function () {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);
        component.changeFilter('active');
        expect(component.countTodos()).to.equal(1);
    });

    it('should show only completed Todos given completed filter selected', function () {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        component.render($scope);
        component.changeFilter('completed');
        expect(component.countTodos()).to.equal(1);
    });
});

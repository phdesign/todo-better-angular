import { expect } from 'chai';
//import 'angular-mocks';
//import * as angular from 'angular';
//var angular = require('angular/angular');
//require('angular-mocks/angular-mocks')
//require('angular-mocks');
require('components/todo-item');

describe('todo-item component', function () {
    var $scope;
    var $compile;

    beforeEach(function() {
        angular.mock.module('todos.todo-item');
    });

    beforeEach(inject(function($rootScope, _$compile_) {
        $scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    it('should do something ', function () {
        var element = angular.element('<todo-item></todo-item>');
        element = $compile(element)($scope);
        $scope.$digest();
        console.log(element[0].outerHTML);
        //expect(element.
    });
});

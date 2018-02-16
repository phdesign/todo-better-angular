'use strict';

export function find(el, selector) {
    return angular.element(el[0].querySelectorAll(selector));
}

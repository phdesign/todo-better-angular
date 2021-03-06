const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;

global.navigator = window.navigator || {};
global.Node = window.Node;
global.addEventListener = window.addEventListener;
global.MouseEvent = window.MouseEvent;
global.KeyboardEvent = window.KeyboardEvent;
global.Event = window.Event;
global.btoa = window.btoa;
global.FormData = window.FormData;
global.FileReader = window.FileReader;
global.File = window.File;

window.beforeEach = global.beforeEach;
window.afterEach = global.afterEach;
window.before = global.before;
window.after = global.after;
window.mocha = true;

require('angular/angular');
require('angular-mocks/angular-mocks');
require('mock-local-storage');

global.angular = window.angular;
global.inject = global.angular.mock.inject;
global.localStorage = window.localStorage;
global.expect = chai.expect;

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./components/', true, /\.js$/));

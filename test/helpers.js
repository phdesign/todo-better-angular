export function collapseWhitespace(text) {
    return text.replace(/\s+/g, ' ').trim();
}

export function find(el, selector) {
    return angular.element(el[0].querySelectorAll(selector));
}

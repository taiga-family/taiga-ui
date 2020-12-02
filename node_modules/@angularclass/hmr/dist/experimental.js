"use strict";
// Experimental API below
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * get input values
 *
 * Extended by: Gabriel Schuster <github.com@actra.de>
 * Now gets values of inputs (including "checked" status radios, checkboxes), textareas and selects (including multiselects)
 * Tries to identify the elements as exact as possible, falls back to numeric index when identification fails
 * WIP refactor by: PatrickJS
 */
function __getInputValues() {
    var _inputs = document.querySelectorAll('input, textarea, select');
    var inputs = Array.prototype.slice.call(_inputs);
    return inputs.map(function (input) {
        var inputTagName = input.tagName.toLowerCase();
        var inputType = input.type;
        var inputId = (input.id && typeof input.id === 'string') ? input.id : null;
        var inputName = (input.name && typeof input.name === 'string') ? input.name : null;
        var inputValue = (input.value && typeof input.value === 'string') ? input.value : null;
        var inputChildNodes = input.childNodes;
        var inputSelected = Boolean(input.selected);
        var elementStore = {
            'tag': inputTagName,
            'type': null,
            'id': inputId,
            'name': inputName,
            'value': '',
            'checked': false,
            'options': []
        };
        if ('input' === inputTagName || 'textarea' === inputTagName) {
            elementStore['type'] = inputType;
            if ('input' !== inputTagName) {
                elementStore['value'] = inputValue;
                return elementStore;
            }
            switch (inputType) {
                case 'checkbox':
                case 'radio':
                    elementStore['checked'] = inputSelected;
                    elementStore['value'] = inputValue;
                    return elementStore;
                case 'image':
                case 'button':
                case 'submit':
                case 'reset':
                default:
                    // These types don't need any config and thus need no update, they only were stored because they match "input"
                    return elementStore;
            }
        }
        else if ('select' === inputTagName) {
            var childNodes = Array.prototype.slice.call(inputChildNodes);
            var options = childNodes.map(function (option, i) {
                return { value: option['value'], selected: Boolean(option['selected']) };
            });
            elementStore['options'] = options;
            return elementStore;
        }
        return elementStore;
    });
}
exports.__getInputValues = __getInputValues;
/**
 * set input values
 *
 * Extended by: Gabriel Schuster <github.com@actra.de>
 * WIP refactor by: PatrickJS
 */
function __setInputValues($inputs) {
    var inputs = document.querySelectorAll('input, textarea');
    $inputs.forEach(function (store, i) {
        if ('input' === store.tag || 'textarea' === store.tag) {
            if ('input' === store.tag && ('checkbox' === store.type || 'radio' === store.type)) {
                var selector = 'input' + (null !== store.id ? '#' + store.id : '') + '[type="' + store.type + '"]' + (null !== store.name ? '[name="' + store.name + '"]' : '') +
                    '[value="' + store.value + '"]';
                var element = document.body.querySelector(selector);
                if (element && Boolean(store['checked'])) {
                    element['checked'] = 'checked';
                    element.dispatchEvent(new CustomEvent('input', { detail: element['checked'] }));
                }
            }
            else if ('input' === store.tagName.toLowerCase() &&
                ('image' === store.type || 'button' === store.type || 'submit' === store.type || 'reset' === store.type)) {
                // These types don't need any config and thus need no update, they only were stored because they match "input"
            }
            else {
                if (null === store.id && null === store.name) {
                    if (store.value.length &&
                        inputs[i] &&
                        inputs[i].tagName.toLowerCase() === store.tag &&
                        ('textarea' === store.tag || inputs[i].getAttribute('type') === store.type) &&
                        ('string' !== typeof inputs[i].id || !inputs[i].id.length) &&
                        ('string' !== typeof inputs[i].getAttribute('name') ||
                            !inputs[i].getAttribute('name').length)) {
                        inputs[i]['value'] = store.value;
                        inputs[i].dispatchEvent(new CustomEvent('input', { detail: inputs[i]['value'] }));
                    }
                }
                else {
                    var selector = 'input' +
                        (null !== store.id ? '#' + store.id : '') + ('input' === store.tag ? '[type="' + store.type + '"]' : '') +
                        (null !== store.name ? '[name="' + store.name + '"]' : '');
                    var element = document.body.querySelector(selector);
                    if (element && store.value.length) {
                        element['value'] = store.value;
                        element.dispatchEvent(new CustomEvent('input', { detail: element['value'] }));
                    }
                }
            }
        }
        else if ('select' === store.tag) {
            var select_1 = null;
            if (null === store.id && null === store.name) {
                if (inputs[i] && inputs[i].tagName.toLowerCase() === store.tag && ('string' !== typeof inputs[i].id || !inputs[i].id.length) &&
                    ('string' !== typeof inputs[i].getAttribute('name') || !inputs[i].getAttribute('name').length)) {
                    select_1 = inputs[i];
                }
            }
            else {
                var selector = 'select' + (null !== store.id ? '#' + store.id : '') + (null !== store.name ? '[name="' + store.name + '"]' : '');
                var element = document.body.querySelector(selector);
                if (element) {
                    select_1 = element;
                }
            }
            if (select_1) {
                store.options.forEach(function (storedOption, j) {
                    var option = select_1.querySelector('option[value="' + storedOption.value + '"]');
                    if (!option &&
                        select_1.childNodes[j] &&
                        ('string' !== typeof select_1.childNodes[j]['value'] || !select_1.childNodes[j]['value'].length)) {
                        option = select_1.childNodes[j];
                    }
                    if (option && !!storedOption.selected) {
                        option['selected'] = 'selected';
                        option.dispatchEvent(new CustomEvent('input', { detail: option['selected'] }));
                    }
                });
            }
        }
    });
}
exports.__setInputValues = __setInputValues;
function __createInputTransfer() {
    var $inputs = __getInputValues();
    return function restoreInputValues() {
        return __setInputValues($inputs);
    };
}
exports.__createInputTransfer = __createInputTransfer;
//# sourceMappingURL=experimental.js.map
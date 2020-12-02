"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Option {
    constructor(opt, description, type, defaultValue) {
        this.opt = opt;
        this.description = description;
        this.type = type;
        if (defaultValue != null) {
            this.defaultValue = defaultValue;
        }
    }
    getValue_() {
        if (typeof this.value !== 'undefined') {
            return this.value;
        }
        else {
            return this.defaultValue;
        }
    }
    getNumber() {
        let value = this.getValue_();
        if (value != null && (typeof value === 'number' || typeof value === 'string')) {
            return +value;
        }
        else {
            return null;
        }
    }
    getString() {
        let value = this.getValue_();
        if (value != null) {
            return '' + this.getValue_();
        }
        else {
            return '';
        }
    }
    getBoolean() {
        let value = this.getValue_();
        if (value != null) {
            if (typeof value === 'string') {
                return !(value === '0' || value === 'false');
            }
            else if (typeof value === 'number') {
                return value !== 0;
            }
            else {
                return value;
            }
        }
        return false;
    }
}
exports.Option = Option;
function unparseOptions(options) {
    var args = [];
    for (let name in options) {
        let value = options[name].getValue_();
        if (value !== options[name].defaultValue) {
            args.push('--' + name, '' + value);
        }
    }
    return args;
}
exports.unparseOptions = unparseOptions;
;
//# sourceMappingURL=options.js.map
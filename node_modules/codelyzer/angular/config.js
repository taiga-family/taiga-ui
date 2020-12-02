"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = { Debug: 7, Error: 1, Info: 3, None: 0 };
var CSS_FILE_EXTENSION = '.css';
var HTML_FILE_EXTENSION = '.html';
var SVG_FILE_EXTENSION = '.svg';
var BUILD_TYPE = 'prod';
var transform = function (code, fileExtensions, url) {
    var parsedCode = !url || fileExtensions.some(function (fileExtension) { return url.endsWith(fileExtension); }) ? code : '';
    return { code: parsedCode, url: url };
};
exports.Config = {
    interpolation: ['{{', '}}'],
    logLevel: BUILD_TYPE === 'dev' ? exports.LogLevel.Debug : exports.LogLevel.None,
    predefinedDirectives: [
        { selector: 'form:not([ngNoForm]):not([formGroup]), ngForm, [ngForm]', exportAs: 'ngForm' },
        { selector: '[routerLinkActive]', exportAs: 'routerLinkActive' },
        { selector: '[ngModel]:not([formControlName]):not([formControl])', exportAs: 'ngModel' },
        { selector: '[ngIf]', exportAs: 'ngIf', inputs: ['ngIf'] },
        { selector: '[ngFor][ngForOf]', exportAs: 'ngFor', inputs: ['ngForTemplate', 'ngForOf'] },
        { selector: '[ngSwitch]', exportAs: 'ngSwitch', inputs: ['ngSwitch'] },
        { selector: '[ngSwitchCase]', exportAs: 'ngSwitchCase', inputs: ['ngSwitchCase'] },
        { selector: '[ngSwitchDefault]', exportAs: 'ngSwitchDefault', inputs: ['ngSwitchDefault'] },
        { selector: 'mat-autocomplete', exportAs: 'matAutocomplete' },
        { selector: '[mat-menu-item]', exportAs: 'matMenuItem' },
        { selector: 'mat-menu', exportAs: 'matMenu' },
        { selector: 'mat-button-toggle-group:not([multiple])', exportAs: 'matButtonToggleGroup' },
        { selector: '[mat-menu-trigger-for], [matMenuTriggerFor]', exportAs: 'matMenuTrigger' },
        { selector: '[mat-tooltip], [matTooltip]', exportAs: 'matTooltip' },
        { selector: 'mat-select', exportAs: 'matSelect' },
        { selector: '[md-menu-item]', exportAs: 'mdMenuItem' },
        { selector: 'md-menu', exportAs: 'mdMenu' },
        { selector: 'md-button-toggle-group:not([multiple])', exportAs: 'mdButtonToggleGroup' },
        { selector: '[md-menu-trigger-for], [mdMenuTriggerFor]', exportAs: 'mdMenuTrigger' },
        { selector: '[md-tooltip], [mdTooltip]', exportAs: 'mdTooltip' },
        { selector: 'md-select', exportAs: 'mdSelect' }
    ],
    resolveUrl: function (url) { return url; },
    transformStyle: function (code, url) { return transform(code, [CSS_FILE_EXTENSION], url); },
    transformTemplate: function (code, url) { return transform(code, [HTML_FILE_EXTENSION, SVG_FILE_EXTENSION], url); }
};
try {
    var root = require('app-root-path');
    var newConfig = require(root.path + '/.codelyzer');
    Object.assign(exports.Config, newConfig);
}
catch (_a) { }

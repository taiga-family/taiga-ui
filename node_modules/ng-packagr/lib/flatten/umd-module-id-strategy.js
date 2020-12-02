"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strings_1 = require("../utils/strings");
exports.umdModuleIdStrategy = (moduleId, umdModuleIds = {}) => {
    let nameProvided;
    if ((nameProvided = umdModuleIds[moduleId])) {
        return nameProvided;
    }
    let regMatch;
    if ((regMatch = /^\@angular\/(.+)/.exec(moduleId))) {
        return `ng.${regMatch[1]
            .split('/')
            .map(strings_1.camelize)
            .join('.')}`;
    }
    if (moduleId === 'rxjs') {
        return 'rxjs';
    }
    if ((regMatch = /^rxjs\/(\/?.*)/.exec(moduleId))) {
        return `rxjs.${regMatch[1]}`;
    }
    if (moduleId === 'tslib') {
        return 'tslib';
    }
    return ''; // leave it up to rollup to guess the global name
};
//# sourceMappingURL=umd-module-id-strategy.js.map
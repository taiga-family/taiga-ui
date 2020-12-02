"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
exports.PROJECT_TOKEN = new injection_js_1.InjectionToken(`ng.v5.project`);
exports.provideProject = (project) => ({
    provide: exports.PROJECT_TOKEN,
    useValue: project,
});
//# sourceMappingURL=project.di.js.map
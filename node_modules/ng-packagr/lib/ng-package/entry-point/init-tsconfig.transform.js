"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const transform_1 = require("../../graph/transform");
const nodes_1 = require("../nodes");
const tsconfig_1 = require("../../ts/tsconfig");
const log_1 = require("../../utils/log");
exports.initTsConfigTransformFactory = (defaultTsConfig) => transform_1.transformFromPromise((graph) => __awaiter(void 0, void 0, void 0, function* () {
    // Initialize tsconfig for each entry point
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    tsconfig_1.initializeTsConfig(defaultTsConfig, entryPoints);
    if (defaultTsConfig.options.enableIvy) {
        const ivyMsg = '******************************************************************************\n' +
            'It is not recommended to publish Ivy libraries to NPM repositories.\n' +
            'Read more here: https://v9.angular.io/guide/ivy#maintaining-library-compatibility\n' +
            '******************************************************************************';
        log_1.msg(chalk.yellow(ivyMsg));
    }
    return graph;
}));
//# sourceMappingURL=init-tsconfig.transform.js.map
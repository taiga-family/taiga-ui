"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packagr_1 = require("../packagr");
/**
 * Command running an "one-off" build.
 *
 * @stable
 */
exports.build = opts => packagr_1.ngPackagr()
    .forProject(opts.project)
    .withOptions({ watch: opts.watch })
    .withTsConfig(opts.config)
    .build();
//# sourceMappingURL=build.command.js.map
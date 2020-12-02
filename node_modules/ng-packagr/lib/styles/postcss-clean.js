"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postcss = require("postcss");
const cleanCss = require("clean-css");
const log = require("../utils/log");
exports.default = postcss.plugin('clean', (options = {}) => {
    const cleancss = new cleanCss(options);
    return (css, result) => {
        const { warnings, styles } = cleancss.minify(css.toString());
        warnings.forEach(log.warn);
        result.root = postcss.parse(styles);
    };
});
//# sourceMappingURL=postcss-clean.js.map
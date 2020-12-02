"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const log = require("../utils/log");
const child_process_1 = require("child_process");
// CSS Tools
const autoprefixer = require("autoprefixer");
const browserslist = require("browserslist");
const nodeSassTildeImporter = require("node-sass-tilde-importer");
const postcss = require("postcss");
const postcssUrl = require("postcss-url");
const postcss_clean_1 = require("./postcss-clean");
const stylus = require("stylus");
var CssUrl;
(function (CssUrl) {
    CssUrl["inline"] = "inline";
    CssUrl["none"] = "none";
})(CssUrl = exports.CssUrl || (exports.CssUrl = {}));
/*
 * Please be aware of the few differences in behaviour https://github.com/sass/dart-sass/blob/master/README.md#behavioral-differences-from-ruby-sass
 * By default `npm install` will install sass.
 * To use node-sass you need to use:
 *   Npm:
 *     `npm install node-sass --save-dev`
 *   Yarn:
 *     `yarn add node-sass --dev`
 */
let sassComplier;
try {
    sassComplier = require('node-sass'); // Check if node-sass is explicitly included.
}
catch (_a) {
    sassComplier = require('sass');
}
class StylesheetProcessor {
    constructor(basePath, cssUrl, styleIncludePaths) {
        this.basePath = basePath;
        this.cssUrl = cssUrl;
        this.styleIncludePaths = styleIncludePaths;
        this.postCssProcessor = this.createPostCssProcessor(basePath, cssUrl);
    }
    process(filePath, content) {
        // Render pre-processor language (sass, styl, less)
        const renderedCss = this.renderPreProcessor(filePath, content);
        // Render postcss (autoprefixing and friends)
        const result = this.postCssProcessor.process(renderedCss, {
            from: filePath,
            to: filePath.replace(path.extname(filePath), '.css'),
        });
        // Log warnings from postcss
        result.warnings().forEach(msg => log.warn(msg.toString()));
        return result.css;
    }
    renderPreProcessor(filePath, content) {
        const ext = path.extname(filePath);
        log.debug(`rendering ${ext} from ${filePath}`);
        switch (ext) {
            case '.sass':
            case '.scss':
                return sassComplier
                    .renderSync({
                    file: filePath,
                    data: content,
                    indentedSyntax: '.sass' === ext,
                    importer: nodeSassTildeImporter,
                    includePaths: this.styleIncludePaths,
                })
                    .css.toString();
            case '.less':
                // this is the only way I found to make LESS sync
                let cmd = `node "${require.resolve('less/bin/lessc')}" "${filePath}" --js`;
                if (this.styleIncludePaths.length) {
                    cmd += ` --include-path="${this.styleIncludePaths.join(':')}"`;
                }
                return child_process_1.execSync(cmd).toString();
            case '.styl':
            case '.stylus':
                return (stylus(content)
                    // add paths for resolve
                    .set('paths', [this.basePath, '.', ...this.styleIncludePaths, 'node_modules'])
                    // add support for resolving plugins from node_modules
                    .set('filename', filePath)
                    // turn on url resolver in stylus, same as flag --resolve-url
                    .set('resolve url', true)
                    .define('url', stylus.resolver(undefined))
                    .render());
            case '.css':
            default:
                return content;
        }
    }
    createPostCssProcessor(basePath, cssUrl) {
        log.debug(`determine browserslist for ${basePath}`);
        const overrideBrowserslist = browserslist(undefined, { path: basePath });
        const postCssPlugins = [];
        if (cssUrl !== CssUrl.none) {
            log.debug(`postcssUrl: ${cssUrl}`);
            postCssPlugins.push(postcssUrl({ url: cssUrl }));
        }
        // this is important to be executed post running `postcssUrl`
        postCssPlugins.push(autoprefixer({ overrideBrowserslist, grid: true }), postcss_clean_1.default({
            level: {
                2: {
                    specialComments: false,
                },
            },
        }));
        return postcss(postCssPlugins);
    }
}
exports.StylesheetProcessor = StylesheetProcessor;
//# sourceMappingURL=stylesheet-processor.js.map
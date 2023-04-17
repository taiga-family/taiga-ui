import {GLOBAL_DEFS_FOR_TERSER_WITH_AOT} from '@angular/compiler-cli';
import {tuiIsObject} from '@taiga-ui/cdk';
import TerserPlugin from 'terser-webpack-plugin';
import {Configuration} from 'webpack';
import {merge} from 'webpack-merge';

const CI_MODE = process.env[`TUI_CI`] === `true`;

/**
 * We can't just import TS-file to get its content
 * (it is impossible to distinguish default export from loading of raw file's content).
 * ```
 * import textContentOrDefaultExport from './index.ts'
 * ```
 * That is why we use resourceQuery condition to mimic the functionality of the inline syntax.
 * ```
 * import textContext from './index.ts?raw';
 * import defaultExport from './index.ts';
 * ```
 * @see https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
 */
const RAW_TS_QUERY = /raw/;

/**
 * Default Angular configurations have rules to compile (uglify) ts/less-files.
 * We don't need any transformations for RAW loading of these files.
 */
const DO_NOT_MUTATE_RAW_FILE_CONTENTS = [`*.ts`, `*.less`, `*.html`];

/**
 * [Fixed bug in Node.js 18]
 * error:0308010C:digital envelope routines::unsupported
 *
 * https://github.com/webpack/webpack/issues/13572#issuecomment-923736472
 * Useful when needing to revert to a legacy algorithm
 * (OpenSSL / potentially less secure one) to temporarily
 * address any compatibility issues.
 *
 * output.hashFunction doesn't work now,
 * upgrade @angular-devkit/build-angular to v14 and use
 *
 * output: {
 *   hashFunction: `xxhash64`,
 * },
 *
 * instead of:
 */
const crypto = require(`crypto`);
const fallbackCreateHash = crypto.createHash;

crypto.createHash = (algorithm: string) =>
    fallbackCreateHash(algorithm === `md4` ? `sha256` : algorithm);

const TERSER_PLUGIN = new TerserPlugin({
    parallel: true,
    extractComments: false,
    terserOptions: {
        ecma: 2015,
        mangle: true,
        module: true,
        sourceMap: false,
        compress: {
            passes: 3,
            keep_fnames: false,
            keep_classnames: false,
            pure_funcs: [`forwardRef`],
            global_defs: GLOBAL_DEFS_FOR_TERSER_WITH_AOT,
        },
        format: {
            comments: false,
        },
    },
});

const config: Configuration = {
    resolve: {
        fallback: {
            punycode: false,
        },
    },
    module: {
        /**
         * With Webpack 5, the raw-loader is no longer needed.
         * Asset modules provide a built-in way to provide raw-loader functionality without additional dependencies.
         * @see https://webpack.js.org/guides/asset-modules/
         */
        rules: [
            {
                test: /\.(ts|html|css|less|md|svg)$/i,
                resourceQuery: RAW_TS_QUERY,
                type: `asset/source`,
            },
        ],
    },
    ...(CI_MODE
        ? {
              mode: `production`,
              plugins: [TERSER_PLUGIN],
              optimization: {minimize: true, minimizer: [TERSER_PLUGIN]},
          }
        : {}),
};

// noinspection JSUnusedGlobalSymbols
export default (ngConfigs: Configuration): Configuration => {
    const ngRules = [...(ngConfigs.module?.rules || [])].map(rule => {
        if (
            tuiIsObject(rule) &&
            DO_NOT_MUTATE_RAW_FILE_CONTENTS.some(
                pattern => rule.test instanceof RegExp && rule.test?.test(pattern),
            )
        ) {
            return {...rule, resourceQuery: {not: [RAW_TS_QUERY]}};
        }

        return rule;
    });

    return merge({...ngConfigs, module: {...ngConfigs.module, rules: ngRules}}, config);
};

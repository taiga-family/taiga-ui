import {Configuration} from 'webpack';
import {merge} from 'webpack-merge';

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
const DONT_MUTATE_RAW_FILE_CONTENTS = [`*.ts`, `*.less`, `*.html`];

const config: Configuration = {
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
};

export default (ngConfigs: Configuration): Configuration => {
    const ngRules = [...(ngConfigs.module?.rules || [])].map(rule => {
        if (
            typeof rule === `object` &&
            DONT_MUTATE_RAW_FILE_CONTENTS.some(
                pattern => rule.test instanceof RegExp && rule.test?.test(pattern),
            )
        ) {
            return {...rule, resourceQuery: {not: [RAW_TS_QUERY]}};
        }

        return rule;
    });

    return merge({...ngConfigs, module: {...ngConfigs.module, rules: ngRules}}, config);
};

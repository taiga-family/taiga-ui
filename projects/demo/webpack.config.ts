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

const config: Configuration = {
    module: {
        /**
         * With Webpack 5, the raw-loader is no longer needed.
         * Asset modules provide a built-in way to provide raw-loader functionality without additional dependencies.
         * @see https://webpack.js.org/guides/asset-modules/
         * ___
         * Less-files are already parsed as 'asset/source' (built-in angular configuration).
         * No need to duplicate them (it produces conflicts).
         */
        rules: [
            {
                test: /\.md$/i,
                type: 'asset/source',
            },
            {
                test: /\.html$/i,
                type: 'asset/source',
            },
            {
                test: /\.ts$/i,
                resourceQuery: RAW_TS_QUERY,
                type: 'asset/source',
            },
        ],
    },
};

export default (ngConfigs: Configuration): Configuration => {
    /**
     * Default Angular configurations have rules to transform (uglify) ts-files.
     * We don't need these transformations for raw loading of ts-files.
     */
    const ngRules = [...(ngConfigs.module?.rules || [])].map(rule => {
        if (
            typeof rule === 'object' &&
            rule?.test instanceof RegExp &&
            rule.test.test('*.ts')
        ) {
            return {...rule, resourceQuery: {not: [RAW_TS_QUERY]}};
        }

        return rule;
    });

    return merge({...ngConfigs, module: {...ngConfigs.module, rules: ngRules}}, config);
};

import {Plugin, TransformSourceDescription} from 'rollup';
import {createFilter} from 'rollup-pluginutils';

const SVGO = require('svgo');

export interface RollupSvgoConfig {
    readonly include?: string;

    readonly exclude?: string;

    readonly options?: any;
}

export function rollupSvgo({
    include = '**/*.svg',
    exclude,
    options,
}: RollupSvgoConfig = {}): Plugin {
    const filter = createFilter(include, exclude);
    const svgo = new SVGO(options);

    return {
        name: 'rollupSvgo',
        async transform(
            svgString: string,
            id: string,
        ): Promise<TransformSourceDescription | any> {
            if (!filter(id)) {
                return;
            }

            const optimizedSvg = await svgo.optimize(svgString); // TODO add path

            return {
                code: `export default ${JSON.stringify(optimizedSvg.data)}`,
                map: null as any, // TODO https://github.com/rollup/rollup/wiki/Plugins#conventions
            };
        },
    };
}

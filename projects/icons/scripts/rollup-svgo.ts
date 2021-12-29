import {createFilter} from '@rollup/pluginutils';
import {Plugin, TransformResult} from 'rollup';
import {optimize, OptimizedSvg, OptimizeOptions} from 'svgo';

export interface RollupSvgoConfig {
    readonly include?: string;

    readonly exclude?: string;

    readonly options?: OptimizeOptions;
}

export function rollupSvgo({
    include = '**/*.svg',
    exclude,
    options,
}: RollupSvgoConfig = {}): Plugin {
    const filter = createFilter(include, exclude);

    return {
        name: 'rollupSvgo',
        async transform(svgString: string, id: string): Promise<TransformResult> {
            const skip = !filter(id);

            if (skip) {
                console.info('\x1b[33m%s\x1b[0m', '[skip]', id);

                return;
            }

            let optimizedSvg: OptimizedSvg | null = null;

            try {
                optimizedSvg = await optimize(svgString, {path: id, ...options});

                console.info('\x1b[32m%s\x1b[0m', '[success]', id);
            } catch (err) {
                console.error(
                    '\x1b[31m%s\x1b[0m',
                    '[error]',
                    id,
                    `\n${svgString}`,
                    `\n${err}`,
                );

                process.exit(1);
            }

            return {
                code: `export default ${JSON.stringify(optimizedSvg?.data)}`,
                map: {mappings: ''},
            };
        },
    };
}

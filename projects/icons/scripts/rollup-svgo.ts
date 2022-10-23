import {createFilter} from '@rollup/pluginutils';
import {Plugin, TransformResult} from 'rollup';
import {optimize, OptimizedError, OptimizedSvg, OptimizeOptions} from 'svgo';

type SvgoResult = OptimizedSvg | OptimizedError;

export interface TuiRollupSvgoConfig {
    readonly include?: string;

    readonly exclude?: string;

    readonly options?: OptimizeOptions;
}

export function rollupSvgo({
    include = `**/*.svg`,
    exclude,
    options,
}: TuiRollupSvgoConfig = {}): Plugin {
    const filter = createFilter(include, exclude);

    return {
        name: `rollupSvgo`,
        transform(svgString: string, path: string): TransformResult {
            const skip = !filter(path);

            if (skip) {
                console.info(`\x1B[33m%s\x1B[0m`, `[skip]`, path);

                return;
            }

            let data: unknown;
            let errorMessage: string | undefined;

            try {
                const result: SvgoResult = optimize(svgString, {path, ...options});

                data = (result as OptimizedSvg)?.data || {};
                errorMessage = result.error;
            } catch (err: unknown) {
                errorMessage = (err as Error)?.message;
            }

            if (errorMessage) {
                console.error(
                    `\x1B[31m%s\x1B[0m`,
                    `[error]`,
                    path,
                    `\n${svgString}`,
                    `\n${errorMessage}`,
                );
                process.exit(1);
            }

            console.info(`\x1B[32m%s\x1B[0m`, `[success]`, path);

            return {
                code: `export default ${JSON.stringify(data)}`,
                map: {mappings: ``},
            };
        },
    };
}

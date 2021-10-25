import {asyncExec} from '../shared/async-exec';
import {asyncExecMany} from '../shared/async-exec-many';
import {DEFAULT_NX_MAX_PARALLEL} from '../shared/default-nx-max-parallel';

(async function main(): Promise<void> {
    const MAX_PARALLEL = process.env.NX_MAX_PARALLEL ?? DEFAULT_NX_MAX_PARALLEL;

    try {
        const apps: string = await asyncExec('nx affected:apps --plain', {output: false});

        await asyncExecMany(
            `npx nx affected \
                    --target=prebuild \
                    --parallel \
                    --maxParallel=${MAX_PARALLEL} \
                    --exclude=${apps}`,
            `npx nx affected \
                    --target=build \
                    --parallel \
                    --maxParallel=${MAX_PARALLEL} \
                    --exclude=${apps} \
                    --configuration=production`,
            `npx nx affected \
                    --target=postbuild \
                    --parallel \
                    --maxParallel=${MAX_PARALLEL} \
                    --exclude=${apps}`,
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

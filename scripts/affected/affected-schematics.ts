import {asyncExec} from '../shared/async-exec';
import {DEFAULT_NX_MAX_PARALLEL} from '../shared/default-nx-max-parallel';

(async function main(): Promise<void> {
    const MAX_PARALLEL = process.env.NX_MAX_PARALLEL ?? DEFAULT_NX_MAX_PARALLEL;
    const apps: string = await asyncExec('nx affected:apps --plain', {output: false});

    try {
        await asyncExec(
            `npx nx affected --target=schematics --parallel --maxParallel=${MAX_PARALLEL} --exclude=${apps}`,
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

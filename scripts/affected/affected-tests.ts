import {asyncExec} from '../shared/async-exec';
import {DEFAULT_NX_MAX_PARALLEL} from '../shared/default-nx-max-parallel';

(async function main(): Promise<void> {
    const MAX_PARALLEL = process.env.NX_MAX_PARALLEL ?? DEFAULT_NX_MAX_PARALLEL;

    try {
        await asyncExec(
            `npx nx affected \
                    --target=test \
                    --parallel \
                    --maxParallel=${MAX_PARALLEL} \
                    --browsers=ChromeHeadless \
                    --code-coverage=true
        `,
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

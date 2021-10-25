import {asyncExecMany} from '../shared/async-exec-many';
import {DEFAULT_NX_MAX_PARALLEL} from '../shared/default-nx-max-parallel';
import {getLibsList} from '../shared/get-libs-list';

(async function main(): Promise<void> {
    const MAX_PARALLEL = process.env.NX_MAX_PARALLEL ?? DEFAULT_NX_MAX_PARALLEL;

    /**
     * @note(splincode):
     * Why we don't use `nx affected:libs --plain` instead?
     * Because when we checkout to the main branch and
     * run `nx affected:libs` and `nx affected:apps` they are return empty list.
     * However, we still need to build our library as artifacts.
     */
    const ALL_LIBS = getLibsList();

    try {
        await asyncExecMany(
            `npx nx run-many \
                --target=prebuild \
                --projects=${ALL_LIBS} \
                --parallel \
                --maxParallel=${MAX_PARALLEL}`,
            `npx nx run-many \
                --target=build \
                --projects=${ALL_LIBS} \
                --parallel \
                --maxParallel=${MAX_PARALLEL}`,
            `npx nx run-many \
                --target=postbuild \
                --projects=${ALL_LIBS} \
                --parallel \
                --maxParallel=${MAX_PARALLEL}`,
            `npm run task scripts/validators/check-dist.ts`,
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

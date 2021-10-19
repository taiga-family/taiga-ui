import {asyncExecMany} from '../shared/async-exec-many';

(async function main(): Promise<void> {
    try {
        await asyncExecMany(`nx build taiga-schematics`, `nx postbuild taiga-schematics`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

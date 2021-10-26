import {asyncExecMany} from '../shared/async-exec-many';

(async function main(): Promise<void> {
    try {
        await asyncExecMany(`nx prebuild icons`, `nx build icons`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

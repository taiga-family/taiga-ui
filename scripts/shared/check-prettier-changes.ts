import {execute} from './execute';

export function checkPrettierChanges(pattern = `**/*.{json,md}`): void {
    execute(`prettier '${pattern}' --write`);
    execute(`git add .`, {stdio: `inherit`});
}

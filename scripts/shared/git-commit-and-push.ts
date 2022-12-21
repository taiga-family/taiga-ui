import {execute} from './execute';

export function gitCommitAndPush(newVersion: string): void {
    execute(`git add .`);
    execute(`git commit -m 'chore(changelog): fix incorrect generated logs' --no-verify`);
    execute(`git push --set-upstream origin release/${newVersion}`);
    execute(`git push --tags`);
}

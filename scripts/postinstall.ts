import {execSync} from 'child_process';

(function main(): void {
    execSync(
        `
        husky install || echo 'skip error'
        ngcc --async || echo 'skip error'
        ts-node scripts/nx/decorate-angular-cli || echo 'skip error'
    `,
        {stdio: `inherit`},
    );
})();

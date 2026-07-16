import {execFileSync} from 'node:child_process';
import {mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';

describe('@taiga-ui/cdk exposes the schematics entry point via "exports"', () => {
    let root = '';

    beforeAll(() => {
        root = mkdtempSync(join(tmpdir(), 'tui-cdk-exports-'));

        const manifest = readFileSync(
            join(__dirname, '..', '..', 'package.json'),
            'utf8',
        );

        const packageDir = join(root, 'node_modules', '@taiga-ui', 'cdk');

        mkdirSync(join(packageDir, 'schematics'), {recursive: true});
        writeFileSync(join(packageDir, 'package.json'), manifest);
        writeFileSync(join(packageDir, 'schematics', 'index.js'), '');
    });

    afterAll(() => {
        if (root) {
            rmSync(root, {recursive: true, force: true});
        }
    });

    it('resolves the bare "@taiga-ui/cdk/schematics" subpath', () => {
        expect(() =>
            execFileSync(
                process.execPath,
                ['-e', 'require.resolve("@taiga-ui/cdk/schematics")'],
                {cwd: root, stdio: 'pipe'},
            ),
        ).not.toThrow();
    });
});

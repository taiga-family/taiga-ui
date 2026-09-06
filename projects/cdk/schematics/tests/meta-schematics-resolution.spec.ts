import {NodeModulesEngineHost} from '@angular-devkit/schematics/tools';
import {mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';

// When npm nests @taiga-ui/cdk (mismatched @angular/cdk peer), the meta `schematics`
// field must still resolve: a bare specifier does, a relative sibling path doesn't.
describe('taiga-ui meta package resolves its schematics collection when @taiga-ui/cdk is nested', () => {
    const metaManifest = readFileSync(
        join(__dirname, '..', '..', '..', 'taiga-schematics', 'package.json'),
        'utf8',
    );
    const cdkManifest = readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8');
    const collection = readFileSync(join(__dirname, '..', 'collection.json'), 'utf8');

    let root = '';

    beforeEach(() => {
        root = mkdtempSync(join(tmpdir(), 'tui-meta-schematics-'));

        const metaDir = join(root, 'node_modules', 'taiga-ui');

        mkdirSync(metaDir, {recursive: true});
        writeFileSync(join(metaDir, 'package.json'), metaManifest);

        // @taiga-ui/cdk NESTED under the meta package — the layout that broke ng add.
        const cdkDir = join(metaDir, 'node_modules', '@taiga-ui', 'cdk');

        mkdirSync(join(cdkDir, 'schematics'), {recursive: true});
        writeFileSync(join(cdkDir, 'package.json'), cdkManifest);
        writeFileSync(join(cdkDir, 'schematics', 'collection.json'), collection);
    });

    afterEach(() => {
        if (root) {
            rmSync(root, {recursive: true, force: true});
        }
    });

    it('declares a layout-independent (non-relative) schematics specifier', () => {
        const {schematics} = JSON.parse(metaManifest);

        expect(schematics.startsWith('.')).toBe(false);
    });

    it('resolves the collection with @taiga-ui/cdk not hoisted', () => {
        const host = new NodeModulesEngineHost([root]);

        expect(() => host.createCollectionDescription('taiga-ui')).not.toThrow();
    });
});

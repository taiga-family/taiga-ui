import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collection = join(__dirname, '../../../migration.json');

const TSCONFIG_WITH_COMMENT = `/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
    "compileOnSave": false,
    "compilerOptions": {
        // strict mode is on by default in new workspaces
        "strict": true
    }
}
`;

describe('ng-update JSONC config files', () => {
    it('does not fail on comments in tsconfig.json', async () => {
        const host = new UnitTestTree(new HostTree());
        const runner = new SchematicTestRunner('schematics', collection);

        setActiveProject(createProject(host));

        host.create('tsconfig.json', TSCONFIG_WITH_COMMENT);
        host.create(
            'package.json',
            JSON.stringify({dependencies: {'@taiga-ui/cdk': '^4.0.0'}}),
        );
        host.create(
            'test/app/test.ts',
            `
            import {Component} from '@angular/core';

            @Component({template: ''})
            export class Test {}
        `,
        );

        await expect(
            runner.runSchematic('updateToV5', {'skip-logs': true}, host),
        ).resolves.toBeDefined();

        saveActiveProject();

        expect(host.readContent('tsconfig.json')).toContain(
            'https://angular.io/config/tsconfig',
        );
    });

    afterEach(() => resetActiveProject());
});

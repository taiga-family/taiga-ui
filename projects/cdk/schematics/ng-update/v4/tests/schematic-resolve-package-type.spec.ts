import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {createAngularJson, type TuiSchema} from '@taiga-ui/cdk/schematics';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {TUI_EDITOR_VERSION} from '../steps/migrate-editor';
import {
    TUI_DOMPURIFY_VERSION,
    TUI_EVENT_PLUGINS_VERSION,
    TUI_POLYMORPHEUS_VERSION,
} from '../steps/update-packages';

const collectionPath = join(__dirname, '../../../migration.json');

describe('ng-update proprietary', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));
    });

    it('dependencies', async () => {
        createMainFiles(
            `
{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/cdk": "${TUI_VERSION}",
        "@taiga-ui/core": "${TUI_VERSION}",
        "@taiga-ui/icons": "${TUI_VERSION}",
        "@taiga-ui/i18n": "${TUI_VERSION}",
        "@taiga-ui/addon-table": "${TUI_VERSION}",
        "@taiga-ui/proprietary-core": "${TUI_VERSION}",
        "@taiga-ui/proprietary-banking": "${TUI_VERSION}",
        "@taiga-ui/proprietary-navigation": "${TUI_VERSION}",
        "@taiga-ui/proprietary-icons": "${TUI_VERSION}",
        "@taiga-ui/proprietary-tds-icons": "${TUI_VERSION}",
        "@taiga-ui/proprietary-tds-palette": "${TUI_VERSION}",
        "@tinkoff/tui-editor": "1.52.0",
        "@tinkoff/ng-polymorpheus": "3.0.0",
        "@tinkoff/ng-dompurify": "3.0.0",
        "@tinkoff/ng-event-plugins": "3.0.0"
    }
}`,
        );

        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('package.json').trim()).toEqual(
            `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/cdk": "${TUI_VERSION}",
        "@taiga-ui/core": "${TUI_VERSION}",
        "@taiga-ui/icons": "${TUI_VERSION}",
        "@taiga-ui/dompurify": "${TUI_DOMPURIFY_VERSION}",
        "@taiga-ui/editor": "${TUI_EDITOR_VERSION}",
        "@taiga-ui/event-plugins": "${TUI_EVENT_PLUGINS_VERSION}",
        "@taiga-ui/i18n": "${TUI_VERSION}",
        "@taiga-ui/addon-table": "${TUI_VERSION}",
        "@taiga-ui/polymorpheus": "${TUI_POLYMORPHEUS_VERSION}",
        "@taiga-ui/proprietary": "${TUI_VERSION}"
    }
}
`.trim(),
        );
    });

    it('devDependencies', async () => {
        createMainFiles(
            `
{
    "devDependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/cdk": "${TUI_VERSION}",
        "@taiga-ui/core": "${TUI_VERSION}",
        "@taiga-ui/icons": "${TUI_VERSION}",
        "@taiga-ui/i18n": "${TUI_VERSION}",
        "@taiga-ui/addon-table": "${TUI_VERSION}",
        "@taiga-ui/proprietary-core": "${TUI_VERSION}",
        "@taiga-ui/proprietary-banking": "${TUI_VERSION}",
        "@taiga-ui/proprietary-navigation": "${TUI_VERSION}",
        "@taiga-ui/proprietary-icons": "${TUI_VERSION}",
        "@taiga-ui/proprietary-tds-icons": "${TUI_VERSION}",
        "@taiga-ui/proprietary-tds-palette": "${TUI_VERSION}",
        "@tinkoff/tui-editor": "1.52.0",
        "@tinkoff/ng-polymorpheus": "3.0.0",
        "@tinkoff/ng-dompurify": "3.0.0",
        "@tinkoff/ng-event-plugins": "3.0.0"
    }
}`,
        );

        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('package.json').trim()).toEqual(
            `{
    "devDependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/cdk": "${TUI_VERSION}",
        "@taiga-ui/core": "${TUI_VERSION}",
        "@taiga-ui/icons": "${TUI_VERSION}",
        "@taiga-ui/dompurify": "${TUI_DOMPURIFY_VERSION}",
        "@taiga-ui/editor": "${TUI_EDITOR_VERSION}",
        "@taiga-ui/event-plugins": "${TUI_EVENT_PLUGINS_VERSION}",
        "@taiga-ui/i18n": "${TUI_VERSION}",
        "@taiga-ui/addon-table": "${TUI_VERSION}",
        "@taiga-ui/polymorpheus": "${TUI_POLYMORPHEUS_VERSION}",
        "@taiga-ui/proprietary": "${TUI_VERSION}"
    }
}
`.trim(),
        );
    });

    it('peerDependencies', async () => {
        createMainFiles(
            `
{
    "peerDependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/cdk": "${TUI_VERSION}",
        "@taiga-ui/core": "${TUI_VERSION}",
        "@taiga-ui/icons": "${TUI_VERSION}",
        "@taiga-ui/i18n": "${TUI_VERSION}",
        "@taiga-ui/addon-table": "${TUI_VERSION}",
        "@taiga-ui/proprietary-core": "${TUI_VERSION}",
        "@taiga-ui/proprietary-banking": "${TUI_VERSION}",
        "@taiga-ui/proprietary-navigation": "${TUI_VERSION}",
        "@taiga-ui/proprietary-icons": "${TUI_VERSION}",
        "@taiga-ui/proprietary-tds-icons": "${TUI_VERSION}",
        "@taiga-ui/proprietary-tds-palette": "${TUI_VERSION}",
        "@tinkoff/tui-editor": "1.52.0",
        "@tinkoff/ng-polymorpheus": "3.0.0",
        "@tinkoff/ng-dompurify": "3.0.0",
        "@tinkoff/ng-event-plugins": "3.0.0"
    }
}`,
        );

        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('package.json').trim()).toEqual(
            `{
    "peerDependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/cdk": "${TUI_VERSION}",
        "@taiga-ui/core": "${TUI_VERSION}",
        "@taiga-ui/icons": "${TUI_VERSION}",
        "@taiga-ui/dompurify": "${TUI_DOMPURIFY_VERSION}",
        "@taiga-ui/editor": "${TUI_EDITOR_VERSION}",
        "@taiga-ui/event-plugins": "${TUI_EVENT_PLUGINS_VERSION}",
        "@taiga-ui/i18n": "${TUI_VERSION}",
        "@taiga-ui/addon-table": "${TUI_VERSION}",
        "@taiga-ui/polymorpheus": "${TUI_POLYMORPHEUS_VERSION}",
        "@taiga-ui/proprietary": "${TUI_VERSION}"
    }
}
`.trim(),
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(content: string): void {
    createSourceFile('package.json', content, {overwrite: true});
    createSourceFile('test/app/test.component.ts', '');
    createSourceFile('test/app/test.template.html', '');
    createAngularJson();
}

import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TAIGA_VERSION} from '@taiga-ui/cdk/schematics';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {makeAngularJsonWithAssets} from '../../../utils/make-angular-json-with-assets';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { TuiBackModule } from '@taiga-ui/proprietary-core';
import { TuiFeedItemModule } from '@taiga-ui/proprietary-banking';
import { TuiNavigationModule } from '@taiga-ui/proprietary-navigation';
import { TuiIllustrationsModule } from '@taiga-ui/proprietary-icons';
import { tuiIconTdsAbhFlags } from '@taiga-ui/proprietary-tds-icons';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBackModule, TuiFeedItemModule, TuiNavigationModule, TuiIllustrationsModule]
})
export class TestComponent {
    readonly icon = tuiIconTdsAbhFlags;
}`.trim();

const COMPONENT_AFTER = `
import { TuiBackComponent, TuiFeedItemComponent, TuiNavigationComponent, TuiIllustrationModePipe } from "@taiga-ui/proprietary";
import { tuiIconTdsAbhFlags } from '@taiga-ui/proprietary';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBackComponent, TuiFeedItemComponent, TuiNavigationComponent, TuiIllustrationModePipe]
})
export class TestComponent {
    readonly icon = tuiIconTdsAbhFlags;
}`.trim();

const STYLES_BEFORE = `
@import '@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '@taiga-ui/proprietary-core/styles/theme-tinkoff-2023';
@import '@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile-2023';
// ...
`.trim();

const STYLES_AFTER = `
@import '@taiga-ui/proprietary/styles/tinkoff-fonts';
@import '@taiga-ui/proprietary/styles/theme-tinkoff-2023';
@import '@taiga-ui/proprietary/styles/theme-tinkoff-mobile-2023';
// ...
`.trim();

const ANGULAR_JSON_BEFORE = makeAngularJsonWithAssets(`
                {
                    "glob": "**/*",
                    "input": "node_modules/@taiga-ui/proprietary-icons/src",
                    "output": "assets/taiga-ui/icons"
                },
                {
                    "glob": "**/*",
                    "input": "node_modules/@taiga-ui/proprietary-tds-icons/src",
                    "output": "assets/taiga-ui/icons"
                }
`);

const ANGULAR_JSON_AFTER = makeAngularJsonWithAssets(`
                {
                    "glob": "**/*",
                    "input": "@taiga-ui/proprietary/design-tokens/icons/src",
                    "output": "assets/taiga-ui/icons"
                },
                {
                    "glob": "**/*",
                    "input": "@taiga-ui/proprietary/design-tokens/icons/src",
                    "output": "assets/taiga-ui/icons"
                }
`);

const PACKAGE_JSON_BEFORE = `
{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/proprietary-core": "${TAIGA_VERSION}",
        "@taiga-ui/proprietary-banking": "${TAIGA_VERSION}",
        "@taiga-ui/proprietary-navigation": "${TAIGA_VERSION}",
        "@taiga-ui/proprietary-icons": "${TAIGA_VERSION}",
        "@taiga-ui/proprietary-tds-icons": "${TAIGA_VERSION}",
        "@taiga-ui/proprietary-tds-palette": "${TAIGA_VERSION}"
    }
}`;

const PACKAGE_JSON_AFTER = `
{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/proprietary": "3.59.0"
    }
}
`.trim();

describe('ng-update proprietary', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('migrate', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
        expect(tree.readContent('test/styles.less')).toEqual(STYLES_AFTER);
        expect(tree.readContent('angular.json')).toEqual(ANGULAR_JSON_AFTER);
        expect(tree.readContent('package.json').trim()).toEqual(PACKAGE_JSON_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createSourceFile('test/app/test.template.html', '');
    createSourceFile('test/styles.less', STYLES_BEFORE);
    createSourceFile('angular.json', ANGULAR_JSON_BEFORE);
    createSourceFile('package.json', PACKAGE_JSON_BEFORE, {overwrite: true});
}

import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TUI_VERSION} from '@taiga-ui/cdk/constants/version';
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
import {TuiIllustrationName} from '@taiga-ui/proprietary-icons';
import {TuiOperationIcon} from '@taiga-ui/proprietary-banking';
import { TuiInputNumberModule } from '@taiga-ui/kit';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBackModule, TuiFeedItemModule, TuiNavigationModule, TuiIllustrationsModule]
})
export class Test {
    @Input() illustration: TuiIllustrationName | null = null;

    readonly operationIcon: TuiOperationIcon = {
        icon: 'tuiIconTdsTransportAutoRubleMedium',
        color: '#428BF9',
        background: '#428bf91f',
    };

    readonly icon = tuiIconTdsAbhFlags;
}`.trim();

const COMPONENT_AFTER = `import { TuiInputNumberModule } from "@taiga-ui/legacy";
import { TuiBackComponent, TuiFeedItemComponent, TuiProprietaryNavigation } from "@taiga-ui/proprietary";
// TODO: (Taiga UI migration) TuiIllustrationsModule was deleted. Import TuiIconPipe and use <img [src]="icon | tuiIcon" /> instead. See https://taiga-ui.tcsbank.ru/icons
import { TuiIllustrationsModule } from '@taiga-ui/proprietary';
import { tuiIconTdsAbhFlags } from '@taiga-ui/proprietary';
import {TuiFeedItemIcon} from '@taiga-ui/proprietary';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBackComponent, TuiFeedItemComponent, TuiProprietaryNavigation, TuiIllustrationsModule]
})
export class Test {
    @Input() illustration: string | null = null;

    readonly operationIcon: TuiFeedItemIcon = {
        icon: '@tui.tds-transport-auto-ruble-medium',
        color: '#428BF9',
        background: '#428bf91f',
    };

    readonly icon = tuiIconTdsAbhFlags;
}`.trim();

const STYLES_BEFORE = `
@import '@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '@taiga-ui/proprietary-core/styles/theme-tinkoff-2023';
@import '@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile-2023';
// ...
`.trim();

const STYLES_AFTER = `
@import '@taiga-ui/proprietary/styles/tbank-fonts';
@import '@taiga-ui/proprietary/styles/tbank-theme';
@import '@taiga-ui/proprietary/styles/tbank-theme-mobile.less';
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
        "@taiga-ui/event-plugins": "^4.0.1",
        "@taiga-ui/legacy": "${TUI_VERSION}",
        "@taiga-ui/proprietary": "${TUI_VERSION}"
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
        await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );
        const tree = await runner.runSchematic(
            'migrateIconsV4',
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

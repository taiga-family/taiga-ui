import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `import { Component } from "@angular/core";
import { iconsName } from "some-path";

const iconsMap = {
  tuiIconStar: 'tuiIconStar'
}

@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {
   icons = ['tuiIconMailLarge', 'tuiIconStar', 'tuiIconArrowDown'];
   icon = iconsName.tuiIconStart;
}`;

const COMPONENT_AFTER = `import { Component } from "@angular/core";
import { iconsName } from "some-path";

const iconsMap = {
  tuiIconStar: '@tui.star'
}

@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {
   icons = ['@tui.mail', '@tui.star', '@tui.arrow-down'];
   icon = iconsName.tuiIconStart;
}`;

const TEMPLATE_BEFORE = `
<tui-avatar
    avatarUrl="tuiIconUser"
    text="alex inkin"
    [rounded]="true"
></tui-avatar>
<tui-avatar
    avatarUrl="tuiIconAlertCircle"
></tui-avatar>
<button tuiIconButton icon="tuiIconClose">Button</button>
<button tuiIconButton icon="tuiIconCloseLarge">Button</button>
`;

const TEMPLATE_AFTER = `
<tui-avatar
    avatarUrl="@tui.user"
    text="alex inkin"
    [rounded]="true"
></tui-avatar>
<tui-avatar
    avatarUrl="@tui.circle-alert"
></tui-avatar>
<button tuiIconButton icon="@tui.x">Button</button>
<button tuiIconButton icon="@tui.x">Button</button>
`;

const PROPRIETARY_TEMPLATE_BEFORE = `
<tui-avatar
    avatarUrl="tuiIconTdsLockSmall"
    text="alex inkin"
    [rounded]="true"
></tui-avatar>
<tui-avatar
    avatarUrl="tuiIconTdsTransportAutoRubleMedium"
></tui-avatar>
<button tuiIconButton icon="tuiIconTdsMoreMediumPragmatic">Button</button>
<button tuiIconButton icon="tuiIconTdsCheckMedium">Button</button>
<button tuiIconButton icon="tuiIconTdsChevronDownService">Button</button>
<button tuiIconButton icon="tuiIconTdsArmFlags">Button</button>
<button tuiIconButton icon="tuiIconTdsTBankLogoSiteheader">Button</button>
<button tuiIconButton icon="tuiIconTdsGooglePlayLogoSquare">Button</button>
<button tuiIconButton icon="tuiIconTdsTBankInverseLogo">Button</button>
`;

const PROPRIETARY_TEMPLATE_AFTER = `
<tui-avatar
    avatarUrl="@tui.fancy.small.lock"
    text="alex inkin"
    [rounded]="true"
></tui-avatar>
<tui-avatar
    avatarUrl="@tui.fancy.medium.transport-auto-ruble"
></tui-avatar>
<button tuiIconButton icon="@tui.pragmatic.medium.more">Button</button>
<button tuiIconButton icon="@tui.fancy.medium.check">Button</button>
<button tuiIconButton icon="@tui.service.chevron-down">Button</button>
<button tuiIconButton icon="@tui.flags.arm">Button</button>
<button tuiIconButton icon="@tui.logo.siteheader.t-bank">Button</button>
<button tuiIconButton icon="@tui.logo.square.google-play">Button</button>
<button tuiIconButton icon="@tui.logo.t-bank-inverse">Button</button>
`;

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate badge in template', async () => {
        const tree = await runner.runSchematic(
            'migrateIconsV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate icons in ts files', async () => {
        const tree = await runner.runSchematic(
            'migrateIconsV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    it('should migrate proprietary icons in ts files', async () => {
        createSourceFile(
            'package.json',
            '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/proprietary-icons": "~3.42.0"}}',
            {overwrite: true},
        );

        saveActiveProject();

        const tree = await runner.runSchematic(
            'migrateIconsV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/proprietary-test.template.html')).toEqual(
            PROPRIETARY_TEMPLATE_AFTER,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createSourceFile(
        'test/app/proprietary-test.template.html',
        PROPRIETARY_TEMPLATE_BEFORE,
    );

    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}

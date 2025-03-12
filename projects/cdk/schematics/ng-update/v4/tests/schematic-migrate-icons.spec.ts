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

const PROPR_COMPONENT_BEFORE = `import { Component } from "@angular/core";

const iconsMap = {
  tuiIconStar: 'tuiIconStar'
}

@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {
   icons = ['tuiIconTdsCheckMedium', 'tuiIconStar', 'tuiIconArrowDown'];
   icon = iconsName.tuiIconStart;
}`;

const PROPR_COMPONENT_AFTER = `// TODO (Taiga UI migration): invalid icons tuiIconStar, tuiIconArrowDown. Please select an icon from the proprietary pack
import { Component } from "@angular/core";

const iconsMap = {
  tuiIconStar: 'tuiIconStar'
}

@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {
   icons = ['@tui.fancy.medium.check', 'tuiIconStar', 'tuiIconArrowDown'];
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
<tui-icon [icon]="featureValue.value === 'true' ? 'tuiIconCheck' : 'tuiIconClose'"></tui-icon>
<tui-svg src="tuiIconClose" />
<tui-svg src="tuiIconAddRowLarge" />
<tui-svg src="tuiIconColumns" />
<tui-svg src="tuiIconTool" />
<tui-svg src="tuiIconCheckSquare" />
<tui-svg [src]="'tuiIconCheckTestLarge'" />
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
<tui-icon [icon]="featureValue.value === 'true' ? '@tui.check' : '@tui.x'"></tui-icon>
<tui-svg src="@tui.x" />
<tui-svg [style.border-width.rem]="0.25" src="@tui.copy-plus" />
<tui-svg src="@tui.columns-2" />
<tui-svg src="@tui.wrench" />
<tui-svg src="@tui.square-check-big" />
<tui-svg [style.border-width.rem]="0.25" [src]="'@tui.check-test'" />
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
<button tuiIconButton icon="tuiIconCancelOutline">Button</button>
<tui-svg src="tuiIconClose" />
<tui-svg src="tuiIconAddRowLarge" />
<tui-svg src="tuiIconColumns" />
<tui-svg src="tuiIconTool" />
<tui-svg src="tuiIconCheckSquare" />
<tui-svg [src]="'tuiIconCheckTestLarge'" />
`;

const PROPRIETARY_TEMPLATE_AFTER = `<!-- TODO (Taiga UI migration): invalid icons tuiIconCancelOutline, tuiIconClose, tuiIconAddRowLarge, tuiIconColumns, tuiIconTool, tuiIconCheckSquare, tuiIconCheckTestLarge. Please select an icon from the proprietary pack -->

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
<button tuiIconButton icon="tuiIconCancelOutline">Button</button>
<tui-svg src="tuiIconClose" />
<tui-svg src="tuiIconAddRowLarge" />
<tui-svg src="tuiIconColumns" />
<tui-svg src="tuiIconTool" />
<tui-svg src="tuiIconCheckSquare" />
<tui-svg [src]="'tuiIconCheckTestLarge'" />
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

    it('should migrate proprietary icons in template', async () => {
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

    it('should migrate proprietary icons in ts file', async () => {
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

        expect(tree.readContent('test/app/proprietary-test.component.ts')).toEqual(
            PROPR_COMPONENT_AFTER,
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

    createSourceFile('test/app/proprietary-test.component.ts', PROPR_COMPONENT_BEFORE);

    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}

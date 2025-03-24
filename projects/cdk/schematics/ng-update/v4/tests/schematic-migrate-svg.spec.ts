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

const COMPONENT_BEFORE = `
import { TuiSvgModule } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiSvgModule],
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiIcon } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiIcon],
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-svg class="custom" [src]="src"></tui-svg>

<tui-svg src="icon"></tui-svg>

<tui-svg [src]="'tuiIconHeartLarge'" />
<tui-svg [src]="'tuiIconTdsSubscriptionPremiumLogo'" />
<tui-svg [src]="'tuiIconTdsTInsuranceEngLogo'" />
<tui-svg [src]="'tuiIconTdsGoogleLogoSquare'" />
<tui-svg [src]="'tuiIconTdsTBankLogoSiteheader'" />
<tui-svg [src]="'tuiIconTdsGgyFlags'" />
<tui-svg [src]="'tuiIconTdsDiceSmall'" />
<tui-svg src="tuiIconTdsTinkoffBusinessShieldLogoLogoSiteheader" />
<tui-svg src="tuiIconTdsAirplaneMediumPragmatic" />
<tui-svg src="tuiIconTdsAlertCircleSmallPragmatic" />
<tui-svg src="tuiIconTdsPlwFlags" />
`;

const TODO =
    '<!-- TODO: (Taiga UI migration) For colored icons, please use <img src="\'name\' | tuiIcon" alt="icon" /> -->';

const TEMPLATE_AFTER = `
${TODO}
<tui-icon  class="custom" [icon]="src"></tui-icon>

${TODO}
<tui-icon  icon="icon"></tui-icon>

<tui-icon  [icon]="'tuiIconHeartLarge'" />
${TODO}
<tui-icon  [icon]="'tuiIconTdsSubscriptionPremiumLogo'" />
${TODO}
<tui-icon  [icon]="'tuiIconTdsTInsuranceEngLogo'" />
${TODO}
<tui-icon  [icon]="'tuiIconTdsGoogleLogoSquare'" />
${TODO}
<tui-icon  [icon]="'tuiIconTdsTBankLogoSiteheader'" />
${TODO}
<tui-icon  [icon]="'tuiIconTdsGgyFlags'" />
<tui-icon  [icon]="'tuiIconTdsDiceSmall'" />
${TODO}
<tui-icon  icon="tuiIconTdsTinkoffBusinessShieldLogoLogoSiteheader" />
<tui-icon  icon="tuiIconTdsAirplaneMediumPragmatic" />
<tui-icon  icon="tuiIconTdsAlertCircleSmallPragmatic" />
${TODO}
<tui-icon  icon="tuiIconTdsPlwFlags" />
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

    it('should migrate svg in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate svg references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createSourceFile('package.json', '{}');
}

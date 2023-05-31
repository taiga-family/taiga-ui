/* eslint-disable rxjs/no-topromise */
import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, `../../../migration.json`);

const COMPONENT_BEFORE = `
import { tuiIconEyeClosedMarker, tuiIconCrowdMarker } from '@taiga-ui/proprietary-icons';

@Component({templateUrl: './test.template.html'})
export class TestComponent {
    account = {
            icon: 'tuiIconCrowdMarker',
            color: 'white',
            background: 'var(--tui-support-12)',
        };

    icon = tuiIconEyeClosedMarker;
    icon2 = tuiIconCrowdMarker;
}`;

const COMPONENT_AFTER = `import { tuiIconTdsUsersMedium, tuiIconTdsEyeOffMedium } from "@taiga-ui/proprietary-tds-icons";

@Component({templateUrl: './test.template.html'})
export class TestComponent {
    account = {
            icon: 'tuiIconTdsUsersMedium',
            color: 'white',
            background: 'var(--tui-support-12)',
        };

    icon = tuiIconTdsEyeOffMedium;
    icon2 = tuiIconTdsUsersMedium;
}`;

const TEMPLATE_BEFORE = `
<tui-marker-icon
    new
    mode="error"
    src="tuiIconErrorMarker"
    [size]="iconSize"
></tui-marker-icon>
<custom-component [customAttr]="tuiIconErrorMarker"></custom-component>
`;

const TEMPLATE_AFTER = `
<tui-marker-icon
    new
    mode="error"
    src="tuiIconTdsCrossMedium"
    [size]="iconSize"
></tui-marker-icon>
<custom-component [customAttr]="tuiIconTdsCrossMedium"></custom-component>
`;

describe(`ng-update`, () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner(`schematics`, collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it(`should migrate icons in template`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3_30`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/test.template.html`)).toEqual(TEMPLATE_AFTER);
    });

    it(`should migrate icons in ts files`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3_30`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/test.component.ts`)).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(`test/app/test.component.ts`, COMPONENT_BEFORE);

    createSourceFile(`test/app/test.template.html`, TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        `package.json`,
        `{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/proprietary-icons": "~3.29.0"}}`,
    );
}

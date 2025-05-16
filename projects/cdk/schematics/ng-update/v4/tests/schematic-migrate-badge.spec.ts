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

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { CommonModule } from '@angular/common';
import { TuiBadgeModule } from "@taiga-ui/experimental";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBadgeModule, CommonModule]
})
export class Test {
    readonly state$ = new BehaviorSubject('granted');
}`;

const COMPONENT_AFTER = `import { TuiBadge } from "@taiga-ui/kit";

import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBadge, CommonModule]
})
export class Test {
    readonly state$ = new BehaviorSubject('granted');
}`;

const TEMPLATE_BEFORE = `
<tui-badge
    status="primary"
    [value]="value"
    [hoverable]="true"
/>
<tui-badge
    status="primary"
    [value]="value"
    [hoverable]="true"
></tui-badge>
<tui-badge
    status="success"
    value="Taiga"
>
    <tui-svg src="tuiIconHelpCircle"></tui-svg>
</tui-badge>
<tui-badge
    status="success"
>
    <tui-svg src="tuiIconHelpCircle"></tui-svg>
</tui-badge>

<ng-container [ngSwitch]="state$ | async">
    <tui-badge *ngSwitchCase="'granted'" status="success" value="Permission is granted" />
    <tui-badge *ngSwitchCase="'denied'" status="error" value="Permission is denied" />
</ng-container>
`;

const TEMPLATE_AFTER = `
<tui-badge
    appearance="primary"
   ${''}
    ${''}
>{{ value }}</tui-badge>
<tui-badge
    appearance="primary"
   ${''}
    ${''}
>{{ value }}</tui-badge>
<tui-badge
    appearance="success"
   ${''}
iconStart="tuiIconHelpCircle">Taiga
    ${''}
</tui-badge>
<!-- TODO: (Taiga UI migration) use "<tui-icon>" with "tuiBadge" directive for icon-only badges instead -->
<tui-badge
    appearance="success"
>
    <tui-icon  icon="tuiIconHelpCircle"></tui-icon>
</tui-badge>

<ng-container [ngSwitch]="state$ | async">
    <tui-badge *ngSwitchCase="'granted'" appearance="success" >Permission is granted</tui-badge>
    <tui-badge *ngSwitchCase="'denied'" appearance="error" >Permission is denied</tui-badge>
</ng-container>
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
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate badge references in ts files', async () => {
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

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}

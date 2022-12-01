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

import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, `../../migration.json`);

const COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {}
`;

const TEMPLATE_BEFORE = `
<div
    polymorpheus-outlet
    [content]="content"
    [context]="context"
></div>

<div
    polymorpheus-outlet
    [content]="content"
    [context]="context"
>
    <ng-template let-hapica>
        <div>{{ hapica }}</div>
    </ng-template>
</div>

<div
    *ngIf="icon"
    polymorpheus-outlet
    class="t-icon-outlet"
    [content]="icon"
>
    <ng-template let-icon>
        <tui-svg
            automation-id="tui-input-card-grouped__icon"
            class="t-card"
            [src]="icon"
        ></tui-svg>
    </ng-template>
</div>
`;

const TEMPLATE_AFTER = `
<div
    ${``}
    ${``}
    ${``}
>
<ng-container *polymorpheusOutlet="content as text; context: context">
    {{ text }}
</ng-container></div>

<div
    ${``}
    ${``}
    ${``}
>
    <ng-container *polymorpheusOutlet="content as hapica; context: context" >
        <div>{{ hapica }}</div>
    </ng-container>
</div>

<div
    *ngIf="icon"
    ${``}
    class="t-icon-outlet"
    ${``}
>
    <ng-container *polymorpheusOutlet="icon as icon" >
        <tui-svg
            automation-id="tui-input-card-grouped__icon"
            class="t-card"
            [src]="icon"
        ></tui-svg>
    </ng-container>
</div>
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

    it(`should migrate polymorpheus`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/test.template.html`)).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(`test/app/test.component.ts`, COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile(`test/app/test.template.html`, TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(`package.json`, `{"dependencies": {"@angular/core": "~13.0.0"}}`);
}

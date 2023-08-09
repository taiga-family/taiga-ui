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
import { TuiTextAreaModule, TuiTextAreaComponent } from '@taiga-ui/kit';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiTextAreaModule]
})
export class TestComponent {
    @ViewChild(TuiTextAreaComponent)
    textArea: TuiTextAreaComponent;

    @ViewChild(TuiTextAreaDirective)
    directive: TuiTextAreaDirective;

    ngOnInit() {
        console.log(document.querySelector('[automation-id="tui-text-area__wrapper"]'));
        console.log(document.querySelector('[automation-id="tui-text-area__counter"]'));
        console.log(document.querySelector('[automation-id="tui-text-area__scrollbar"]'));
    }
}`;

const COMPONENT_AFTER = `
import { TuiTextareaModule, TuiTextareaComponent } from '@taiga-ui/kit';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiTextareaModule]
})
export class TestComponent {
    @ViewChild(TuiTextareaComponent)
    textArea: TuiTextareaComponent;

    @ViewChild(TuiTextareaDirective)
    directive: TuiTextareaDirective;

    ngOnInit() {
        console.log(document.querySelector('[automation-id="tui-text-area__wrapper"]'));
        console.log(document.querySelector('[automation-id="tui-text-area__counter"]'));
        console.log(document.querySelector('[automation-id="tui-text-area__scrollbar"]'));
    }
}`;

const TEMPLATE_BEFORE = `
<tui-text-area class="tui-text-area"></tui-text-area>
<tui-text-area class="tui-text-area" />
`;

const TEMPLATE_AFTER = `
<tui-textarea  class="tui-text-area"></tui-textarea>
<tui-textarea  class="tui-text-area" />
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

    it(`should migrate textarea tag in template`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3_40`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/test.template.html`)).toEqual(TEMPLATE_AFTER);
    });

    it(`should migrate textarea references in ts files`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3_40`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/test.component.ts`)).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => resetActiveProject());
});

function createMainFiles(): void {
    createSourceFile(`test/app/test.component.ts`, COMPONENT_BEFORE);

    createSourceFile(`test/app/test.template.html`, TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        `package.json`,
        `{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/kit": "~3.36.0"}}`,
    );
}

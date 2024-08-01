import {join} from 'node:path';

import type {Tree} from '@angular-devkit/schematics';
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

const COMPONENT_BEFORE = `import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiLineHandler} from '@taiga-ui/addon-charts';
 
@Component({
    standalone: true,
    selector: 'test-axes',
    templateUrl: './test.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test {
    readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar'];
    readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];
    readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];
    readonly verticalLinesHandler: TuiLineHandler = (index, total) =>
        index === total - 1 ? 'none' : 'dashed';
}`;

const TEMPLATE_WITHOUT_NEW_ATTRIBUTE = `<tui-axes
    axisYName="Target"
    axisYSecondaryName="Sum"
    [axisXLabels]="axisXLabels"
    [axisYInset]="true"
    [axisYLabels]="axisYLabels"
    [axisYSecondaryLabels]="axisYSecondaryLabels"
    [horizontalLines]="2"
    [verticalLines]="3"
    [verticalLinesHandler]="verticalLinesHandler"
></tui-axes>`;

const TEMPLATE_WITH_NEW_ATTRIBUTE = `<tui-axes new
    axisYName="Target"
    axisYSecondaryName="Sum"
    [axisXLabels]="axisXLabels"
    [axisYInset]="true"
    [axisYLabels]="axisYLabels"
    [axisYSecondaryLabels]="axisYSecondaryLabels"
    [horizontalLines]="2"
    [verticalLines]="3"
    [verticalLinesHandler]="verticalLinesHandler"
></tui-axes>`;

const TEMPLATE_WITH_TODO = `<!-- TODO: (Taiga UI migration) labels positioning on x axes were updated. Add empty string to axisXLabels array. See https://taiga-ui.dev/charts/axes -->
<tui-axes
    axisYName="Target"
    axisYSecondaryName="Sum"
    [axisXLabels]="axisXLabels"
    [axisYInset]="true"
    [axisYLabels]="axisYLabels"
    [axisYSecondaryLabels]="axisYSecondaryLabels"
    [horizontalLines]="2"
    [verticalLines]="3"
    [verticalLinesHandler]="verticalLinesHandler"
></tui-axes>`;

describe('ng-migrate', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);
    });

    afterEach(() => {
        resetActiveProject();
    });

    it("should add TODO comment to component template if the tag does not have the 'new' attribute", async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: TEMPLATE_WITHOUT_NEW_ATTRIBUTE,
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(
            TEMPLATE_WITH_TODO,
        );
    });

    it('should remove the new attribute from the component template', async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: TEMPLATE_WITH_NEW_ATTRIBUTE,
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(
            TEMPLATE_WITHOUT_NEW_ATTRIBUTE,
        );
    });
});

function initComponent({
    host,
    component,
    template,
}: {
    host: Tree;
    component: string;
    template: string;
}): void {
    setActiveProject(createProject(host));
    createSourceFile('test/app/test.component.ts', component);

    createSourceFile('test/app/test.template.html', template);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/cdk": "~3.59.0"}}',
    );
    saveActiveProject();
}

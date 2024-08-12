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
import { TuiLinkModule, TuiNotificationModule } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiLinkModule, TuiNotificationModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiChevron } from "@taiga-ui/kit";

import { TuiNotification, TuiLink } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiLink, TuiNotification, TuiChevron]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<a
    icon="tuiIconSettings"
    tuiLink
    [iconRotated]="true"
>
    Link with icon right
</a>
<a
    icon="tuiIconSettings"
    iconAlign="left"
    tuiLink
>
    Link with icon left
</a>
<a
    [icon]="icon"
    iconAlign="left"
    tuiLink
>
    Link with icon left
</a>
`;

const TEMPLATE_AFTER = `
<a
    iconEnd="tuiIconSettings"
    tuiLink
    [tuiChevron]="true"
>
    Link with icon right
</a>
<a
    iconStart="tuiIconSettings"
    ${''}
    tuiLink
>
    Link with icon left
</a>
<a
    [iconStart]="icon"
    ${''}
    tuiLink
>
    Link with icon left
</a>
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

    it('should migrate link in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate link references in ts files', async () => {
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

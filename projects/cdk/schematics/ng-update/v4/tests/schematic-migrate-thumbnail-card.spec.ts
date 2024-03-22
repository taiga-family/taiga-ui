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
import { TuiCardModule, TuiCardComponent } from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCardModule]
})
export class TestComponent {
    @ViewChild(TuiCardComponent)
    card: TuiCardComponent;
}`;

const COMPONENT_AFTER = `
import { TuiThumbnailCardModule, TuiThumbnailCardComponent } from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiThumbnailCardModule]
})
export class TestComponent {
    @ViewChild(TuiThumbnailCardComponent)
    card: TuiThumbnailCardComponent;
}`;

const TEMPLATE_BEFORE = `
<tui-card class="tui-card"></tui-card>
<tui-card class="tui-card" />
<tui-card class="tui-card" brandLogo="logo"></tui-card>
<tui-card class="tui-card" brandLogo="logo" [active]="true"></tui-card>
<tui-thumbnail-card [brandLogo]="logo"></tui-thumbnail-card>
`;

const TEMPLATE_AFTER = `
<tui-thumbnail-card  class="tui-card"></tui-thumbnail-card>
<tui-thumbnail-card  class="tui-card" />
<tui-thumbnail-card  class="tui-card" iconLeft="logo"></tui-thumbnail-card>
<tui-thumbnail-card  class="tui-card" iconLeft="logo" ></tui-thumbnail-card>
<tui-thumbnail-card [iconLeft]="logo"></tui-thumbnail-card>
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

    it('should migrate tui-card tag in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate TuiCard(Module|Component) references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => resetActiveProject());
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

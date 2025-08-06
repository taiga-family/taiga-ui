import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
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
export class Test {
    @ViewChild(TuiCardComponent)
    card: TuiCardComponent;
}`;

const COMPONENT_AFTER = `
import { TuiThumbnailCard } from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiThumbnailCard]
})
export class Test {
    @ViewChild(TuiThumbnailCard)
    card: TuiThumbnailCard;
}`;

const TEMPLATE_BEFORE = `
<tui-card class="tui-card" [cardNumber]="cardNumber"></tui-card>
<tui-card class="tui-card" [cardNumber]="cardNumber"/>
<tui-card class="tui-card" brandLogo="logo" cardNumber="1234"></tui-card>
<tui-card class="tui-card" brandLogo="logo" [active]="true"></tui-card>
<tui-thumbnail-card [brandLogo]="logo" [cardNumber]="cardNumber"></tui-thumbnail-card>
`;

const TEMPLATE_AFTER = `
<tui-thumbnail-card  class="tui-card">{{ cardNumber }}</tui-thumbnail-card>
<tui-thumbnail-card  class="tui-card">{{ cardNumber }}</tui-thumbnail-card>
<tui-thumbnail-card  class="tui-card" iconStart="logo">1234</tui-thumbnail-card>
<tui-thumbnail-card  class="tui-card" iconStart="logo" ></tui-thumbnail-card>
<tui-thumbnail-card [iconStart]="logo">{{ cardNumber }}</tui-thumbnail-card>
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

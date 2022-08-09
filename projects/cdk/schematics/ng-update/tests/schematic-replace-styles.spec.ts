import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';
import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../migration.json');

const BEFORE_GLOBAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-fonts';
@import '~@taiga-ui/core/styles/taiga-ui-global';
@import '~@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-v2';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile';
`;

const AFTER_GLOBAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-fonts';
@import '~@taiga-ui/core/styles/taiga-ui-local';
@import '~@taiga-ui/styles/taiga-ui-global';
@import '~@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-v2';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile';
`;

const BEFORE_LOCAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-local';
`;

const AFTER_LOCAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-local';
`;

describe('replace styles', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host, '/', '**/**'));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace with new global styles', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/style.less')).toBe(AFTER_GLOBAL_STYLE);
        expect(tree.readContent('test/app/app.template.less')).toBe(AFTER_LOCAL_STYLE);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `
@Component({
    templateUrl: './app.template.html',
    styleUrls: ['./app.template.less']
})
export class AppComponent {
}
`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);
    createSourceFile('test/style.less', BEFORE_GLOBAL_STYLE);
    createSourceFile('test/app/app.template.less', BEFORE_LOCAL_STYLE);

    createAngularJson();
}

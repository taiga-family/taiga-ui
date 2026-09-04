import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {type TuiSchema} from '../../ng-add/schema';
import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../collection.json');

const COMPONENT = `
import {TuiLet} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiLet],
})
export class Test {
    readonly value = 'foo';
}
`;

const TEMPLATE = `
<test *tuiLet="value as val">
    {{ val }}
</test>
`;

const options: TuiSchema = {
    addons: [],
    project: '',
    'skip-logs': process.env['TUI_CI'] === 'true',
};

describe('migrateTuiLet [Standalone]', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile('test/app/test.component.ts', COMPONENT);
        createSourceFile('test/app/test.template.html', TEMPLATE);
        createAngularJson();

        saveActiveProject();
    });

    it('rewrites *tuiLet into @let in the template', async () => {
        const tree = await runner.runSchematic('migrateTuiLet', options, host);

        expect(tree.readContent('test/app/test.template.html')).toMatchSnapshot();
    });

    it('drops the now-unused TuiLet import from the component', async () => {
        const tree = await runner.runSchematic('migrateTuiLet', options, host);

        expect(tree.readContent('test/app/test.component.ts')).toMatchSnapshot();
    });

    afterEach(() => {
        resetActiveProject();
    });
});

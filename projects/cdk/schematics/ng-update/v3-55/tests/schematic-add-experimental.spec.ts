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

const collectionPath = join(__dirname, `../../../migration.json`);

const PACKAGE_BEFORE = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/core": "^3.55.0",
        "@taiga-ui/proprietary-core": "^3.55.0"
    }
}`;

const PACKAGE_AFTER = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/core": "^3.55.0",
        "@taiga-ui/experimental": "^3.55.0",
        "@taiga-ui/proprietary-core": "^3.55.0"
    }
}`;

describe(`ng-update`, () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner(`schematics`, collectionPath);

        setActiveProject(createProject(host));

        createSourceFile(`package.json`, PACKAGE_BEFORE);

        saveActiveProject();
    });

    it(`should add experimental package`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3_55`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`package.json`)).toEqual(PACKAGE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

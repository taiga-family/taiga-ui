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

const collectionPath = join(__dirname, '../../collection.json');

describe('ng-add', () => {
    describe('removes old postfix', () => {
        let host: UnitTestTree;
        let runner: SchematicTestRunner;

        beforeEach(() => {
            host = new UnitTestTree(new HostTree());
            runner = new SchematicTestRunner('schematics', collectionPath);

            // preparing virtual file tree with one file
            setActiveProject(createProject(host));

            createSourceFile('src/module.ts', "import {a} from '@morph-old/core';");

            saveActiveProject();
        });

        it('should replace old with new in TS imports', async () => {
            // Our migration returns Tree
            const tree = await runner.runSchematicAsync('ng-add', {}, host).toPromise();

            expect(tree.readContent('src/module.ts')).toEqual(
                "import {a} from '@morph-new/core';",
            );
        });

        afterEach(() => {
            // clear it up
            resetActiveProject();
        });
    });
});

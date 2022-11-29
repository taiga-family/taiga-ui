import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {join} from 'path';
import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';

const collectionPath = join(__dirname, '../../migration.json');

describe('ng-update angular.json', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);
    });

    it('include @taiga-ui/proprietary-icons inside a package.json', async () => {
        setActiveProject(createProject(host));

        createSourceFile(
            'package.json',
            `{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/proprietary-icons": "${TAIGA_VERSION}"}}`,
            {overwrite: true},
        );

        createSourceFile(
            'angular.json',
            makeAngularJsonWithAssets(`
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-icons/src",
                "output": "assets/taiga-ui/icons"
              }`),
        );

        saveActiveProject();

        const tree = await runner
            .runSchematicAsync(
                'updateToV3',
                {'skip-logs':  process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent('angular.json')).toEqual(
            makeAngularJsonWithAssets(`
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-icons/src",
                "output": "assets/taiga-ui/icons"
              },
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-tds-icons/src",
                "output": "assets/taiga-ui/icons"
              }`),
        );
    });

    it('it included proprietary-tds-icons now', async () => {
        setActiveProject(createProject(host));

        createSourceFile(
            'package.json',
            `{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/proprietary-icons": "${TAIGA_VERSION}"}}`,
        );

        createSourceFile(
            'angular.json',
            makeAngularJsonWithAssets(`
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-tds-icons/src",
                "output": "assets/taiga-ui/icons"
              },
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-icons/src",
                "output": "assets/taiga-ui/icons"
              }`),
        );

        saveActiveProject();

        const tree = await runner
            .runSchematicAsync(
                'updateToV3',
                {'skip-logs':  process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent('angular.json')).toEqual(
            makeAngularJsonWithAssets(`
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-tds-icons/src",
                "output": "assets/taiga-ui/icons"
              },
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-icons/src",
                "output": "assets/taiga-ui/icons"
              }`),
        );
    });

    it(`doesn't include @taiga-ui/proprietary-icons inside a package.json`, async () => {
        setActiveProject(createProject(host));

        createSourceFile(
            'package.json',
            `{"dependencies": {"@angular/core": "~13.0.0"}}`,
        );

        createSourceFile(
            'angular.json',
            makeAngularJsonWithAssets(`
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-icons/src",
                "output": "assets/taiga-ui/icons"
              }`),
        );

        saveActiveProject();

        const tree = await runner
            .runSchematicAsync(
                'updateToV3',
                {'skip-logs':  process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent('angular.json')).toEqual(
            makeAngularJsonWithAssets(`
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/proprietary-icons/src",
                "output": "assets/taiga-ui/icons"
              }`),
        );
    });

    afterEach(() => resetActiveProject());
});

function makeAngularJsonWithAssets(assets: string): string {
    return `
{
  "version": 1,
  "defaultProject": "demo",
  "projects": {
    "demo": {
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
              "styles": [
                "node_modules/@taiga-ui/core/styles/taiga-ui-fonts.less",
                "node_modules/@taiga-ui/styles/taiga-ui-global.less",
                "some.style"
              ],
              "assets": [${assets}
              ]
            }
          }
        }
    }
  }
}`;
}

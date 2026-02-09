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

import {createAngularJson} from '../../utils/create-angular-json';
import {TAIGA_VERSION} from '../constants/versions';
import {type TuiSchema} from '../schema';

const collectionPath = join(__dirname, '../../collection.json');

describe('ng-add', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile(
            'package.json',
            '{"dependencies": {"@angular/core": "~13.0.0"}}',
        );
        createAngularJson();
        createMainFiles();
        saveActiveProject();
    });

    it('should add main modules in package.json', async () => {
        const options: TuiSchema = {
            addons: [],
            project: '',
            'skip-logs': process.env['TUI_CI'] === 'true',
        };

        const tree = await runner.runSchematic('ng-add', options, host);

        expect(tree.readContent('package.json')).toBe(
            `{
  "dependencies": {
    "@angular/core": "~13.0.0",
    "@taiga-ui/cdk": "${TAIGA_VERSION}",
    "@taiga-ui/core": "${TAIGA_VERSION}",
    "@taiga-ui/event-plugins": "^4.0.2",
    "@taiga-ui/icons": "${TAIGA_VERSION}",
    "@taiga-ui/kit": "${TAIGA_VERSION}"
  }
}`,
        );
    });

    it('should add additional modules in package.json', async () => {
        const options: TuiSchema = {
            addons: ['addon-doc', 'addon-mobile'],
            project: '',
            'skip-logs': process.env['TUI_CI'] === 'true',
        };

        const tree = await runner.runSchematic('ng-add', options, host);

        expect(tree.readContent('package.json')).toBe(
            `{
  "dependencies": {
    "@angular/cdk": "^13.0.0",
    "@angular/core": "~13.0.0",
    "@taiga-ui/addon-doc": "${TAIGA_VERSION}",
    "@taiga-ui/addon-mobile": "${TAIGA_VERSION}",
    "@taiga-ui/cdk": "${TAIGA_VERSION}",
    "@taiga-ui/core": "${TAIGA_VERSION}",
    "@taiga-ui/event-plugins": "^4.0.2",
    "@taiga-ui/icons": "${TAIGA_VERSION}",
    "@taiga-ui/kit": "${TAIGA_VERSION}"
  }
}`,
        );
    });

    it('should add additional modules in package.json and global styles', async () => {
        const options: TuiSchema = {
            addons: ['addon-doc', 'addon-mobile'],
            project: '',
            'skip-logs': process.env['TUI_CI'] === 'true',
        };

        const tree = await runner.runSchematic('ng-add', options, host);

        expect(tree.readContent('package.json')).toBe(
            `{
  "dependencies": {
    "@angular/cdk": "^13.0.0",
    "@angular/core": "~13.0.0",
    "@taiga-ui/addon-doc": "${TAIGA_VERSION}",
    "@taiga-ui/addon-mobile": "${TAIGA_VERSION}",
    "@taiga-ui/cdk": "${TAIGA_VERSION}",
    "@taiga-ui/core": "${TAIGA_VERSION}",
    "@taiga-ui/event-plugins": "^4.0.2",
    "@taiga-ui/icons": "${TAIGA_VERSION}",
    "@taiga-ui/kit": "${TAIGA_VERSION}"
  }
}`,
        );
    });

    it('should add assets and styles in angular.json', async () => {
        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('angular.json')).toBe(`
{
  "version": 1,
  "projects": {
    "demo": {
        "root": "",
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
              "styles": [
                "node_modules/@taiga-ui/styles/taiga-ui-theme.less",
                "node_modules/@taiga-ui/styles/taiga-ui-fonts.less"
              ],
              "assets": [
                {
                  "glob": "**/*",
                  "input": "node_modules/@taiga-ui/icons/src",
                  "output": "assets/taiga-ui/icons"
                }
              ],
            }
          }
        }
    }
  }
}`);
    });

    it('should add styles without duplicates, taiga styles first', async () => {
        createAngularJson({stylesExist: true});
        saveActiveProject();

        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('angular.json')).toBe(`
{
  "version": 1,
  "projects": {
    "demo": {
        "root": "",
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
            "styles": [
              "node_modules/@taiga-ui/styles/taiga-ui-theme.less",
              "node_modules/@taiga-ui/styles/taiga-ui-fonts.less",
              "some.style"
            ],
            "assets": [
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/icons/src",
                "output": "assets/taiga-ui/icons"
              }
            ]
                }
          }
        }
    }
  }
}`);
    });

    it('should add global styles', async () => {
        createAngularJson({stylesExist: true});
        saveActiveProject();

        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {addGlobalStyles: true} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('angular.json')).toBe(`
{
  "version": 1,
  "projects": {
    "demo": {
        "root": "",
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
            "styles": [
              "node_modules/@taiga-ui/styles/taiga-ui-theme.less",
              "node_modules/@taiga-ui/styles/taiga-ui-fonts.less",
              "some.style"
            ],
            "assets": [
              {
                "glob": "**/*",
                "input": "node_modules/@taiga-ui/icons/src",
                "output": "assets/taiga-ui/icons"
              }
            ]
                }
          }
        }
    }
  }
}`);
    });

    it('should wrap main template with tui-root', async () => {
        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/app.template.html')).toBe(`<tui-root>
<app></app>
</tui-root>`);
    });

    it('should add root and provider to main module', async () => {
        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/app.module.ts'))
            .toBe(`import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { TuiRoot } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {App} from './app.component';

@NgModule({declarations: [App],
    imports: [BrowserAnimationsModule, TuiRoot],
    providers: [provideEventPlugins()]
})
export class AppModule {}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/main.ts',
        `import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
  import {AppModule} from './app/app.module';
  import {environment} from './environments/environment';

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
  `,
    );

    createSourceFile(
        'test/app/app.module.ts',
        `import {NgModule} from '@angular/core';
import {App} from './app.component';

@NgModule({declarations: [App]})
export class AppModule {}
`,
    );

    createSourceFile(
        'test/app/app.component.ts',
        `import {Component} from '@angular/core';
import {App} from './app.component';

@Component({templateUrl: './app.template.html'})
export class App {}`,
    );

    createSourceFile('test/app/app.template.html', '<app></app>');
}

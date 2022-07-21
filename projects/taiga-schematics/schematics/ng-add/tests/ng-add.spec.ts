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
import {
    DOMPURIFY_TYPES_VERSION,
    DOMPURIFY_VERSION,
    NG_DOMPURIFY_VERSION,
    TAIGA_VERSION,
} from '../constants/versions';
import {Schema} from '../schema';

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
        const options: Schema = {
            addSanitizer: false,
            addDialogsModule: false,
            addAlertModule: false,
            addons: [],
            project: '',
        };

        const tree = await runner.runSchematicAsync('ng-add', options, host).toPromise();

        expect(tree.readContent('package.json')).toEqual(
            `{
  "dependencies": {
    "@angular/core": "~13.0.0",
    "@taiga-ui/cdk": "${TAIGA_VERSION}",
    "@taiga-ui/core": "${TAIGA_VERSION}",
    "@taiga-ui/icons": "${TAIGA_VERSION}",
    "@taiga-ui/kit": "${TAIGA_VERSION}"
  }
}`,
        );
    });

    it('should add additional modules in package.json', async () => {
        const options: Schema = {
            addSanitizer: true,
            addDialogsModule: false,
            addAlertModule: false,
            addons: ['addon-doc', 'addon-mobile'],
            project: '',
        };

        const tree = await runner.runSchematicAsync('ng-add', options, host).toPromise();

        expect(tree.readContent('package.json')).toEqual(
            `{
  "devDependencies": {
    "@types/dompurify": "${DOMPURIFY_TYPES_VERSION}"
  },
  "dependencies": {
    "@angular/cdk": "^13.0.0",
    "@angular/core": "~13.0.0",
    "@taiga-ui/addon-doc": "${TAIGA_VERSION}",
    "@taiga-ui/addon-mobile": "${TAIGA_VERSION}",
    "@taiga-ui/cdk": "${TAIGA_VERSION}",
    "@taiga-ui/core": "${TAIGA_VERSION}",
    "@taiga-ui/icons": "${TAIGA_VERSION}",
    "@taiga-ui/kit": "${TAIGA_VERSION}",
    "@tinkoff/ng-dompurify": "${NG_DOMPURIFY_VERSION}",
    "dompurify": "${DOMPURIFY_VERSION}"
  }
}`,
        );
    });

    it('should add assets and styles in angular.json', async () => {
        const tree = await runner
            .runSchematicAsync('ng-add-setup-project', {}, host)
            .toPromise();

        expect(tree.readContent('angular.json')).toEqual(`
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
              "node_modules/@taiga-ui/core/styles/taiga-ui-global.less",
              "node_modules/@taiga-ui/core/styles/taiga-ui-theme.less"
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

    it('should add styles without dublicates, taiga styles first', async () => {
        createAngularJson({stylesExist: true});
        saveActiveProject();

        const tree = await runner
            .runSchematicAsync('ng-add-setup-project', {}, host)
            .toPromise();

        expect(tree.readContent('angular.json')).toEqual(`
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
              "node_modules/@taiga-ui/core/styles/taiga-ui-global.less",
              "node_modules/@taiga-ui/core/styles/taiga-ui-theme.less",
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

    it('Should add Taiga-ui modules and providers to main module', async () => {
        const options: Schema = {
            addSanitizer: true,
            addDialogsModule: true,
            addAlertModule: true,
            addons: [],
            project: '',
        };
        const tree = await runner
            .runSchematicAsync('ng-add-setup-project', options, host)
            .toPromise();

        expect(tree.readContent('test/app/app.module.ts')).toEqual(
            `import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

@NgModule({declarations: [AppComponent],
        imports: [BrowserAnimationsModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
        providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
    })
export class AppModule {}
`,
        );
    });

    it('Should wrap main template with tui-root', async () => {
        const tree = await runner
            .runSchematicAsync('ng-add-setup-project', {}, host)
            .toPromise();

        expect(tree.readContent('test/app/app.template.html')).toEqual(`<tui-root>
<app></app>
</tui-root>`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createAngularJson(
    {stylesExist}: {stylesExist: boolean} = {stylesExist: false},
): void {
    createSourceFile(
        'angular.json',
        `
{
  "version": 1,
  "defaultProject": "demo",
  "projects": {
    "demo": {
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
            ${
                stylesExist
                    ? `"styles": [
                  "node_modules/@taiga-ui/core/styles/taiga-ui-theme.less",
                  "some.style"
                ]
                `
                    : ``
            }}
          }
        }
    }
  }
}`,
        {overwrite: true},
    );
}

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
import {AppComponent} from './app.component';

@NgModule({declarations: [AppComponent]})
export class AppModule {}
`,
    );

    createSourceFile(
        'test/app/app.component.ts',
        `import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({templateUrl: './app.template.html'})
export class AppComponent {}`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);
}

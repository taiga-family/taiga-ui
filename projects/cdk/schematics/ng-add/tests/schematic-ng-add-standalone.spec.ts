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

describe('ng-add [Standalone]', () => {
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
        createMainStandaloneFiles();
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

    it('should add Taiga-ui modules and providers to main component', async () => {
        const options: TuiSchema = {
            addons: [],
            project: '',
            'skip-logs': process.env['TUI_CI'] === 'true',
        };

        const tree = await runner.runSchematic('ng-add-setup-project', options, host);

        expect(tree.readContent('test/app/app.component.ts')).toBe(
            `import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, TuiRoot],
  selector: 'standalone-test-root',
  templateUrl: './app.template.html',
  styleUrl: './app.component.less',
})
export class App {
  title = 'standalone-test';
}`,
        );
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

    it('[Standalone] Should add main providers to bootstrap fn', async () => {
        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/main.ts'))
            .toBe(`import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app/app.routes';
import { App } from './app/app.component';

bootstrapApplication(App, {
  providers: [provideAnimations(), provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), importProvidersFrom(SomeModule), provideEventPlugins()],
}).catch((err) => console.error(err));
`);
    });

    it('[Standalone] Should add main providers to bootstrap fn (appConfig)', async () => {
        createMainWithConfig();
        saveActiveProject();

        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/app.config.ts'))
            .toBe(`import { provideEventPlugins } from "@taiga-ui/event-plugins";

import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), provideAnimations(), provideEventPlugins()],
};`);
    });

    it('[Standalone] Should add Taiga-ui modules', async () => {
        createMainWithoutAnimation();
        saveActiveProject();

        const tree = await runner.runSchematic(
            'ng-add-setup-project',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/main.ts'))
            .toBe(`import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { App } from './app/app.component';

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), provideEventPlugins()],
}).catch((err) => console.error(err));
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainStandaloneFiles(): void {
    createSourceFile(
        'test/main.ts',
        `import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app/app.routes';
import { App } from './app/app.component';

bootstrapApplication(App, {
  providers: [provideAnimations(), provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), importProvidersFrom(SomeModule)],
}).catch((err) => console.error(err));
`,
        {overwrite: true},
    );

    createSourceFile(
        'test/app/app.component.ts',
        `import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'standalone-test-root',
  templateUrl: './app.template.html',
  styleUrl: './app.component.less',
})
export class App {
  title = 'standalone-test';
}`,
        {overwrite: true},
    );

    createSourceFile('test/app/app.template.html', '<app></app>', {overwrite: true});
}

function createMainWithoutAnimation(): void {
    createSourceFile(
        'test/main.ts',
        `import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { App } from './app/app.component';

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
`,
        {overwrite: true},
    );
}

function createMainWithConfig(): void {
    createSourceFile(
        'test/main.ts',
        `import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { App } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
`,
        {overwrite: true},
    );

    createSourceFile(
        'test/app/app.config.ts',
        `
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), provideAnimations()],
};`,
        {overwrite: true},
    );
}

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

const collectionPath = join(__dirname, '../../migration.json');

const BEFORE = `
import { Component } from '@angular/core';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
    AnotherType,
} from '@taiga-ui/core';
import { InputCountOptions } from '@taiga-ui/kit/components';
import { ButtonOptions, some, InputCountOptions, WithDateMaskPipeConfig } from '@taiga-ui/core/types';
import { InputPasswordOptions } from '@taiga-ui/kit/components/input-password';
import { TUI_INPUT_TIME_OPTIONS, InputTimeOptions, Country, RadioOptions } from '@taiga-ui/kit';
import {
    Language,
    LanguageCore,
    LanguageCommerce,
    LanguageEditor,
    LanguagePreview,
    LanguageTable,
    LanguageKit
} from '@taiga-ui/i18n';
import { ToggleOptions } from '@taiga-ui/cdk';
const options: ButtonOptions = {};
const inputCountOptions: InputCountOptions = {};
const passwordOptions = {} as InputPasswordOptions;
const config: WithDateMaskPipeConfig = {}
const notificationOptions: TuiNotificationOptions = {};
const notificationOptionsWithData: TuiNotificationOptionsWithData<string> = {};
const COUNTRIES: Country[] = [];
const language: Language
        | LanguageCore
        | LanguageCommerce
        | LanguageEditor
        | LanguagePreview
        | LanguageTable
        | LanguageKit
        | null = null;

@Component({
   templateUrl: './app.template.html',
   providers: [
      {provide: TUI_TOGGLE_OPTIONS, useValue: {showIcons: true} as ToggleOptions},
   ],
})
export class AppComponent {
   some: ButtonOptions = {};
   doSomething(options: InputCountOptions) {
      console.log(options.step);
   }
   get passwordOptions(): InputPasswordOptions {
      return {};
   }
   get radioOptions() {
      return {size: 'l'} as RadioOptions;
   }
   constructor(@Inject(TUI_INPUT_TIME_OPTIONS) readonly options: InputTimeOptions) {}
}
`;

const AFTER = `
import { Component } from '@angular/core';
import {
    TuiAlertOptions,
    AnotherType,
} from '@taiga-ui/core';
import { TuiInputCountOptions } from '@taiga-ui/kit';
import { TuiButtonOptions, some, InputCountOptions } from '@taiga-ui/core';
import { TuiInputPasswordOptions } from '@taiga-ui/kit';
import { TUI_INPUT_TIME_OPTIONS, TuiInputTimeOptions, TuiRadioOptions } from '@taiga-ui/kit';
import {
    TuiLanguage,
    TuiLanguageCore,
    TuiLanguageCommerce,
    TuiLanguageEditor,
    TuiLanguagePreview,
    TuiLanguageTable,
    TuiLanguageKit
} from '@taiga-ui/i18n';
import { TuiToggleOptions } from '@taiga-ui/cdk';
const options: TuiButtonOptions = {};
const inputCountOptions: TuiInputCountOptions = {};
const passwordOptions = {} as TuiInputPasswordOptions;
const config: any = {}
const notificationOptions: TuiAlertOptions<any> = {};
const notificationOptionsWithData: TuiAlertOptions<string> = {};
const COUNTRIES: any[] = [];
const language: TuiLanguage
        | TuiLanguageCore
        | TuiLanguageCommerce
        | TuiLanguageEditor
        | TuiLanguagePreview
        | TuiLanguageTable
        | TuiLanguageKit
        | null = null;

@Component({
   templateUrl: './app.template.html',
   providers: [
      {provide: TUI_TOGGLE_OPTIONS, useValue: {showIcons: true} as TuiToggleOptions},
   ],
})
export class AppComponent {
   some: TuiButtonOptions = {};
   doSomething(options: TuiInputCountOptions) {
      console.log(options.step);
   }
   get passwordOptions(): TuiInputPasswordOptions {
      return {};
   }
   get radioOptions() {
      return {size: 'l'} as TuiRadioOptions;
   }
   constructor(@Inject(TUI_INPUT_TIME_OPTIONS) readonly options: TuiInputTimeOptions) {}
}
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

    it('should rename types', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.component.ts', BEFORE);

    createSourceFile('test/app/app.template.html', `<app></app>`);
}

import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../../../migration.json');

const BEFORE = `
import {Component} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: 'awesome-selector',
    template: '',
})
export class Example {
    readonly countries: TuiCountryIsoCode[] = Object.values(TuiCountryIsoCode);

    countryIsoCode = TuiCountryIsoCode.US;
}`.trim();

const AFTER = `
import { getCountries } from "libphonenumber-js";
import {Component} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: 'awesome-selector',
    template: '',
})
export class Example {
    readonly countries: TuiCountryIsoCode[] = getCountries();

    countryIsoCode = 'US';
}`.trim();

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile('test/app/test.component.ts', BEFORE);
        createSourceFile('package.json', '{}');

        saveActiveProject();
    });

    it('migration works', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        const modifiedFile = tree.readContent('test/app/test.component.ts');

        expect(modifiedFile).toEqual(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

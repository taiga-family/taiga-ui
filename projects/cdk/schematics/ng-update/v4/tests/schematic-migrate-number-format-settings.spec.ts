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

const COMPONENT_BEFORE = `
import {Component} from '@angular/core';
import {tuiNumberFormatProvider, TuiNumberFormatSettings, tuiFormatNumber, TuiFormatNumberPipe} from '@taiga-ui/core';

const standaloneNumberFormatSettings: TuiNumberFormatSettings = {
    decimalSeparator: ',',
    decimal: 'never', // => precision: 0
    rounding: 'round',
};

@Component({
    standalone: true,
    selector: 'test',
    template: \`
        <p>
            Formatted:
            {{ 10500.33 | tuiFormatNumber: {decimalLimit: 4, decimalSeparator: '.'} }}
        </p>
    \`,
    imports: [TuiFormatNumberPipe],
    providers: [
        tuiNumberFormatProvider({
            decimalLimit: 2, // => precision: 2
            decimalSeparator: '.',
            thousandSeparator: ',',
            zeroPadding: true, // => decimalMode: 'always'
        }),
    ],
})
export class Test {
    constructor() {
        const decimalLimit = 4;
        // decimalLimit => precision
        const formattedNumber = tuiFormatNumber('1234567890.42', {decimal: 'always', decimalLimit});
    }
}`.trim();

const COMPONENT_AFTER = `
import {Component} from '@angular/core';
import {tuiNumberFormatProvider, TuiNumberFormatSettings, tuiFormatNumber, TuiFormatNumberPipe} from '@taiga-ui/core';

const standaloneNumberFormatSettings: TuiNumberFormatSettings = {
    decimalSeparator: ',',
    precision: 0, // => precision: 0
    rounding: 'round',
};

@Component({
    standalone: true,
    selector: 'test',
    template: \`<!-- TODO: (Taiga UI migration) tuiFormatNumber pipe API has been changed. Learn how to migrate decimalLimit, decimal, zeroPadding: https://github.com/taiga-family/taiga-ui/issues/8335#migration -->

        <p>
            Formatted:
            {{ 10500.33 | tuiFormatNumber: {decimalLimit: 4, decimalSeparator: '.'} }}
        </p>
    \`,
    imports: [TuiFormatNumberPipe],
    providers: [
        tuiNumberFormatProvider({
            precision: 2, // => precision: 2
            decimalSeparator: '.',
            thousandSeparator: ',',
            decimalMode: "always", // => decimalMode: 'always'
        }),
    ],
})
export class Test {
    constructor() {
        const decimalLimit = 4;
        // decimalLimit => precision
        const formattedNumber = tuiFormatNumber('1234567890.42', {decimalMode: 'always', precision: decimalLimit});
    }
}
`.trim();

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

    it('should migrate legacy `decimalLimit`, `decimal` and `zeroPadding` of `TuiNumberFormatSettings`', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        const componentBefore = tree.readContent('test/app/component.ts');

        expect(componentBefore).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/component.ts', COMPONENT_BEFORE);
    createSourceFile('package.json', '{}');
}

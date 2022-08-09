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
import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../migration.json');

const AFTER = `import {Component} from '@angular/core';
import {
    TUI_NUMBER_FORMAT,
    tuiFormatNumber,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';

tuiFormatNumber(1000);
tuiFormatNumber(1.234, {decimalLimit: 2, decimalSeparator: ',', thousandSeparator: ' ', zeroPadding: true});
tuiFormatNumber(123.45, {decimalLimit: 3, decimalSeparator: '.', thousandSeparator: ' ', zeroPadding: true});
tuiFormatNumber(12345.67, {decimalLimit: 4, decimalSeparator: ',', thousandSeparator: '.', zeroPadding: true});
tuiFormatNumber(27, {decimalLimit: 5, decimalSeparator: ',', thousandSeparator: '.', zeroPadding: false});

const dynamicDecimalLimit = Math.random() > 0.5;
const decimalSeparatorVariable = ',';
const thousandSeparatorVariable = '_';
const zeroPaddingVariable = false;
tuiFormatNumber(42, {decimalLimit: dynamicDecimalLimit === null ? Infinity : dynamicDecimalLimit, decimalSeparator: decimalSeparatorVariable, thousandSeparator: thousandSeparatorVariable, zeroPadding: zeroPaddingVariable});

@Component({templateUrl: './app.template.html'})
export class AppComponent extends AbstractTuiController {
    some = number ?? 5;

    get formattedNumber(): number {
        return tuiFormatNumber(Math.floor(rawNumber), {decimalLimit: Infinity, decimalSeparator: this.numberFormat.decimalSeparator, thousandSeparator: this.numberFormat.thousandSeparator, zeroPadding: true});
    }

    method(): void {
        return someFn(b ?? "some");
    }

    get formattedDayPart(): string {
        this.some = '1000'.padStart(10, " ");
        return String(this.day).padStart(2, '0');
    }

    constructor(@Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings) {}

    private hasClosest(suitableNode: any, selector: string): void {
        const element = (suitableNode as Element).closest(selector);
        return Boolean(element);
    }
}

expect(element.closest('div')).toEqual(div);

const event = new CustomEvent("hello", {
               bubbles: true,
               cancelable: true,
               detail: true,
           });
`;

const BEFORE = `import {Component} from '@angular/core';
import { fallbackValue, tuiCustomEvent, getClosestElement, padStart } from '@taiga-ui/cdk';
import {
    TUI_NUMBER_FORMAT,
    tuiFormatNumber,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';

tuiFormatNumber(1000);
tuiFormatNumber(1.234, 2);
tuiFormatNumber(123.45, 3, '.');
tuiFormatNumber(12345.67, 4, ',', '.');
tuiFormatNumber(27, 5, ',', '.', false);

const dynamicDecimalLimit = Math.random() > 0.5;
const decimalSeparatorVariable = ',';
const thousandSeparatorVariable = '_';
const zeroPaddingVariable = false;
tuiFormatNumber(42, dynamicDecimalLimit, decimalSeparatorVariable, thousandSeparatorVariable, zeroPaddingVariable);

@Component({templateUrl: './app.template.html'})
export class AppComponent extends AbstractTuiController {
    some = fallbackValue(number, 5);

    get formattedNumber(): number {
        return tuiFormatNumber(
            Math.floor(rawNumber),
            null,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
    }

    method(): void {
        return someFn(fallbackValue<string>(b, "some"));
    }

    get formattedDayPart(): string {
        this.some = padStart('1000', 10);
        return padStart(String(this.day), 2, '0');
    }

    constructor(@Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings) {}

    private hasClosest(suitableNode: any, selector: string): void {
        const element = getClosestElement(suitableNode as Element, selector);
        return Boolean(element);
    }
}

expect(getClosestElement(element, 'div')).toEqual(div);

const event = tuiCustomEvent(
           "hello",
           {
               bubbles: true,
               cancelable: true,
               detail: true,
           },
           document,
       );
`;

describe('replace functions', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace functions', async () => {
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

    createAngularJson();
}

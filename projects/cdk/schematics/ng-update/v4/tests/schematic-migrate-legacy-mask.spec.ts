import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

const collectionPath = join(__dirname, '../../../migration.json');

const BEFORE = `
import {
    AModule,
    tuiMaskedMoneyValueIsEmpty,
    BModule,
    tuiMaskedNumberStringToNumber,
    CModule
} from '@taiga-ui/core';

@Component({
    standalone: true
    template: '',
    imports: [AModule, BModule, CModule],
})
export class TestComponent {
    onClick(): void {
        const isEmpty = tuiMaskedMoneyValueIsEmpty('123,45');
        const parsedValue = tuiMaskedNumberStringToNumber('123,45', ',', ' ');
        const parsedValueAgain = tuiMaskedNumberStringToNumber(
            this.value,
            this.decimalSeparator,
            CHAR_NO_BREAK_SPACE
        );
        console.info(isEmpty, parsedValue, parsedValueAgain);
    }
}`.trim();

const AFTER = `
import { maskitoParseNumber } from "@maskito/kit";
import {
    AModule,
    BModule,
    CModule
} from '@taiga-ui/core';

@Component({
    standalone: true
    template: '',
    imports: [AModule, BModule, CModule],
})
export class TestComponent {
    onClick(): void {
        const isEmpty = Number.isNaN(maskitoParseNumber('123,45', ','));
        const parsedValue = maskitoParseNumber('123,45', ',');
        const parsedValueAgain = maskitoParseNumber(this.value, this.decimalSeparator);
        console.info(isEmpty, parsedValue, parsedValueAgain);
    }
}`.trim();

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile('test/app/test.component.ts', BEFORE);

        saveActiveProject();
    });

    it('migration works', async () => {
        const tree = await runner
            .runSchematicAsync(
                'updateToV4',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        const modifiedFile = tree.readContent('test/app/test.component.ts');

        expect(modifiedFile).toEqual(AFTER);
    });

    afterEach(() => resetActiveProject());
});

import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tuiFieldError', () => {
    const defaultComponent = `
import { TuiError } from "@taiga-ui/core";

import { Component } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './test.html',
    imports: [TuiError],
})
export class TestComponent {}
            `.trim();

    const migrateComponent = async (component: string): Promise<string> => {
        const {component: result} = await runMigration({
            collection,
            component,
        });

        return result;
    };

    const migrateTemplate = async (template: string): Promise<string> => {
        const {template: result} = await runMigration({
            template,
            collection,
            component: defaultComponent,
        });

        return result;
    };

    it('removes TuiFieldErrorPipe and TuiFieldErrorContentPipe from imports and replaces with TuiError', async () => {
        const result = await migrateComponent(`
import { Component } from "@angular/core";
import { TuiFieldErrorPipe, TuiFieldErrorContentPipe } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.html',
    imports: [TuiFieldErrorPipe, TuiFieldErrorContentPipe],
})
export class TestComponent {}
            `);

        expect(result.trim()).toEqual(defaultComponent);
    });

    it('removes TuiFieldErrorPipe from imports and remains single TuiError', async () => {
        const result = await migrateComponent(`
import { TuiError } from "@taiga-ui/core";

import { Component } from "@angular/core";
import { TuiFieldErrorPipe } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.html',
    imports: [TuiFieldErrorPipe, TuiError],
})
export class TestComponent {}
            `);

        expect(result.trim()).toEqual(defaultComponent);
    });

    it('renames tuiFieldErrorContent pipe to tuiError', async () => {
        const result = await migrateTemplate(`
                <input [tuiHint]="[] | tuiFieldErrorContent" />
            `);
        const expected = `
                <input [tuiHint]="[] | tuiError" />
            `;

        expect(result).toEqual(expected);
    });

    it('renames tuiFieldErrorContent pipe to tuiError - complex', async () => {
        const result = await migrateTemplate(`
                <input
                    placeholder="Price"
                    [tuiHint]="
                        [
                            'fieldA',
                            'fieldB'
                        ]
                            | tuiFieldErrorContent
                            | someOtherPipe"
                />
            `);
        const expected = `
                <input
                    placeholder="Price"
                    [tuiHint]="
                        [
                            'fieldA',
                            'fieldB'
                        ]
                            | tuiError
                            | someOtherPipe"
                />
            `;

        expect(result).toEqual(expected);
    });

    it('removes tuiFieldError pipe and error attribute for empty order', async () => {
        const result = await migrateTemplate(`
                <tui-error
                    formControlName="testValue2"
                    [error]="[] | tuiFieldError | async"
                />
            `);
        const expected = `
                <tui-error
                    formControlName="testValue2"
${'                    '}
                />
            `;

        expect(result).toEqual(expected);
    });

    it('removes tuiFieldError pipe and changes error attribute to order for explicit array', async () => {
        const result = await migrateTemplate(`
                <tui-error
                    formControlName="testValue2"
                    [error]="['required', 'inn'] | tuiFieldError | async"
                />
            `);
        const expected = `
                <tui-error
                    formControlName="testValue2"
                    [order]="['required', 'inn']"
                />
            `;

        expect(result).toEqual(expected);
    });

    it('removes tuiFieldError pipe and changes error attribute to order for implicit array', async () => {
        const result = await migrateTemplate(`
                <tui-error
                    formControlName="testValue2"
                    [error]="order$ | async | tuiFieldError | async"
                />
            `);

        const expected = `
                <tui-error
                    formControlName="testValue2"
                    [order]="order$ | async"
                />
            `;

        expect(result).toEqual(expected);
    });

    it('adds TODO comment when tuiFieldError is used on a non-tui-error element', async () => {
        const result = await migrateTemplate(`
                <div [error]="['required'] | tuiFieldError | async"></div>
            `);

        const expected = `
                <!-- TODO: Could not migrate \`tuiFieldError\` automatically. The directive must be used on a <tui-error> element. Likely, you want to use \`tuiError\` pipe. --><div [error]="['required'] | tuiFieldError | async"></div>
            `;

        expect(result).toEqual(expected);
    });

    afterEach(() => resetActiveProject());
});

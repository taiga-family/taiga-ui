import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiFieldError', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import { TuiError } from "@taiga-ui/core";

            import { Component } from "@angular/core";

            @Component({
                standalone: true,
                templateUrl: './test.html',
                imports: [TuiError],
            })
            export class TestComponent {}
        `,
    });

    it(
        'removes TuiFieldErrorPipe and TuiFieldErrorContentPipe from imports and replaces with TuiError',
        migrate({
            component: `
                import { Component } from "@angular/core";
                import { TuiFieldErrorPipe, TuiFieldErrorContentPipe } from "@taiga-ui/kit";

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiFieldErrorPipe, TuiFieldErrorContentPipe],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'removes TuiFieldErrorPipe from imports and remains single TuiError',
        migrate({
            component: `
                import { TuiError } from "@taiga-ui/core";

                import { Component } from "@angular/core";
                import { TuiFieldErrorPipe } from "@taiga-ui/kit";

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiFieldErrorPipe, TuiError],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'renames tuiFieldErrorContent pipe to tuiError',
        migrate({
            template: `
                <input [tuiHint]="[] | tuiFieldErrorContent" />
            `,
        }),
    );

    it(
        'renames tuiFieldErrorContent pipe to tuiError - complex',
        migrate({
            template: `
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
            `,
        }),
    );

    it(
        'removes tuiFieldError pipe and error attribute for empty order',
        migrate({
            template: `
                <tui-error
                    formControlName="testValue2"
                    [error]="[] | tuiFieldError | async"
                />
            `,
        }),
    );

    it(
        'removes tuiFieldError pipe and changes error attribute to order for explicit array',
        migrate({
            template: `
                <tui-error
                    formControlName="testValue2"
                    [error]="['required', 'inn'] | tuiFieldError | async"
                />
            `,
        }),
    );

    it(
        'removes tuiFieldError pipe and changes error attribute to order for implicit array',
        migrate({
            template: `
                <tui-error
                    formControlName="testValue2"
                    [error]="order$ | async | tuiFieldError | async"
                />
            `,
        }),
    );

    it(
        'adds TODO comment when tuiFieldError is used on a non-tui-error element',
        migrate({
            template: `
                <div [error]="['required'] | tuiFieldError | async"></div>
            `,
        }),
    );

    it(
        'migrates inline template in component',
        migrate({
            component: `
                import { Component } from '@angular/core'
                import {
                  TuiError,
                  TuiTextfield,
                } from '@taiga-ui/core'
                import { TuiFieldErrorPipe } from '@taiga-ui/kit'

                @Component({
                  template: \`
                    <section>
                      <tui-textfield>
                        <input tuiTextfield formControlName="fieldA" />
                      </tui-textfield>
                      <tui-error formControlName="fieldA" [error]="['required'] | tuiFieldError | async" />

                      <tui-textfield>
                        <input tuiTextfield formControlName="fieldB" />
                      </tui-textfield>
                      <tui-error formControlName="fieldB" [error]="[] | tuiFieldError | async" />
                    </section>
                  \`,
                  imports: [
                    TuiTextfield,
                    TuiError,
                    TuiFieldErrorPipe,
                  ],
                })
                export class DemoComponent {}
        `,
        }),
    );

    afterEach(() => resetActiveProject());
});

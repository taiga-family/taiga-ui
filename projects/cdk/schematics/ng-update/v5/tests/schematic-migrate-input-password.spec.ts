import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputPasswordModule to TuiPassword',
        migrate({
            component: `
                import {TuiInputPasswordModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    // ...
                    TuiInputPasswordModule,
                  ],
                  // ...
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    // ...
                    TuiInputPasswordModule,
                  ],
                  templateUrl: './test.html',
                  // ...
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-password></tui-input-password>

                <tui-input-password [formControl]="control">
                    Enter password
                </tui-input-password>

                <tui-input-password
                    formControlName="password"
                    [tuiTextfieldCleaner]="true"
                >
                    Password
                    <input
                        placeholder="••••••••"
                        tuiTextfield
                    />
                </tui-input-password>

                <tui-input-password [(ngModel)]="value">
                    Confirm password
                </tui-input-password>
            `,
        }),
    );

    it(
        'removes [tuiTextfieldLabelOutside]="true" and converts text to placeholder',
        migrate({
            template: /* HTML */ `
                <tui-input-password
                    [tuiTextfieldLabelOutside]="true"
                    [(ngModel)]="value"
                >
                    Enter password
                </tui-input-password>
            `,
        }),
    );

    it(
        'removes bare tuiTextfieldLabelOutside and converts text to placeholder',
        migrate({
            template: /* HTML */ `
                <tui-input-password
                    tuiTextfieldLabelOutside
                    [(ngModel)]="value"
                >
                    Enter password
                </tui-input-password>
            `,
        }),
    );

    it(
        'removes [tuiTextfieldLabelOutside]="false" and keeps label inside',
        migrate({
            template: /* HTML */ `
                <tui-input-password
                    [tuiTextfieldLabelOutside]="false"
                    [(ngModel)]="value"
                >
                    Enter password
                </tui-input-password>
            `,
        }),
    );

    it(
        'handles dynamic [tuiTextfieldLabelOutside] with TODO',
        migrate({
            template: /* HTML */ `
                <tui-input-password
                    [tuiTextfieldLabelOutside]="isOutside"
                    [(ngModel)]="value"
                >
                    Enter password
                </tui-input-password>
            `,
        }),
    );

    it(
        'removes [tuiTextfieldLabelOutside]="true" with inner input',
        migrate({
            template: /* HTML */ `
                <tui-input-password
                    [tuiTextfieldLabelOutside]="true"
                    [(ngModel)]="value"
                >
                    Enter password
                    <input
                        tuiTextfieldLegacy
                        type="password"
                    />
                </tui-input-password>
            `,
        }),
    );

    it(
        'does not duplicates already existing type="password"',
        migrate({
            template: /* HTML */ `
                <tui-input-password [(ngModel)]="value">
                    <input
                        tuiTextfieldLegacy
                        type="password"
                        [maskito]="maskitoOptions"
                    />
                </tui-input-password>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputTimeModule to TuiInputTime',
        migrate({
            component: `
                import {TuiInputTimeModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    TuiInputTimeModule,
                  ],
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    TuiInputTimeModule,
                  ],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-time>Pick a time</tui-input-time>

                <tui-input-time [formControl]="control">Start time</tui-input-time>

                <tui-input-time
                    formControlName="time"
                    [tuiTextfieldCleaner]="true"
                >
                    End time
                </tui-input-time>

                <tui-input-time [(ngModel)]="value">
                    <input tuiTextfieldLegacy />
                </tui-input-time>
            `,
        }),
    );

    it(
        'moves [mode] to <input tuiInputTime>',
        migrate({
            template: /* HTML */ `
                <tui-input-time
                    formControlName="time"
                    [mode]="'HH:MM'"
                >
                    Time
                </tui-input-time>
            `,
        }),
    );

    it(
        'renames [items] to [accept] and adds TODO about data-list-wrapper',
        migrate({
            template: /* HTML */ `
                <tui-input-time
                    formControlName="time"
                    [items]="timeItems"
                >
                    Time
                </tui-input-time>
            `,
        }),
    );

    it(
        'keeps [disabledItemHandler] on tui-textfield, adds TODO for [itemsHidden], silently removes strict and [itemSize]',
        migrate({
            template: /* HTML */ `
                <tui-input-time
                    formControlName="time"
                    [disabledItemHandler]="handler"
                    [itemsHidden]="false"
                    [itemSize]="'s'"
                    [strict]="true"
                >
                    Time
                </tui-input-time>
            `,
        }),
    );

    it(
        'removes [tuiTextfieldLabelOutside] from tui-input-time',
        migrate({
            template: /* HTML */ `
                <tui-input-time
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Choose time
                </tui-input-time>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

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
            template: `
                <tui-input-time>Pick a time</tui-input-time>

                <tui-input-time
                    [formControl]="control"
                >
                    Start time
                </tui-input-time>

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
            template: `
                <tui-input-time [mode]="'HH:MM'" formControlName="time">
                    Time
                </tui-input-time>`,
        }),
    );

    it(
        'renames [items] to [accept] and adds TODO about data-list-wrapper',
        migrate({
            template: `
                <tui-input-time
                    [items]="timeItems"
                    formControlName="time"
                >
                    Time
                </tui-input-time>`,
        }),
    );

    it(
        'keeps [disabledItemHandler] on tui-textfield, adds TODO for [itemsHidden], silently removes strict and [itemSize]',
        migrate({
            template: `
                <tui-input-time
                    formControlName="time"
                    [strict]="true"
                    [itemsHidden]="false"
                    [itemSize]="'s'"
                    [disabledItemHandler]="handler"
                >
                    Time
                </tui-input-time>`,
        }),
    );

    afterEach(() => resetActiveProject());
});

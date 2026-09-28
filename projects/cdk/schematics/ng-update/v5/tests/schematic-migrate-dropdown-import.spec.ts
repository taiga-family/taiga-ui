import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update import TuiDropdown for migrated dropdown hosts', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'imports TuiDropdown when a migrated tui-select keeps a dropdown',
        migrate({
            component: /* TypeScript */ `
                import {TuiSelectModule} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiSelectModule],
                    templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-select
                    [formControl]="control"
                    [(tuiDropdownOpen)]="open"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-select>
            `,
        }),
    );

    it(
        'imports TuiDropdown when a migrated tui-input keeps a dropdown',
        migrate({
            component: /* TypeScript */ `
                import {TuiInputModule} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiInputModule],
                    templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input [(ngModel)]="value">
                    Label
                    <tui-data-list *tuiDataList>
                        <button tuiOption>A</button>
                    </tui-data-list>
                </tui-input>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

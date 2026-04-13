import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update experimental dialog', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces experimental TuiDialogService, TuiDialogOptions and TuiDialogContext import to @taiga-ui/core',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import type {TuiDialogContext, TuiDialogOptions} from '@taiga-ui/experimental';
                import {TuiDialogService} from '@taiga-ui/experimental';
                import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
                import {BehaviorSubject} from 'rxjs';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialogService = inject(TuiDialogService);
                    private readonly loading$ = new BehaviorSubject<boolean>(false);

                    showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
                        this.dialogService
                            .open(content, {
                                label: 'Test',
                                dismissible: this.loading$.pipe(map((loading) => !loading)),
                                closable: this.loading$.pipe(map((loading) => !loading)),
                            } as TuiDialogOptions<any>)
                            .subscribe();
                    }
                }
            `,
        }),
    );

    it(
        'replaces experimental tuiDialogOptionsProvider import to @taiga-ui/core',
        migrate({
            component: `
                import {tuiDialogOptionsProvider} from '@taiga-ui/experimental';

                const closable = false;

                tuiDialogOptionsProvider({closable});
                tuiDialogOptionsProvider({size: 'm', closable: true});
            `,
        }),
    );

    it(
        'replaces experimental TUI_DIALOG_DEFAULT_OPTIONS import to @taiga-ui/core and replace to TUI_DIALOG_OPTIONS',
        migrate({
            component: `
                import {TUI_DIALOG_DEFAULT_OPTIONS} from '@taiga-ui/experimental';
            `,
        }),
    );

    it(
        'replaces experimental TUI_DIALOG_OPTIONS import to @taiga-ui/core',
        migrate({
            component: `
                import {TUI_DIALOG_OPTIONS} from '@taiga-ui/experimental';
            `,
        }),
    );

    it(
        'replaces experimental TuiDialog import to @taiga-ui/core',
        migrate({
            component: `
                import {TuiDialog} from '@taiga-ui/experimental';
            `,
        }),
    );

    it(
        'replaces experimental TuiDialogComponent import to @taiga-ui/core',
        migrate({
            component: `
                import {TuiDialogComponent} from '@taiga-ui/experimental';
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

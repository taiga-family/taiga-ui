import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update closeable', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces closeable with closable for options in templates',
        migrate({
            template: `
                <ng-template
                    [tuiDialogOptions]="{
                        size: 's',
                        closeable: true,
                        header: header
                    }"
                    [(tuiDialog)]="open"
                />
                <ng-template
                    [tuiAlertOptions]="{closeable: false, label: 'Directive', autoClose: 0}"
                    [(tuiAlert)]="show"
                />
                <ng-template
                    [tuiNotificationOptions]="{'closeable': false}"
                    [(tuiNotification)]="show"
                />
            `,
        }),
    );

    it(
        'replaces closeable with closable for TuiDialogService open options (class field inject)',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import type {TuiDialogContext} from '@taiga-ui/core';
                import {TuiDialogService} from '@taiga-ui/core';
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
                                closeable: this.loading$.pipe(map((loading) => !loading)),
                            })
                            .subscribe();
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable for direct inject(TuiDialogService).open(...) call',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    constructor() {
                        const closeable = true;

                        inject(TuiDialogService).open('content', {
                            closeable,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable when service stored in local variable',
        migrate({
            component: `
                import {Component, inject, afterViewInit} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    constructor() {
                        const dialog = inject(TuiDialogService);

                        afterViewInit(() => {
                            dialog.open('content', {
                                closeable: false,
                                other: 1,
                            });
                        });
                    }
                }
            `,
        }),
    );

    it(
        'replaces string literal key "closeable" with "closable"',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = inject(TuiDialogService);

                    open(): void {
                        this.dialog.open('content', {
                            "closeable": true,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'does not change if there is no second argument',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = inject(TuiDialogService);

                    open(): void {
                        this.dialog.open('content');
                    }
                }
            `,
        }),
    );

    it(
        'does not change if second argument is not an object literal',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                const options = {
                    closeable: true,
                };

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = inject(TuiDialogService);

                    open(): void {
                        this.dialog.open('content', options);
                    }
                }
            `,
        }),
    );

    it(
        'does not change closeable for non TuiDialogService receiver with open()',
        migrate({
            component: `
                import {Component} from '@angular/core';

                class NotDialogService {
                    open(_c: unknown, _o: unknown): void {}
                }

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialogService = new NotDialogService();

                    open(): void {
                        this.dialogService.open('content', {
                            closeable: true,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'does not change object properties named closeable outside dialog.open options',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = inject(TuiDialogService);

                    open(): void {
                        const x = {closeable: true};

                        this.dialog.open('content', {
                            closeable: false,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable for TuiAlertService.open call',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiAlertService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    constructor() {
                        inject(TuiAlertService).open('content', {
                            closeable: true,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable for TuiNotificationService.open call',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiNotificationService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    constructor() {
                        inject(TuiNotificationService).open('content', {
                            closeable: true,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable for TuiSheetDialogService.open call',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';

                @Component({standalone: true})
                export class TestComponent {
                    constructor() {
                        inject(TuiSheetDialogService).open('content', {
                            closeable: true,
                        });
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable for tuiDialog call',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {tuiDialog} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = tuiDialog('content', {
                        size: 'm',
                        closeable: true,
                        dismissible: true,
                    });

                    protected showDialog(): void {
                        this.dialog().subscribe();
                    }
                }
            `,
        }),
    );

    it(
        'replaces closeable with closable for tuiDialogOptionsProvider call',
        migrate({
            component: `
                import {tuiDialogOptionsProvider} from '@taiga-ui/core';

                const closeable = false;

                tuiDialogOptionsProvider({closeable});
                tuiDialogOptionsProvider({size: 'm', closeable: true});
            `,
        }),
    );

    it(
        'replaces closeable with closable for tuiSheetDialogOptionsProvider call',
        migrate({
            component: `
                import {tuiSheetDialogOptionsProvider} from '@taiga-ui/addon-mobile';

                const closeable = false;

                tuiSheetDialogOptionsProvider({closeable});
                tuiSheetDialogOptionsProvider({size: 'm', closeable: true});
            `,
        }),
    );

    it(
        'replaces closeable with closable for tuiAlertOptionsProvider call',
        migrate({
            component: `
                import {tuiAlertOptionsProvider} from '@taiga-ui/core';

                const closeable = false;

                tuiAlertOptionsProvider({closeable});
                tuiAlertOptionsProvider({closeable: true, appearance: 'negative'});
            `,
        }),
    );

    it(
        'replaces closeable with closable for tuiNotificationOptionsProvider call',
        migrate({
            component: `
                import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

                const closeable = false;

                tuiNotificationOptionsProvider({closeable});
                tuiNotificationOptionsProvider({closeable: true, appearance: 'negative'});
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrateI18nSignalTokens', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'unwraps of() into signal() for TUI_DIGITAL_INFORMATION_UNITS',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useValue: of(['Б', 'КБ', 'МБ']),
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'unwraps of() with a referenced value into signal()',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                const UNITS = ['Б', 'КБ', 'МБ'];

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: of(UNITS)},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps a plain array literal useValue into signal()',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_COUNTRIES} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_COUNTRIES, useValue: {RU: 'Россия'}}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'reuses an existing signal import',
        migrate({
            component: /* TypeScript */ `
                import {Component, signal} from '@angular/core';
                import {TUI_FILE_TEXTS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_FILE_TEXTS, useValue: of({loading: 'Загрузка'})},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates a provider declared inside @NgModule',
        migrate({
            component: /* TypeScript */ `
                import {NgModule} from '@angular/core';
                import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @NgModule({
                    providers: [
                        {
                            provide: TUI_PAGINATION_TEXTS,
                            useValue: of(['Назад', 'Вперёд']),
                        },
                    ],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        'promotes a stream useValue to a toSignal factory',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useValue: inject(SomeService).units$,
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps a useFactory stream with toSignal',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => of(['Б']),
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps a useFactory with dependencies and keeps its parameters',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_FILE_TEXTS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_FILE_TEXTS,
                            useFactory: (service: SomeService) => service.fileTexts$,
                            deps: [SomeService],
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds a TODO when useFactory has a block body',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => {
                                return of(['Б']);
                            },
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'leaves an already signal-wrapped value untouched while migrating siblings',
        migrate({
            component: /* TypeScript */ `
                import {Component, signal} from '@angular/core';
                import {
                    TUI_DIGITAL_INFORMATION_UNITS,
                    TUI_FILE_TEXTS,
                } from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: signal(['Б'])},
                        {provide: TUI_FILE_TEXTS, useValue: of({loading: 'Загрузка'})},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

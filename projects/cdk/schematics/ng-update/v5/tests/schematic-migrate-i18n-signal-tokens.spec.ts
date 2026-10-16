import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration, runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update migrateI18nSignalTokens', () => {
    const migrate = createMigration({collection});
    const migrateComponent = async (component: string): Promise<string> => {
        const {component: result} = await runMigration({component, collection});

        return result;
    };

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
        'wraps a block-body useFactory return with toSignal',
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
        'wraps a block-body useFactory return declared after local statements',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => {
                                const service = inject(SomeService);

                                return service.units$;
                            },
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps only the factory return, leaving nested callback returns untouched',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {map} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => {
                                return inject(SomeService).units$.pipe(
                                    map((units) => {
                                        return units;
                                    }),
                                );
                            },
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds a TODO when a block-body useFactory has no returnable value',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => {
                                inject(SomeService).setup();
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

    it(
        'leaves a signal referenced by name untouched while migrating siblings',
        migrate({
            component: /* TypeScript */ `
                import {Component, signal} from '@angular/core';
                import {
                    TUI_DIGITAL_INFORMATION_UNITS,
                    TUI_FILE_TEXTS,
                } from '@taiga-ui/kit';
                import {of} from 'rxjs';

                const UNITS = signal(['Б', 'КБ', 'МБ']);

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: UNITS},
                        {provide: TUI_FILE_TEXTS, useValue: of({loading: 'Загрузка'})},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    // Snapshots only cover changed files, so untouched providers need explicit assertions.
    describe('keeps signal-based providers as is', () => {
        it('keeps a signal referenced by name', async () => {
            const component = /* TypeScript */ `
                import {Component, signal} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                const UNITS = signal(['Б', 'КБ', 'МБ']);

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: UNITS},
                    ],
                })
                export class TestComponent {}
            `;

            expect(await migrateComponent(component)).toBe(component);
        });

        it('keeps a computed() value', async () => {
            const component = /* TypeScript */ `
                import {Component, computed, signal} from '@angular/core';
                import {TUI_FILE_TEXTS} from '@taiga-ui/kit';

                const TEXTS = signal({loading: 'Загрузка'});

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_FILE_TEXTS, useValue: computed(() => TEXTS())},
                    ],
                })
                export class TestComponent {}
            `;

            expect(await migrateComponent(component)).toBe(component);
        });

        it('keeps a signal() call with explicit type arguments', async () => {
            const component = /* TypeScript */ `
                import {Component, signal} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useValue: signal<readonly string[]>(['Б']),
                        },
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => signal<readonly string[]>(['Б']),
                        },
                    ],
                })
                export class TestComponent {}
            `;

            expect(await migrateComponent(component)).toBe(component);
        });

        it('keeps a parenthesized signal() call', async () => {
            // No language marker: the formatter would strip the parentheses under test.
            const component = `
                import {Component, signal} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: (signal(['Б']))},
                    ],
                })
                export class TestComponent {}
            `;

            expect(await migrateComponent(component)).toBe(component);
        });

        it('keeps a signal() call imported under an alias', async () => {
            const component = /* TypeScript */ `
                import {Component, signal as createSignal} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useValue: createSignal(['Б']),
                        },
                    ],
                })
                export class TestComponent {}
            `;

            expect(await migrateComponent(component)).toBe(component);
        });
    });

    describe('classifies values behind references', () => {
        it('wraps a plain constant referenced by name into signal()', async () => {
            const result = await migrateComponent(/* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';

                const UNITS = ['Б', 'КБ', 'МБ'];

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: UNITS},
                    ],
                })
                export class TestComponent {}
            `);

            expect(result).toContain('useValue: signal(UNITS)');
            expect(result).not.toContain('toSignal');
        });

        it('wraps a property of a plain constant into signal()', async () => {
            const result = await migrateComponent(/* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_FILE_TEXTS} from '@taiga-ui/kit';

                const KIT_TEXTS = {ru: {loading: 'Загрузка'}};

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_FILE_TEXTS, useValue: KIT_TEXTS.ru}],
                })
                export class TestComponent {}
            `);

            expect(result).toContain('useValue: signal(KIT_TEXTS.ru)');
            expect(result).not.toContain('toSignal');
        });

        it('wraps every return of a block-body useFactory by its kind', async () => {
            const result = await migrateComponent(/* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                @Component({
                    standalone: true,
                    providers: [
                        {
                            provide: TUI_DIGITAL_INFORMATION_UNITS,
                            useFactory: () => {
                                if (inject(SomeService).short) {
                                    return ['Б'];
                                }

                                return of(['Байт']);
                            },
                        },
                    ],
                })
                export class TestComponent {}
            `);

            expect(result).toContain("return signal(['Б']);");
            expect(result).toContain("return toSignal(of(['Байт']));");
        });

        it('adds a TODO for a reference whose value cannot be resolved', async () => {
            const result = await migrateComponent(/* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_FILE_TEXTS} from '@taiga-ui/kit';
                import {TEXTS} from '@external/texts';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_FILE_TEXTS, useValue: TEXTS}],
                })
                export class TestComponent {}
            `);

            expect(result).toContain('TODO');
            expect(result).toContain('useValue: TEXTS}');
            expect(result).not.toContain('toSignal(TEXTS)');
        });

        it('resolves a shadowed name to its own declaration', async () => {
            const result = await migrateComponent(/* TypeScript */ `
                import {signal} from '@angular/core';
                import {TUI_DIGITAL_INFORMATION_UNITS} from '@taiga-ui/kit';
                import {of} from 'rxjs';

                const UNITS = signal(['Б']);

                export function provideUnits() {
                    const UNITS = of(['КБ']);

                    return [{provide: TUI_DIGITAL_INFORMATION_UNITS, useValue: UNITS}];
                }
            `);

            expect(result).toContain('useFactory: () => toSignal(UNITS)');
        });
    });

    afterEach(() => resetActiveProject());
});

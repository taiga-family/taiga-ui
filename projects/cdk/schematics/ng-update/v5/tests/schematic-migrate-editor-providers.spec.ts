import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update editor providers migration', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames tuiEditorOptionsProvider to provideTuiEditorOptions',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiEditorOptionsProvider} from '@taiga-ui/editor';
                import {TUI_PROPRIETARY_EDITOR_ICONS} from '@taiga-ui/proprietary';

                @Component({
                    template: '',
                    providers: [
                        tuiEditorOptionsProvider({
                            icons: TUI_PROPRIETARY_EDITOR_ICONS,
                        }),
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'replaces TUI_EDITOR_EXTENSIONS useFactory provider with provideTuiEditor with plugins',
        migrate({
            component: /* TypeScript */ `
                import {Component, Injector} from '@angular/core';
                import {
                    TUI_EDITOR_DEFAULT_EXTENSIONS,
                    TUI_EDITOR_EXTENSIONS,
                } from '@taiga-ui/editor';

                @Component({
                    template: '',
                    providers: [
                        {
                            provide: TUI_EDITOR_EXTENSIONS,
                            deps: [Injector],
                            useFactory: (injector: Injector) => [
                                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                                import('@taiga-ui/editor').then(({setup}) =>
                                    setup({injector}),
                                ),
                            ],
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'replaces TUI_EDITOR_EXTENSIONS useValue provider with empty provideTuiEditor',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TUI_EDITOR_DEFAULT_EXTENSIONS,
                    TUI_EDITOR_EXTENSIONS,
                } from '@taiga-ui/editor';

                @Component({
                    template: '',
                    providers: [
                        {
                            provide: TUI_EDITOR_EXTENSIONS,
                            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO when custom useValue extensions are detected',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';
                import {MY_EDITOR_EXTENSIONS} from './my-extensions';

                @Component({
                    template: '',
                    providers: [
                        {
                            provide: TUI_EDITOR_EXTENSIONS,
                            useValue: MY_EDITOR_EXTENSIONS,
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO when custom useFactory without default extensions is detected',
        migrate({
            component: /* TypeScript */ `
                import {Component, Injector} from '@angular/core';
                import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';

                @Component({
                    template: '',
                    providers: [
                        {
                            provide: TUI_EDITOR_EXTENSIONS,
                            deps: [Injector],
                            useFactory: (injector: Injector) => [
                                import('@taiga-ui/editor').then(({setup}) =>
                                    setup({injector}),
                                ),
                            ],
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

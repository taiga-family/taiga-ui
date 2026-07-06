import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiDialog header option', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds a TODO near `header` in a tuiDialog factory call',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiDialog} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = tuiDialog('content', {
                        header: 'Title',
                        size: 'm',
                    });
                }
            `,
        }),
    );

    it(
        'adds a TODO near `header` in a TuiDialogService.open call',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TuiDialogService} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    constructor() {
                        inject(TuiDialogService).open('content', {header: someTemplate});
                    }
                }
            `,
        }),
    );

    it(
        'adds a TODO near `header` in a tuiDialogOptionsProvider call',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiDialogOptionsProvider} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    providers: [tuiDialogOptionsProvider({header: 'Title'})],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds a TODO for every dialog call with `header` in the same file',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiDialog} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog1 = tuiDialog('content', {header: 'Title 1'});
                    private readonly dialog2 = tuiDialog('content', {header: 'Title 2'});
                }
            `,
        }),
    );

    it(
        'does not add a TODO when there is no `header` option',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiDialog} from '@taiga-ui/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly dialog = tuiDialog('content', {
                        label: 'Title',
                        size: 'm',
                    });
                }
            `,
        }),
    );

    it(
        'does not touch a `header` property on an unrelated call',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';

                @Component({standalone: true})
                export class TestComponent {
                    private readonly config = somethingElse({header: 'Title'});
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

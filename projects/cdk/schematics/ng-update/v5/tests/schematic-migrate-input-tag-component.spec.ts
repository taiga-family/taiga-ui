import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiInputTagComponent usage TODO', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'inserts a TODO above @ViewChild(TuiInputTagComponent)',
        migrate({
            component: /* TypeScript */ `
                import {Component, ElementRef, ViewChild} from '@angular/core';
                import {TuiInputTagComponent} from '@taiga-ui/legacy';

                @Component({template: ''})
                export class Test {
                    @ViewChild(TuiInputTagComponent, {static: true})
                    public inputTag!: TuiInputTagComponent;

                    public get input(): unknown {
                        return this.inputTag.nativeFocusableElement;
                    }
                }
            `,
        }),
    );

    it(
        'inserts a TODO above an inject(TuiInputTagComponent) usage',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TuiInputTagComponent} from '@taiga-ui/legacy';

                @Component({template: ''})
                export class Test {
                    private readonly inputTag = inject(TuiInputTagComponent);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

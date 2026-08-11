import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update spread barrel arrays in NgModule imports', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'spreads a barrel replacement inside @NgModule imports',
        migrate({
            component: /* TypeScript */ `
                import {TuiTextareaModule} from '@taiga-ui/legacy';
                import {NgModule} from '@angular/core';

                @NgModule({
                    imports: [TuiTextareaModule],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        'does not spread a barrel replacement in a standalone component',
        migrate({
            component: /* TypeScript */ `
                import {TuiTextareaModule} from '@taiga-ui/legacy';
                import {Component} from '@angular/core';

                @Component({
                    standalone: true,
                    imports: [TuiTextareaModule],
                    template: '',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'keeps neighbors and their order when spreading a barrel element',
        migrate({
            component: /* TypeScript */ `
                import {TuiInputModule} from '@taiga-ui/legacy';
                import {CommonModule} from '@angular/common';
                import {NgModule} from '@angular/core';

                class AaaModule {}
                class ZzzModule {}

                @NgModule({
                    imports: [CommonModule, AaaModule, TuiInputModule, ZzzModule],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        're-migrates a file that already contains spread barrels without doubling them',
        migrate({
            component: /* TypeScript */ `
                import {
                    TuiInputModule,
                    TuiMultiSelectModule,
                    TuiTextfieldControllerModule,
                } from '@taiga-ui/legacy';
                import {TuiTextfield} from '@taiga-ui/core';
                import {NgModule} from '@angular/core';

                @NgModule({
                    imports: [
                        ...TuiTextfield,
                        TuiInputModule,
                        TuiTextfieldControllerModule,
                        TuiMultiSelectModule,
                    ],
                })
                export class TestModule {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update strip invalid spread of collapsed barrels', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'strips the spread from a barrel that became a single class in @NgModule imports',
        migrate({
            component: /* TypeScript */ `
                import {TuiExpand} from '@taiga-ui/core';
                import {NgModule} from '@angular/core';

                @NgModule({
                    imports: [...TuiExpand],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        'strips the TuiActionBar spread and keeps neighbors and their order',
        migrate({
            component: /* TypeScript */ `
                import {TuiActionBar} from '@taiga-ui/kit';
                import {CommonModule} from '@angular/common';
                import {NgModule} from '@angular/core';

                class AaaModule {}
                class ZzzModule {}

                @NgModule({
                    imports: [CommonModule, AaaModule, ...TuiActionBar, ZzzModule],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        'strips the spread in a standalone component too',
        migrate({
            component: /* TypeScript */ `
                import {TuiExpand} from '@taiga-ui/core';
                import {Component} from '@angular/core';

                @Component({
                    standalone: true,
                    imports: [...TuiExpand],
                    template: '',
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

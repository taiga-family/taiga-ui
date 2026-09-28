import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update legacy primitive-textfield', () => {
    it(
        'migrates TuiPrimitiveTextfieldModule import (standalone) and simple template',
        migrate({
            component: /* TypeScript */ `
                import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiPrimitiveTextfieldModule],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-primitive-textfield [(value)]="search">
                    <input
                        tuiTextfieldLegacy
                        [attr.maxlength]="80"
                    />
                </tui-primitive-textfield>
            `,
        }),
    );

    it(
        'spreads TuiTextfield inside @NgModule imports',
        migrate({
            component: /* TypeScript */ `
                import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy';
                import {NgModule} from '@angular/core';

                @NgModule({
                    imports: [TuiPrimitiveTextfieldModule],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        'spreads TuiTextfield next to an existing spread in @NgModule imports',
        migrate({
            component: /* TypeScript */ `
                import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy';
                import {NgModule} from '@angular/core';
                import {SharedImports} from './shared';

                @NgModule({
                    imports: [...SharedImports, TuiPrimitiveTextfieldModule],
                })
                export class TestModule {}
            `,
        }),
    );

    it(
        'migrates wrapper attrs (iconLeft, cleaner), [(value)], labelOutside=true, focusedChange TODO',
        migrate({
            template: /* HTML */ `
                <tui-primitive-textfield
                    [tuiTextfieldIconLeft]="icon"
                    [tuiTextfieldCleaner]="true"
                    [tuiTextfieldLabelOutside]="true"
                    [(value)]="search"
                    (focusedChange)="onFocus($event)"
                    (tuiHoveredChange)="onHover($event)"
                >
                    Search anything
                    <input
                        tuiTextfieldLegacy
                        [attr.maxlength]="80"
                    />
                </tui-primitive-textfield>
            `,
        }),
    );

    it(
        'converts text to <label tuiLabel> when labelOutside is absent',
        migrate({
            template: /* HTML */ `
                <tui-primitive-textfield [(value)]="search">
                    Label
                    <input tuiTextfieldLegacy />
                </tui-primitive-textfield>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

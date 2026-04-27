import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update hint on legacy controls', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {Component} from '@angular/core';
            import {TuiInputModule} from '@taiga-ui/legacy';

            @Component({
                standalone: true,
                templateUrl: './test.html',
                imports: [TuiInputModule],
            })
            export class Test {}
        `,
    });

    describe('basic tuiHintContent migration', () => {
        it(
            'moves [tuiHintContent] to tui-icon with tuiTooltip',
            migrate({template: '<tui-input [tuiHintContent]="hint" />'}),
        );

        it(
            'moves static tuiHintContent to tui-icon with tuiTooltip',
            migrate({template: '<tui-input tuiHintContent="Some hint text" />'}),
        );
    });

    describe('hint with additional directives', () => {
        it(
            'moves tuiHintDirection to tui-icon alongside tuiTooltip',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        tuiHintDirection="left"
                        [tuiHintContent]="hint"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );

        it(
            'moves tuiHintAppearance to tui-icon alongside tuiTooltip',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        tuiHintAppearance="dark"
                        [tuiHintContent]="hint"
                    />
                `,
            }),
        );

        it(
            'moves all tuiHint* directives to tui-icon',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        tuiHintAppearance="dark"
                        tuiHintDirection="left"
                        [tuiHintContent]="hint"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );

        it(
            'moves bound tuiHintDirection and tuiHintAppearance to tui-icon',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [tuiHintAppearance]="appearance"
                        [tuiHintContent]="hint"
                        [tuiHintDirection]="direction"
                    />
                `,
            }),
        );
    });

    describe('different legacy controls', () => {
        it(
            'migrates tuiHintContent on tui-input-number',
            migrate({
                template:
                    '<tui-input-number [tuiHintContent]="hint" tuiHintDirection="top" />',
            }),
        );

        it(
            'migrates tuiHintContent on tui-combo-box',
            migrate({
                template: /* HTML */ `
                    <tui-combo-box
                        tuiHintAppearance="dark"
                        [tuiHintContent]="hint"
                        [(ngModel)]="value"
                    >
                        Label
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items | tuiFilterByInput"
                        />
                    </tui-combo-box>
                `,
            }),
        );

        it(
            'migrates tuiHintContent on tui-select',
            migrate({
                template: /* HTML */ `
                    <tui-select
                        [tuiHintContent]="hint"
                        [(ngModel)]="value"
                    >
                        Select user
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        />
                    </tui-select>
                `,
            }),
        );

        it(
            'migrates tuiHintContent on tui-multi-select',
            migrate({
                template: /* HTML */ `
                    <tui-multi-select
                        tuiHintDirection="right"
                        [formControl]="control"
                        [tuiHintContent]="hint"
                        [(search)]="search"
                    >
                        Star Wars persons
                        <tui-data-list-wrapper
                            *tuiDataList
                            tuiMultiSelectGroup
                            [items]="filter(search)"
                        />
                    </tui-multi-select>
                `,
            }),
        );

        it(
            'migrates tuiHintContent on tui-textarea',
            migrate({template: '<tui-textarea [tuiHintContent]="hint" />'}),
        );

        it(
            'migrates tuiHintContent on tui-input-date',
            migrate({
                template:
                    '<tui-input-date [tuiHintContent]="hint" tuiHintDirection="bottom">Label</tui-input-date>',
            }),
        );

        it(
            'migrates tuiHintContent on tui-input-date-range',
            migrate({
                template:
                    '<tui-input-date-range [tuiHintContent]="hint">Label</tui-input-date-range>',
            }),
        );

        it(
            'migrates tuiHintContent on tui-input-phone',
            migrate({
                template:
                    '<tui-input-phone [tuiHintContent]="hint">Label</tui-input-phone>',
            }),
        );

        it(
            'migrates tuiHintContent on tui-input-tag',
            migrate({
                template: '<tui-input-tag [tuiHintContent]="hint">Label</tui-input-tag>',
            }),
        );

        it(
            'migrates tuiHintContent on tui-input-time',
            migrate({
                template:
                    '<tui-input-time [tuiHintContent]="hint">Label</tui-input-time>',
            }),
        );
    });

    describe('multiple occurrences', () => {
        it(
            'migrates multiple elements with tuiHintContent in one template',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        tuiHintDirection="left"
                        [tuiHintContent]="hint1"
                    ></tui-input>
                    <tui-select
                        tuiHintAppearance="dark"
                        [tuiHintContent]="hint2"
                    ></tui-select>
                `,
            }),
        );
    });

    describe('import additions', () => {
        it(
            'adds TuiTooltip and TuiIcon imports when tuiHintContent is present',
            migrate({
                component: `
                    import {Component} from '@angular/core';
                    import {TuiInputModule} from '@taiga-ui/legacy';

                    @Component({
                        standalone: true,
                        templateUrl: './test.html',
                        imports: [TuiInputModule],
                    })
                    export class Test {}
                `,
                template: '<tui-input [tuiHintContent]="hint" />',
            }),
        );

        it(
            'does not duplicate TuiIcon import if already present',
            migrate({
                component: `
                    import {Component} from '@angular/core';
                    import {TuiIcon} from '@taiga-ui/core';
                    import {TuiInputModule} from '@taiga-ui/legacy';

                    @Component({
                        standalone: true,
                        templateUrl: './test.html',
                        imports: [TuiInputModule, TuiIcon],
                    })
                    export class Test {}
                `,
                template: '<tui-input [tuiHintContent]="hint" />',
            }),
        );

        it(
            'inline template',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';
                    import {FormsModule} from '@angular/forms';
                    import {TuiHint} from '@taiga-ui/core';
                    import {TuiInputModule} from '@taiga-ui/legacy';

                    @Component({
                        selector: 'date-range-mask-doc-example-3',
                        imports: [
                            FormsModule,
                            TuiHint,
                            TuiInputModule,
                        ],
                        template: \`
                            <tui-input
                                [tuiHintContent]="hint"
                                [(ngModel)]="value"
                            >
                                <input
                                    inputmode="decimal"
                                    tuiTextfieldLegacy
                                />
                            </tui-input>
                        \`,
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class DateRangeMaskDocExample3 {
                        value = '01.01.2023 – 05.01.2023';
                        hint = 'any content';
                    }
                `,
            }),
        );
    });

    describe('should not change', () => {
        it(
            'does not touch legacy control without tuiHintContent',
            migrate({template: '<tui-input formControlName="value" />'}),
        );

        it(
            'does not touch tui-icon that already has tuiTooltip',
            migrate({
                template: /* HTML */ `
                    <tui-textfield>
                        <input tuiInput />
                        <tui-icon
                            tuiHintDirection="left"
                            [tuiTooltip]="hint"
                        />
                    </tui-textfield>
                `,
            }),
        );
    });

    afterEach(() => resetActiveProject());
});

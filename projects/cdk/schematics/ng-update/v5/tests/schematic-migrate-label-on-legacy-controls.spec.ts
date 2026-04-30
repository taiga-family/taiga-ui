import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update label on legacy controls', () => {
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

    describe('tui-input', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> has no placeholder',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [style.max-width.rem]="20"
                        [(ngModel)]="value"
                    >
                        Enter number

                        <input
                            tuiTextfieldLegacy
                            [maskito]="maskitoOptions"
                            (change)="log($event)"
                        />
                    </tui-input>
                `,
            }),
        );

        it(
            'preserves plain text label and keeps existing placeholder on inner <input tuiTextfieldLegacy>',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [style.max-width.rem]="30"
                        [(ngModel)]="value"
                    >
                        Japanese yen
                        <input
                            inputmode="decimal"
                            placeholder="¥1,2345,6789"
                            tuiTextfieldLegacy
                            [maskito]="maskitoOptions"
                        />
                    </tui-input>
                `,
            }),
        );

        it(
            'preserves HTML label content and keeps existing placeholder on inner <input tuiTextfieldLegacy>',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [style.max-width.rem]="30"
                        [(ngModel)]="value"
                    >
                        <strong>&pi;</strong>
                        -value
                        <input
                            inputmode="decimal"
                            placeholder="3,141..."
                            tuiTextfieldLegacy
                            [maskito]="maskitoOptions"
                        />
                    </tui-input>
                `,
            }),
        );
    });

    describe('tui-input-date', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-date [(ngModel)]="value">
                        Choose a date
                        <input
                            placeholder="dd.mm.yyyy"
                            tuiTextfieldLegacy
                        />
                    </tui-input-date>
                `,
            }),
        );
    });

    describe('tui-input-date-range', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-date-range [(ngModel)]="value">
                        Choose a range
                        <input
                            placeholder="dd.mm.yyyy – dd.mm.yyyy"
                            tuiTextfieldLegacy
                        />
                    </tui-input-date-range>
                `,
            }),
        );
    });

    describe('tui-input-time', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-time [(ngModel)]="value">
                        Pick a time
                        <input
                            placeholder="hh:mm"
                            tuiTextfieldLegacy
                        />
                    </tui-input-time>
                `,
            }),
        );
    });

    describe('tui-input-month', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-month [(ngModel)]="value">
                        Your month
                        <input
                            placeholder="MM.YYYY"
                            tuiTextfieldLegacy
                        />
                    </tui-input-month>
                `,
            }),
        );
    });

    describe('tui-input-year', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-year [(ngModel)]="value">
                        Your year
                        <input
                            placeholder="Not 2022 please"
                            tuiTextfieldLegacy
                        />
                    </tui-input-year>
                `,
            }),
        );
    });

    describe('tui-input-password', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-password [(ngModel)]="value">
                        Password
                        <input
                            tuiTextfieldLegacy
                            type="password"
                        />
                    </tui-input-password>
                `,
            }),
        );
    });

    describe('tui-input-phone', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-phone [(ngModel)]="value">
                        Your phone
                        <input
                            placeholder="+7 (___) ___-__-__"
                            tuiTextfieldLegacy
                        />
                    </tui-input-phone>
                `,
            }),
        );
    });

    describe('tui-input-phone-international', () => {
        it(
            'preserves plain text label when inner <input tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-input-phone-international [(ngModel)]="value">
                        Your phone
                        <input
                            placeholder="+7 000 000-00-00"
                            tuiTextfieldLegacy
                        />
                    </tui-input-phone-international>
                `,
            }),
        );
    });

    describe('tui-textarea', () => {
        it(
            'preserves plain text label when inner <textarea tuiTextfieldLegacy> is present',
            migrate({
                template: /* HTML */ `
                    <tui-textarea [(ngModel)]="value">
                        Bio
                        <textarea
                            placeholder="Write a few words"
                            tuiTextfieldLegacy
                        ></textarea>
                    </tui-textarea>
                `,
            }),
        );
    });

    afterEach(() => resetActiveProject());
});

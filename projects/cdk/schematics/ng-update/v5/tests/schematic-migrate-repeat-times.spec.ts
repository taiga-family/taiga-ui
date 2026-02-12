import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tuiRepeatTimes', () => {
    async function migrate(template: string): Promise<ReturnType<typeof runMigration>> {
        return runMigration({
            template,
            component: `
                import {Component} from '@angular/core';
                import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiRepeatTimesPipe],
                })
                export class Test {}
            `,
            collection,
        });
    }

    it('migrates *ngFor with tuiRepeatTimes to @for', async () => {
        const {template} = await migrate(
            '<div *ngFor="let index of 5 | tuiRepeatTimes">{{ index }}</div>',
        );

        expect(template).toEqual(
            "@for (_ of '-'.repeat(5); track $index) {\n<div>{{ $index }}</div>\n}",
        );
    });

    it('removes TuiRepeatTimesPipe import and usage', async () => {
        const {component} = await migrate('');

        expect(component).not.toContain('TuiRepeatTimesPipe');
        expect(component).not.toContain('@taiga-ui/cdk');
    });

    it('migrates with variable expression', async () => {
        const {template} = await migrate(
            '<span *ngFor="let i of count | tuiRepeatTimes">{{ i }}</span>',
        );

        expect(template).toEqual(
            "@for (_ of '-'.repeat(count); track $index) {\n<span>{{ $index }}</span>\n}",
        );
    });

    it('migrates ng-container by unwrapping', async () => {
        const {template} = await migrate(
            '<ng-container *ngFor="let i of 3 | tuiRepeatTimes"><span>{{ i }}</span></ng-container>',
        );

        expect(template).toEqual(
            "@for (_ of '-'.repeat(3); track $index) {<span>{{ $index }}</span>}",
        );
    });

    it('preserves other attributes on the element', async () => {
        const {template} = await migrate(
            '<div *ngFor="let i of 4 | tuiRepeatTimes" class="item" [attr.data-index]="i">{{ i }}</div>',
        );

        expect(template).toEqual(
            '@for (_ of \'-\'.repeat(4); track $index) {\n<div class="item" [attr.data-index]="$index">{{ $index }}</div>\n}',
        );
    });

    it('does not touch *ngFor without tuiRepeatTimes', async () => {
        const {template} = await migrate(
            '<div *ngFor="let item of items">{{ item }}</div>',
        );

        expect(template).toEqual('<div *ngFor="let item of items">{{ item }}</div>');
    });

    it('migrates nested inside other elements', async () => {
        const {template} = await migrate(
            `<ul>
    <li *ngFor="let idx of 3 | tuiRepeatTimes">{{ idx }}</li>
</ul>`,
        );

        expect(template).toEqual(
            `<ul>
    @for (_ of '-'.repeat(3); track $index) {
    <li>{{ $index }}</li>
    }
</ul>`,
        );
    });

    it('migrates multiple tuiRepeatTimes in same template', async () => {
        const {template} = await migrate(
            `<div *ngFor="let i of 2 | tuiRepeatTimes">{{ i }}</div>
<span *ngFor="let j of 5 | tuiRepeatTimes">{{ j }}</span>`,
        );

        expect(template).toContain("'-'.repeat(2)");
        expect(template).toContain("'-'.repeat(5)");
        expect(template).not.toContain('tuiRepeatTimes');
    });

    it('migrates with member expression', async () => {
        const {template} = await migrate(
            '<div *ngFor="let i of config.count | tuiRepeatTimes">{{ i }}</div>',
        );

        expect(template).toEqual(
            "@for (_ of '-'.repeat(config.count); track $index) {\n<div>{{ $index }}</div>\n}",
        );
    });

    it('full before/after comparison with nested content', async () => {
        const {template, component} = await migrate(
            `<div class="wrapper">
    <ul class="list">
        <li *ngFor="let index of items.length | tuiRepeatTimes" class="item" [class.active]="index === selected">
            <span>Item #{{ index }}</span>
            <button (click)="select(index)">Select</button>
        </li>
    </ul>
</div>`,
        );

        expect(template).toEqual(
            `<div class="wrapper">
    <ul class="list">
        @for (_ of '-'.repeat(items.length); track $index) {
        <li class="item" [class.active]="$index === selected">
            <span>Item #{{ $index }}</span>
            <button (click)="select($index)">Select</button>
        </li>
        }
    </ul>
</div>`,
        );

        expect(component).not.toContain('TuiRepeatTimesPipe');
        expect(component).not.toContain('@taiga-ui/cdk');
        expect(component).toContain('imports: []');
    });

    afterEach(() => resetActiveProject());
});

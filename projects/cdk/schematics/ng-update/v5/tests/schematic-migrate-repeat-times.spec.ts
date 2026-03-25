import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiRepeatTimes', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
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
    });

    it(
        'migrates *ngFor with tuiRepeatTimes to @for',
        migrate({
            template: '<div *ngFor="let index of 5 | tuiRepeatTimes">{{ index }}</div>',
        }),
    );

    it('removes TuiRepeatTimesPipe import and usage', migrate({template: ''}));

    it(
        'migrates with variable expression',
        migrate({
            template: '<span *ngFor="let i of count | tuiRepeatTimes">{{ i }}</span>',
        }),
    );

    it(
        'migrates ng-container by unwrapping',
        migrate({
            template:
                '<ng-container *ngFor="let i of 3 | tuiRepeatTimes"><span>{{ i }}</span></ng-container>',
        }),
    );

    it(
        'preserves other attributes on the element',
        migrate({
            template:
                '<div *ngFor="let i of 4 | tuiRepeatTimes" class="item" [attr.data-index]="i">{{ i }}</div>',
        }),
    );

    it(
        'does not touch *ngFor without tuiRepeatTimes',
        migrate({template: '<div *ngFor="let item of items">{{ item }}</div>'}),
    );

    it(
        'migrates nested inside other elements',
        migrate({
            template: /* HTML */ `
                <ul>
                    <li *ngFor="let idx of 3 | tuiRepeatTimes">{{ idx }}</li>
                </ul>
            `,
        }),
    );

    it(
        'migrates multiple tuiRepeatTimes in same template',
        migrate({
            template: /* HTML */ `
                <div *ngFor="let i of 2 | tuiRepeatTimes">{{ i }}</div>
                <span *ngFor="let j of 5 | tuiRepeatTimes">{{ j }}</span>
            `,
        }),
    );

    it(
        'migrates with member expression',
        migrate({
            template:
                '<div *ngFor="let i of config.count | tuiRepeatTimes">{{ i }}</div>',
        }),
    );

    it(
        'full before/after comparison with nested content',
        migrate({
            template: /* HTML */ `
                <div class="wrapper">
                    <ul class="list">
                        <li
                            *ngFor="let index of items.length | tuiRepeatTimes"
                            class="item"
                            [class.active]="index === selected"
                        >
                            <span>Item #{{ index }}</span>
                            <button (click)="select(index)">Select</button>
                        </li>
                    </ul>
                </div>
            `,
        }),
    );

    it(
        'migrates @for block syntax with tuiRepeatTimes pipe',
        migrate({
            template: /* HTML */ `
                <section class="list">
                    @for (n of 3 | tuiRepeatTimes; track n) {
                    <item />
                    }
                </section>
            `,
        }),
    );

    it(
        'keeps @for tail params while replacing tuiRepeatTimes expression',
        migrate({
            template:
                '@for (n of config.count | tuiRepeatTimes; track n; let isOdd = $odd) { {{n}} }',
        }),
    );

    afterEach(() => resetActiveProject());
});

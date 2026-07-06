import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration, runMigration} from '../../../utils/run-migration';

const COLLECTION = join(__dirname, '../../../migration.json');

const REPEAT_TIMES_COMPONENT = /* TypeScript */ `
    import {Component} from '@angular/core';
    import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

    @Component({
        standalone: true,
        templateUrl: './test.html',
        imports: [TuiRepeatTimesPipe],
    })
    export class Test {}
`;

describe('ng-update tuiRepeatTimes', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: /* TypeScript */ `
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

    it(
        'migrates *tuiRepeatTimes directive to @for with index alias',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiRepeatTimes} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiRepeatTimes],
                })
                export class Test {}
            `,
            template: '<div *tuiRepeatTimes="let x of count">{{ x }}</div>',
        }),
    );

    it(
        'migrates nested *tuiRepeatTimes preserving both variables',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiRepeatTimes} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiRepeatTimes],
                })
                export class Test {}
            `,
            template: /* HTML */ `
                <div
                    *tuiRepeatTimes="let x of columnsNumber"
                    class="t-column"
                >
                    <div
                        *tuiRepeatTimes="let y of rowsNumber"
                        class="t-cell"
                        [class.t-cell_hovered]="hovered(y, x)"
                    ></div>
                </div>
            `,
        }),
    );

    it(
        'migrates *tuiRepeatTimes on ng-container by unwrapping',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiRepeatTimes} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiRepeatTimes],
                })
                export class Test {}
            `,
            template:
                '<ng-container *tuiRepeatTimes="let i of 3"><span>{{ i }}</span></ng-container>',
        }),
    );

    it('keeps the loop value numeric in @for blocks (issue #13823)', async () => {
        const {template} = await runMigration({
            collection: COLLECTION,
            component: REPEAT_TIMES_COMPONENT,
            template:
                '@for (n of config.count | tuiRepeatTimes; track n; let isOdd = $odd) { {{n}} }',
        });

        // `'-'.repeat(N)` only provides the iteration count
        expect(template).toContain("'-'.repeat(config.count)");
        // the loop value must stay numeric — it is $index, not the '-' string char
        expect(template).toContain('track $index');
        expect(template).toContain('let n = $index');
        expect(template).not.toMatch(/track\s+n\b/);
        // unrelated tail params are preserved
        expect(template).toContain('let isOdd = $odd');
    });

    afterEach(() => resetActiveProject());
});

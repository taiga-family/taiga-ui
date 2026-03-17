import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({
    collection: join(__dirname, '../../../migration.json'),
    component: `
        import {Component} from '@angular/core';
        import {TuiSidebar} from '@taiga-ui/addon-mobile';

        @Component({
            standalone: true,
            imports: [TuiSidebar],
            templateUrl: './test.html',
        })
        export class TestComponent {
            protected open = false;
        }
    `,
});

describe('ng-update sidebar to drawer', () => {
    it(
        'replaces TuiSidebar import with TuiDrawer and TuiPopup',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiSidebar} from '@taiga-ui/addon-mobile';

                @Component({
                    standalone: true,
                    imports: [TuiSidebar],
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected open = false;
                }
            `,
        }),
    );

    it(
        'migrates simple *tuiSidebar directive without extra comments',
        migrate({template: '<div *tuiSidebar="open">Content</div>'}),
    );

    it(
        "migrates *tuiSidebar with direction: 'right' without extra comments",
        migrate({
            template: '<div *tuiSidebar="open; direction: \'right\'">Content</div>',
        }),
    );

    it(
        "migrates *tuiSidebar with direction: 'left' without extra comments",
        migrate({template: '<div *tuiSidebar="open; direction: \'left\'">Content</div>'}),
    );

    it(
        'migrates *tuiSidebar with dynamic direction expression and adds TODO comment',
        migrate({template: '<div *tuiSidebar="open; direction: myDir">Content</div>'}),
    );

    it(
        'migrates *tuiSidebar with autoWidth and adds TODO comment',
        migrate({template: '<div *tuiSidebar="open; autoWidth: true">Content</div>'}),
    );

    it(
        "migrates *tuiSidebar with direction: 'right' and autoWidth",
        migrate({
            template:
                '<div *tuiSidebar="open; direction: \'right\'; autoWidth: true">Content</div>',
        }),
    );

    it(
        'preserves other attributes on the element',
        migrate({
            template:
                '<div class="my-class" *tuiSidebar="open" (click)="close()">Content</div>',
        }),
    );

    it(
        'migrates multiline content inside *tuiSidebar',
        migrate({
            template: [
                '<div *tuiSidebar="open">',
                '    <header>Header</header>',
                '    <p>Content</p>',
                '</div>',
            ].join('\n'),
        }),
    );

    it(
        'migrates ng-template with *tuiSidebar',
        migrate({
            template:
                '<ng-template *tuiSidebar="open; direction: \'right\'"><span>Content</span></ng-template>',
        }),
    );

    afterEach(() => resetActiveProject());
});

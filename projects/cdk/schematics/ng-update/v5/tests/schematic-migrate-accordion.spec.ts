import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update accordion item', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {TuiAccordion} from '@taiga-ui/experimental';

            @Component({
                templateUrl: './test.html',
                imports: [TuiAccordion],
            })
            export class TestComponent {}
        `,
    });

    it(
        'migrates nested accordion items',
        migrate({
            template: `
                <tui-accordion>
                    <tui-accordion-item [open]="true">
                        Level 1
                        <ng-template tuiAccordionItemContent>
                            Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities

                            <tui-accordion>
                                <tui-accordion-item [open]="true" borders="top-bottom" class="some">
                                    Level 2
                                    <ng-template tuiAccordionItemContent>
                                        The main set of components used to build Taiga UI based Angular applications

                                        <tui-accordion>
                                            <tui-accordion-item [open]="true">
                                                Level 3
                                                <ng-template tuiAccordionItemContent>
                                                    Basic elements needed to develop components, directives and more using Taiga UI
                                                    design system
                                                </ng-template>
                                            </tui-accordion-item>
                                        </tui-accordion>
                                    </ng-template>
                                </tui-accordion-item>
                            </tui-accordion>
                        </ng-template>
                    </tui-accordion-item>
                </tui-accordion>
            `,
        }),
    );

    it(
        'replaces standalone accordion item with new structure',
        migrate({
            template: `
                <tui-accordion-item>
                    Taiga UI lazy
                    <ng-template tuiAccordionItemContent>I'm lazy content</ng-template>
                </tui-accordion-item>

                <tui-accordion-item>
                    Taiga UI eager
                    <div tuiAccordionItemContent>I'm eager content</div>
                </tui-accordion-item>
            `,
        }),
    );

    it(
        'migrates standalone tui-expand content template',
        migrate({
            template: `
                <tui-expand [expanded]="expanded">
                    <ng-template tuiExpandContent>
                        <p>NOBODY expects the Spanish Inquisition!</p>
                    </ng-template>
                </tui-expand>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

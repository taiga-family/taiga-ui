import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update accordion item', () => {
    async function migrate(template: string): Promise<string> {
        const {template: result} = await runMigration({
            template,
            collection,
            component: `
                import {TuiAccordion} from '@taiga-ui/experimental';

                @Component({
                    templateUrl: './test.html',
                    imports: [TuiAccordion],
                })
                export class TestComponent {}
            `,
        });

        return result;
    }

    it('migrates nested accordion items', async () => {
        const before = `
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
        `;

        const after = `
<!-- TODO: (Taiga UI migration) tui-accordion-item has been removed. Use new tuiAccordion instead. See example https://taiga-ui.dev/components/accordion -->
<tui-accordion>
    <button [tuiAccordion]="true">Level 1</button>
    <tui-expand>
        Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities

        <tui-accordion>
            <button [tuiAccordion]="true">Level 2</button>
            <tui-expand class="some">
                The main set of components used to build Taiga UI based Angular applications

                <tui-accordion>
                    <button [tuiAccordion]="true">Level 3</button>
                    <tui-expand>
                        Basic elements needed to develop components, directives and more using Taiga UI design system
                    </tui-expand>
                </tui-accordion>
            </tui-expand>
        </tui-accordion>
    </tui-expand>
</tui-accordion>
        `;

        expect(await migrate(before)).toEqual(after);
    });

    it('replaces standalone accordion item with new structure', async () => {
        const before = `
<tui-accordion-item>
    Taiga UI lazy
    <ng-template tuiAccordionItemContent>I'm lazy content</ng-template>
</tui-accordion-item>

<tui-accordion-item>
    Taiga UI eager
    <div tuiAccordionItemContent>I'm eager content</div>
</tui-accordion-item>
        `;

        const after = `
<!-- TODO: (Taiga UI migration) tui-accordion-item has been removed. Use new tuiAccordion instead. See example https://taiga-ui.dev/components/accordion -->
<tui-accordion>
    <button tuiAccordion>Taiga UI lazy</button>
    <tui-expand>
        <ng-container *tuiItem>I'm lazy content</ng-container>
    </tui-expand>
</tui-accordion>

<!-- TODO: (Taiga UI migration) tui-accordion-item has been removed. Use new tuiAccordion instead. See example https://taiga-ui.dev/components/accordion -->
<tui-accordion>
    <button tuiAccordion>Taiga UI eager</button>
    <tui-expand>I'm eager content</tui-expand>
</tui-accordion>
        `;

        expect(await migrate(before)).toEqual(after);
    });

    it('migrates standalone tui-expand content template', async () => {
        const before = `
<tui-expand [expanded]="expanded">
    <ng-template tuiExpandContent>
        <p>NOBODY expects the Spanish Inquisition!</p>
    </ng-template>
</tui-expand>
        `;

        const after = `
<tui-expand [expanded]="expanded">
    <ng-template tuiItem>
        <p>NOBODY expects the Spanish Inquisition!</p>
    </ng-template>
</tui-expand>
        `;

        expect(await migrate(before)).toEqual(after);
    });

    afterEach(() => resetActiveProject());
});
